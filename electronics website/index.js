var myname = document.myform.fullname.value;
var myemail = document.myform.email.value;
var mymessage = document.myform.message.value;

 function formValidation(){
    if( myname.isEmpty()){
        alert("Fill in the name details")
    }
    else if (myemail.isEmpty()){
        alert("Fill in your email")
    }
    else if (mymessage.isEmpty()){
        alert("Enter the message")
    }
    
    else{
        alert("Your message has been sent successully")
    }
 }