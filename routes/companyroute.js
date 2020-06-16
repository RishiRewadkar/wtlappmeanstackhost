var express = require('express');
var router = express.Router();
var Company= require('../models/company');
var jwt = require('jsonwebtoken');
var Internship = require('../models/internship');
var Student= require('../models/student');
var Appliedinternship = require('../models/appliedinternship');
var multer = require('multer');
var companyname='';

var decodedToken='';

router.post('/addinternship',function(req,res,next){
    var internship = new Internship({
      aboutinternship: req.body.aboutinternship,
      companyname: req.body.companyname ,
      durationofinternship: req.body.durationofinternship,
      startinternship: req.body.startinternship,
      internshipemail: req.body.internshipemail,
      applybefore: req.body.applybefore,
      FE: req.body.FE,
      SE: req.body.SE,
      TE: req.body.TE,
      BE: req.body.BE,
      COMP: req.body.COMP,
      IT: req.body.IT,
      ENTC: req.body.ENTC,
      // CGPA: req.body.CGPA
    });
    let promise=internship.save();
    promise.then(function(doc){
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message:'Error While Adding Internship'})
    })
  
  });


  router.post('/newCompany',function(req,res,next){
    var company = new Company({
      companyemail: req.body.companyemail,
      companyname: req.body.companyname,
      companyurl: req.body.companyurl,
      companycontact: req.body.companycontact,
      password:Company.hashPassword(req.body.password)
    });
  
    let promise=company.save();
  
    promise.then(function(doc){
      
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message:'Error regesitering user'})
    })
  });

  router.post('/Companylogin',function(req,res,next){
    console.log("I M AT COMPANY LOGIN");
    let promise=Company.findOne({companyemail:req.body.companyemail}).exec();
    promise.then(function(doc){
  
        if(doc){
          if(doc.isValid(req.body.password)){
            let token=jwt.sign({companyname:doc.companyname},'secret',{expiresIn:'1h'});
            return res.status(200).json(token);
            
          }else{
            return res.status(501).json({message:"Invalid Credentials"});
          }
        }
        else
        {
          return res.status(501).json({message:"User email is not registered"})
        }
  
    });
  
    promise.catch(function(err){
      return res.status(501).json({message:"some internal Error"});
    });
  
  });
  
  router.get('/companyname', verifyToken, function(req,res,next){
    companyname =decodedToken.companyname;
    return res.status(200).json(decodedToken.companyname);
  })

  function verifyToken(req,res,next){
    let token = req.query.token;
  
    jwt.verify(token,'secret', function(err, tokendata){
      if(err){
        return res.status(400).json({message:' Unauthorized request'});
      }
      if(tokendata){
        decodedToken = tokendata;
        next();
      }
    })
  }

  router.post('/getcompany',function(req,res,next){
    Company.find({},function(err,founddata){
      if(err)
      {
        console.log("Error While Retriving ");
        res.status(500).send();
      }else
      {
        if(founddata.length==0)
        {
          console.log("nothing to show");
        }
        else{
          var responseobject=founddata;
        }
        console.log("FOUND DATA");
        console.log(founddata);
        res.send(founddata);
      }
    });

  });


  router.get('/uploadedinternship',verifyToken,function(req,res,next){
    cn =decodedToken.companyname;
    
    Internship.find({companyname:cn},function(err,founddata){
      if(err)
      {
        console.log("Error While Retriving ");
        res.status(500).send();
      }else
      {
        if(founddata.length==0)
        {
          console.log("nothing to show");
        }
        else{
          var responseobject=founddata;
        }
        console.log("FOUND DATA");
        console.log(founddata);
        res.send(founddata);
      }
  
    });
  })
  

  router.post('/deleteinternship',function(req,res,next){
    console.log("FOUND ROUTER");
    console.log(req.body);
    var id=req.body._id;
  
    Internship.findOneAndRemove({_id:id},function(err){
      if(err)
      {
         console.log("Error in deleting");
         return res.status(500).send();
      }
    })
  });

  router.post('/deletecompany',function(req,res,next){
    var cname=req.body.cname;
    console.log("I AM HERE");
    Internship.findOneAndRemove({companyname:cname},function(err){
      if(err)
      {
         console.log("Error in deleting");
         return res.status(500).send();
      }
    })
   Company.findOneAndRemove({companyname:cname},function(err){
      if(err)
      {
         console.log("Error in deleting");
         return res.status(500).send();
      }
    })
    Appliedinternship.findOneAndRemove({companyname:cname},function(err){
      if(err)
      {
         console.log("Error in deleting");
         return res.status(500).send();
      }
    })
  });

module.exports = router;

  