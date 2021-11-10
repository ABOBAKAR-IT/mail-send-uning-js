const express= require ("export")
const nodemailer=require('nodemailer')

function emailsender(email){
    console.log("email");
    let mailTransporter=nodemailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user:"ranaabobakarit@gmail.com",
            pass:"ranaabobakarit."
        }
    });
const msg= "AOA\n rana g kya hal ha."
let mailDetails={
    from:"ranaabobakarit@gmail.com",
    to:email,
    subject:"RANA ABOBAKAR",
    text:msg,
}
return mailTransporter.sendMail(mailDetails)
}
try {
    
    const ok=emailsender("19014156-022@uog.edu.pk")
    if(ok)
    console.log("mail send");
} catch (error) {
    console.log(error);
}