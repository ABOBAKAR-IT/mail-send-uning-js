//https://myaccount.google.com/lesssecureapps   past tihs link in url and allow less secure apps ...for locolhost if you run app https no need to allow this link
const nodemailer=require('nodemailer')

function emailsender(email){
    console.log("email");
    let mailTransporter=nodemailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        port:587,//465
        secure:false,
        requireTLS:true,
        auth:{
            user:"ranaabobakarit@gmail.com",
            pass:"enter mail password"
        }
    });
const msg= "AOA\n rana g kya hal ha."
let mailDetails={
    from:"ranaabobakarit@gmail.com",
    to:"19014156-022@uog.edu.pk",
    subject:"RANA ABOBAKAR",
    text:msg,
}
return mailTransporter.sendMail(mailDetails,(err,info)=>{
    if(err)
    console.log(err);
    else
    console.log("mail send");
})
}
try {
    
    const ok=emailsender("19014156-022@uog.edu.pk")
    if(ok)
    console.log("mail send");
} catch (error) {
    console.log(error);
}