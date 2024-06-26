

// -----login inputs-------//
var loginEmailInput=document.getElementById('emailidinput');
var loginPassInput=document.getElementById('passidinput');
var loginBtn=document.getElementById('loginBtn')
var loginsuccessMsg=document.getElementById('loginsuccess')
var loginfalidMsg=document.getElementById('loginfalid');
var requiredBtnMsg=document.getElementById('requiredBtn');
 var signupArr=[];
 signupArr= JSON.parse(localStorage.getItem('signupcontainer'))
// // emailexist fun.




loginBtn.addEventListener('click',function(){
    

if( loginEmailInput . value == '' || loginPassInput . value == '' ){
    requiredBtnMsg.classList.remove('d-none')
    
}

else{
    check();
 
    requiredBtnMsg.classList.add('d-none')
  
}
    }
) 


function check(){
    

    var existEmail = loginEmailInput.value;
    var existPassword = loginPassInput.value;

    for( var i=0 ; i < signupArr.length ; i++){

if(signupArr[i].email.toLowerCase() == existEmail.toLowerCase() && signupArr[i].password == existPassword){
   
    localStorage.setItem('sessionUsername', signupArr[i].name)
    loginsuccessMsg.classList.remove('d-none')
    location.href='home/home.html'
    requiredBtnMsg.classList.add('d-none')
    loginfalidMsg.classList.add('d-none')
    break;
}
if (signupArr[i].email.toLowerCase() !== existEmail.toLowerCase() && signupArr[i].password !== existPassword) {
    loginfalidMsg.classList.remove('d-none')
    requiredBtnMsg.classList.add('d-none')
}
    }}