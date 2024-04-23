function myfun()
{
    let usernameval=document.getElementById('username').value;
    
    if(usernameval=="")
    {
        document.getElementById('message').innerHTML="** plese fill username";
        return false;
    }
}










































































































// // // fetched data with their id's

// const form=document.getElementById('form');
// const username=document.getElementById('uesrname');
// const email=document.getElementById("email");
// const phone_number=document.getElementById("phone number");
// const password=document.getElementById("password");
// const cpassword=document.getElementById("cpassword");


// // // -------------------adding events

// // form.addEventListener('submit',(event)=>{
// //     event.preventDefault();
// //     validate();
// // })


// // // ---------------------------defining isemail function and validating more email
// // const isemail =()=>{
// //     var atsymbol =emailval.indexOf("@");
// //     if(atsymbol < 1)
// //     return false;

// //     var dot = emailval.lastIndexOf('.');
// //     if(dot <= atsymbol+2)
// //     return false;

// //     if(dot === emailval.length-1)
// //     return false;

// //     return true;
// // }




// //     defining validate function
// // const validate = () => 
// // {
//     const usernameval=username.value.trim();
//     const emailval=email.value.trim();
//     const phone_numberval=phone_number.value.trim();
//     const passwordval=password.value.trim();
//     const cpasswordval=cpassword.value.trim();


// //     // ------------------validate username
//     if(usernameval === ""){
//         setErrormsg(username,'user name cannot be blank');
//     }else if(usernameval.length < 3){
//         setErrormsg(username,'user name is of minimum 3 character');
//     // }else if(!usernameval.val.match(/^[a-zA-Z]+$/)){

//     //     console.log("hwllo")
//         // alert("the name filed only contain letters");
//         // setErrormsg(username,'only alphabets are allowed')
//     }else{
//         setSuccessmsg(username);
//     }

// //     // --------------------validate email
// //     if(emailval === ""){
// //         setErrormsg(email,'email cannot be blank');
// //     }else if(!email(emailval)){
// //         setErrormsg(email,'not valid email');
// //     }else{
// //         setSuccessmsg(email);
// //     }


// //     // --------------------validate phone
// //     if(phone_numberval === ""){
// //         setErrormsg(phone_number,'phone number cannot be blank');
// //     }else if(phone_numberval.length != 10){
// //         setErrormsg(phone_number,'phone number is not valid');
// //     }else{
// //         setSuccessmsg(phone_number);
// //     }
// // }

// // function setErrormsg(input, errormsg)
// // {
// //     const formcontrol=input.parentElement;
// //     const small= formcontrol.querySelector('small');
// //     formcontrol.className='form-control error';
// //     small.innerText= errormsg;
// // }

// // function setSuccessmsg(input)
// // {
// //     const formcontrol=input.parentElement;
// //     formcontrol.className='form-control success';
// // }