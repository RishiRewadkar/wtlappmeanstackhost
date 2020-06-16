var express = require('express');
var router = express.Router();
var Company= require('../models/company');
var jwt = require('jsonwebtoken');
var Internship = require('../models/internship');
var Student= require('../models/student');
var Appliedinternship = require('../models/appliedinternship');
var multer = require('multer');
var path=require('path');
var loginstatus=false;

var decodedToken='';
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

router.post('/studentapplied',function(req,res,next){
  Student.findOne({_id:req.body.s_id},function(err,founddata){
    if(err)
    {
      console.log("Phir le aya");
    }
    else
    {  
      var appliedinternship = new Appliedinternship({
        companyname:req.body.companyname,
        studentname:founddata.studentname,
        studentCGPA:founddata.studentCGPA,
        studentid:founddata.studentid,
        year:req.body.year,
        resume:req.body.resume,
        branch:req.body.department,
        selected:false,
        msg:'nothing yet'
    });
    let promise=appliedinternship.save();
    promise.then(function(doc){
      return res.status(201).json(doc);
    })
    promise.catch(function(err){
      return res.status(501).json({message:'Error While Applying'});
    })
    }
  })
});

router.post('/studentlogin',function(req,res,next){
  
  let promise=Student.findOne({studentid:req.body.studentid}).exec();
  promise.then(function(doc){
      if(doc){
        if(doc.password==req.body.password){
          let token=jwt.sign({studentid:doc.studentid},'secret',{expiresIn:'1h'});
          return res.status(200).json(token);
        }else{
         
          return res.status(501).json({message:"Invalid Credentials"});
        }
      }
      else
      {
        return res.status(501).json({message:"User StudentId is not registered"})
      }
  });

  promise.catch(function(err){
    return res.status(501).json({message:"some internal Error"});
  });

}); 
 
//Admin Login 
router.post('/adminlogin',function(req,res,next){
    console.log(req.body.Adminemail+" "+req.body.password)

    if(req.body.Adminemail=="rishi@gmail.com" && req.body.password=="apple")
    {
      loginstatus=true;
      return res.status(200).json({message:"CORRECT CRED"});
      
    }
    
    else
    return res.status(501).json({message:"Invalid Credentials"});
});
router.post('/loginstatus',function(req,res,next){
  if(loginstatus==true)
  return res.send({status:true});
  if(loginstatus==false)
  return res.send({status:false});
})
router.post('/adminlogout',function(req,res,next){
  loginstatus=false;
  if(loginstatus==true)
  return res.send({status:true});
  if(loginstatus==false)
  return res.send({status:false});
})

var  SFE,SSE,STE,SBE;
router.get('/studentinternship',filterval,function(req,res,next){
  Internship.find({FE:SFE,SE:SSE,TE:STE,BE:SBE},function(err,founddata){
    if(err)
    {
      console.log("Error While Retriving ");
      res.status(500).send();
    }else
    {
      if(founddata.length==0)
      {
        console.log("no internships");
      }
      console.log(founddata);
      res.send(founddata);
    }
  });
});


function filterval (req,res,next){
  SFE=req.query.SFE;
  SSE=req.query.SSE;
  STE=req.query.STE;
  SBE=req.query.SBE;
  next();
}

var compname;
router.get('/shortlist',findcid,function(req,res,next){

  Appliedinternship.find({companyname:compname},function(err,founddata){
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
      console.log(founddata);
      return res.send(founddata);
    }
  });

});

function findcid(req,res,next){
  compname=req.query.companyname;
  next();

}



router.get('/studentid', verifyToken, function(req,res,next){
  sid =decodedToken.studentid;
  Student.findOne({studentid:sid},function(err,founddata){
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


router.post('/selectedstudent',function(req,res,next){
  
  Appliedinternship.findOneAndUpdate({studentid:req.body.studentid},{$set:{selected:true}},function(err,doc){
    if(err)
    {
      console.log("Problem occures");
    }
    else{
      console.log(doc);
    }
  })
  
});


router.post('/rejectedstudent',function(req,res,next){
  Appliedinternship.findOneAndDelete({studentid:req.body.studentid},function(err,doc){
    if(err)
    {
      console.log("Problem occures");
    }
    else{
      console.log(doc);
    }
  })
  
});


router.post('/studentmsg',function(req,res,next){
  Appliedinternship.findOneAndUpdate({companyname:req.body.companyname,selected:true},{$set:{msg:req.body.msg}},function(err,doc){
    if(err)
    {
      console.log("problem has encountered");
    }
  })
})

router.post('/getmsg',function(req,res,next){
Appliedinternship.find({studentid:req.body.studentid,selected:true,msg:{$ne:null}},function(err,doc)
{
  if(err)
  {
    console.log("Wrong");
  }
  if(res)
  {
    return res.send(doc);
  }
})

})

router.post('/downloadresume',function(req,res,next){
  filepath=path.join(__dirname,'../uploads')+'/'+req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
})

router.post('/addstudent',function(req,res,next){
  var student = new Student({
    studentname: req.body.studentname,
    studentid: req.body.studentid ,
    studentCGPA: req.body.studentCGPA,
    password: req.body.password,
    FE: req.body.FE,
    SE: req.body.SE,
    TE: req.body.TE,
    BE: req.body.BE,
    COMP: req.body.COMP,
    IT: req.body.IT,
    ENTC: req.body.ENTC,
    resume: req.body.resume,
  });
  let promise=student.save();
  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message:'Error While Adding NEW STUDENT'})
  })

});


module.exports = router;
