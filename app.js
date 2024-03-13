require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {PrimaryDeliveries}= require('./appconfig');
const { SecondaryDeliveries}= require('./appconfig');
const { PickUps,sequelize}= require('./appconfig');
const Sequelize = require('sequelize');
const { Op ,literal} = Sequelize;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.post('/primaryDeliveries', async (req, res) => {
   
  try {
     try {
        const newSinglePrimaryDeliveries = await PrimaryDeliveries.create(req.body); 
        
        if(newSinglePrimaryDeliveries){
            res.json(newPrimaryDeliveries);
          }  

     } catch (error) {
      
        const newPrimaryDeliveries = await PrimaryDeliveries.bulkCreate(req.body);

        if(newPrimaryDeliveries){
          res.json(newPrimaryDeliveries);
          } 
     }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/needsPickUps', async (req, res) => {     



  const dvdIds = req.body.map(item => item.DVD_id_Future_Pickup);


  let result,result1
    try {
        result = await SecondaryDeliveries.findAll({
          attributes: ['customerId'],
          where: {
            order_No: {
              [Op.any]: literal(`
                SELECT "order_No"
                FROM "Primarydeliveries" AS pd
                WHERE pd."DVD_id" NOT IN (${dvdIds.join(',')})
                  AND (
                    SELECT EXTRACT(DAY FROM inner_pd."createdAt"::timestamp) + inner_pd."No_of_Days" AS result
                    FROM "Primarydeliveries" AS inner_pd
                    WHERE inner_pd."DVD_id" = pd."DVD_id"
                  ) = ANY (
                    SELECT EXTRACT(DAY FROM "PickUps"."createdAt"::timestamp) AS day_number
                    FROM "PickUps"
                  )
              `),
            },
          },
          raw: true, // Ensures that the result is plain JSON objects
          nest: true, // Nesting the result to make it more readable
        });


        const result2 = await PrimaryDeliveries.findAll({
          attributes: ['order_No', 'movie_Name', 'DVD_id'],
          where: {
            DVD_id: {
              [Op.notIn]: dvdIds,
            },
            [Op.and]: sequelize.literal(`
              (
                SELECT EXTRACT(DAY FROM inner_pd."createdAt"::timestamp) + inner_pd."No_of_Days" AS result
                FROM "Primarydeliveries" AS inner_pd
                WHERE inner_pd."DVD_id" = pd."DVD_id"
              ) = ANY (
                SELECT EXTRACT(DAY FROM "PickUps"."createdAt"::timestamp) AS day_number
                FROM "PickUps"
              )
            `),
          },
        });
        













       console.log(result2);
        result1=await PickUps.findAll({attributes:['createdAt'],where:{
          createdAt:{
            [Op.any]:literal(`SELECT  "createdAt" FROM "PickUps" as pu
             WHERE pu."DVD_id_Future_Pickup" IN (${dvdIds.join(',')})` )
          },
         }})

         console.log(result1);
         // Handle the result as needed
         res.status(200).json(result);
       } catch (error) {
         console.error('Error:', error.message);
         res.status(500).json({ error: 'Internal Server Error' });
       } finally {
         // Close the Sequelize connection when done
         await sequelize.close();
       }
      //  const  createdAt= result1.map(item => item.createdAt);
      //  console.log(createdAt);
    


  
  
      //  const firstTimestamp = new Date(createdAt[0]);
      //  const day = firstTimestamp.getDate();
       
      //  console.log(day); 














  })











  
  

  app.post('/secondaryDeliveries', async (req, res) => {
    try {
      const newSecondaryDeliveries = await SecondaryDeliveries.bulkCreate(req.body);
      res.json(newSecondaryDeliveries);
    } catch (error) {
        console.log({ error: error.message });
      res.status(500).json({ error: error.message });
    }
  });

app.listen(3000, async () => {
    console.log('Server started on http://localhost:3000')
    console.log('Press Ctrl-C to terminate...')
})