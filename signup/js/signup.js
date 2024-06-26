


//------------signup inputs---------///
var nameSignupinput=document.getElementById('namesignupidinput');
var signupEmailIdinput=document.getElementById('signupemailidinput');
var signupPassIdinput=document.getElementById('signuppassidinput');
var sinupBtn=document.getElementById('sinupBtn');
var signupMsg=document.getElementById('signupMsg')
var SuccessMsg=document.getElementById('SuccessMsg')
var signupArr=[];

// signup//

if(localStorage.getItem('signupcontainer')!=null){
    signupArr=JSON.parse(localStorage.getItem('signupcontainer'));
}else{
    signupArr=[];
}

sinupBtn.addEventListener('click', function () {
    
    if(nameSignupinput.value == '' || signupEmailIdinput.value == ''|| signupPassIdinput.value == ''){
        signupMsg.classList.remove('d-none');
        SuccessMsg.classList.add('d-none');
      
    }
    else{
        var signup = {
            name:nameSignupinput.value ,
            email:signupEmailIdinput.value,
            password:signupPassIdinput.value,
          
        }
        

       
  
        signupArr.push(signup);
     
        localStorage.setItem('signupcontainer',JSON.stringify(signupArr));
        clearform();
       
        SuccessMsg.classList.remove('d-none');
        signupMsg.classList.add('d-none');
      
}}

)

function clearform(){
    nameSignupinput.value='';
    signupEmailIdinput.value='';
    signupPassIdinput.value='';
  
}



