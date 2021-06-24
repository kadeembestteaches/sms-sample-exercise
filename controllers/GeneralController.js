const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.get("/",(req,res)=>{

    res.render("home",{
        title:"Home"
    });
})

router.get("/message",(req,res)=>{
    
    res.render("message",{
        title:"Message"
    });
})


router.post("/message",(req,res)=>{
    
    const accountSid =process.env.ACCOUNT_SID ;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        body: `Thank you, ${req.body.pName}. We got your message and we will respond shortly! Thank you!`,
        from: '+13175932694',
        to: process.body.phoneNo, // Because we are using the trial version, we can only send sms text messaes to numbers that we have verified, i.e, our numbers
    })
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(`Error ocurred ${err}`);
    });



    
})

module.exports = router