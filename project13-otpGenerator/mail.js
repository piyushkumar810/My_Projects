const nodemailer=require('nodemailer');

const otp=Math.floor(Math.random()*100000);

const verifyMail=()=>{
   try {
    const mailSender= nodemailer.createTransport({
        service:"gmail",
        secure:"true",
        port:465,
        auth:{
            user:"piyushkumar810235@gmail.com",
            pass:"lsoj bvrc qtaj phkn"
        }
    })

    const receiver={
        from:"piyushkumar810235@gmail.com",
        to:"q.sikendra@gmail.com",
        subject:"Testing",
        text:`${otp} fuck off siku`
    }


    mailSender.sendMail(receiver,(error, emailResponse)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("success", emailResponse);
        }
        response.end();
    })


   } catch (error) {
    console.log(error);
   }
}

verifyMail();