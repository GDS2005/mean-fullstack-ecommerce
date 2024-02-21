const express = require('express');
const router = express.Router();

Product = require('../model/product');

router.post('/products', (req, res, next) => {
  /*try{
    const token = req.headers.authorization;
    jwt.verify(token, "secret_string")
    next();
  }catch(err){
    res.status(401).json({
      message:"Error with Authentication token"
    })
  }*/
  
    const products = new Product({
      name: req.body.name, 
      description: req.body.description, 
      price: req.body.price
    });
    products.save()
        .then(() => {
            res.status(200).json({
                message: "¡New Product added!"
            })
        })
})

router.get('/products',(req, res, next) => {
  Product.find()
  .then((data) => {
      res.json({'Products:': data});
  })
  .catch(() => {
      console.log('Error fetching entries')
  })
})

module.exports = router;