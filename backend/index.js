'use strict';
const express = require('express');
const yelp = require('yelp-fusion');
const cors = require('cors');
const geoip = require('geoip-lite');
const client = yelp.client('ryl4Glj6cGhBiK2uGlMooaby4JdARKuRgSGnz2ZqXSWxw1DEOMf820eeFDeWaciMNdT3zC9O6KJ6dI826PpqBPo6j42CdtG_WosUDJne_LPasOAzH_f1eB56WHlTXXYx');
const PORT = 5000;


const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/search/:location', (req, res, next) => {
     let options = {       
      categories: "coffee",
      limit:50,
      sort_by:'distance'
    };

    if(req.params.location.includes("|")){
      let latlong = req.params.location.split("|");
      options.latitude = latlong[0];
      options.longitude = latlong[1];
    }else{
      options.location = req.params.location;
    }
    
    client.search(options).then(response => {
      res.json(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });
 });
  
  app.get('/api/business/:id', (req, res, next) => {
    client.business(req.params.id).then(response => {
        res.json(response.jsonBody);
      }).catch(e => {
        console.log(e);
      });
  });

  app.get('/api/reviews/:id', (req, res, next) => {
    client.reviews(req.params.id).then(response => {
        res.json(response.jsonBody);
      }).catch(e => {
        console.log(e);
      });
  });

  app.get('/api/location/', (req, res, next) => {
      let visitorIP = req.connection.remoteAddress;
      let geoObject = geoip.lookup(visitorIP);
      console.log(geoObject);      
      if(geoObject!=null){
        res.json(geoObject);
        //userLocation = geoObject.city + geoObject.region + geoObject.country;
      }else{
        res.json({location:"10109"});
      }
      
     
  });

   /*
client.allCategories().then(response => {
  console.log(response.jsonBody.categories);
}).catch(e => {
  console.log(e);
});*/

  app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server running on PORT ${PORT}!\n`);
  });
  