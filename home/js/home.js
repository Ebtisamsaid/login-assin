 document.getElementById('userName').innerHTML=localStorage.getItem('sessionUsername');
 var logoutBtn = document.getElementById('logoutBtn');

 logoutBtn.addEventListener('click',function(){
  localStorage.removeItem('sessionUsername')
 })