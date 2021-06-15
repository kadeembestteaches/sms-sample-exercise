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
    
    const accountSid =`PUT YOUR ACCOUNT SID IN HERE` ;
    const authToken = `PUT YOUR AUTH TOKEN IN HERE`;
    const client = require('twilio')(accountSid, authToken);


    /*
    partner.loveMeTilMyDyingDay()
    .then(()=>{
        console.log(`We are in love for ever ever`)
    })
    .catch(()=>{
        console.log(`Left me for someone else. I am going to cry now`)
    }) */


    client.messages
    .create({
        body: `Thank you, ${req.body.pName}. We got your message and we will respond shortly! Thank you!`,
        from: '+13175932694',
        to: `PUT YOUR NUMBER IN HERE`, // Because we are using the trial version, we can only send sms text messaes to numbers that we have verified, i.e, our numbers
    })
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(`Error ocurred ${err}`);
    });



    
})

module.exports = router