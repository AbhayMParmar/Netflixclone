function validate()
{
     if(document.myForm.EMail.value=="")
       {
         alert("Please Enter your Email!");
         document.myForm.EMail.focus();
         return false;
       }
    
  if(document.myForm.password.value==""||isNaN(document.myForm.password.value)||
     document.myForm.password.value.length!=6)
  {
       alert("Please Enter the Password");
       document.myForm.password.focus();
       return false;
   }
   return(true);
}

 //Add an event listener for hamburger
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
 const icon = accordian.querySelector('.icon');
 const answer= accordian.querySelector('.answer');

 accordian.addEventListener('click', () => {
  
  if(icon.classList.contains('active')){
    icon.classList.remove('active');
    answer.style.maxHeight = null;
  }
  else{
    icon.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
  })
 })

 //Login Form
 function validate()
 {
      if(document.myForm.EMail.value=="")
        {
          alert("Please Enter your Email!");
          document.myForm.EMail.focus();
          return false;
        }
     
   if(document.myForm.password.value==""||isNaN(document.myForm.password.value)||
      document.myForm.password.value.length!=6)
   {
        alert("Please Enter the Password");
        document.myForm.password.focus();
        return false;
    }
    return(true);
 }

//Register form

function validation()
{
    if(document.myForm.username.value=="")
       {
         alert("Please Enter your Username!");
         document.myForm.username.focus();
         return false;
       }         
     
  if(document.myForm.password.value==""||isNaN(document.myForm.password.value)||
     document.myForm.password.value.length!=6)
  {
       alert("Please Enter the Password");
       document.myForm.password.focus();
       return false;
   }
   if(document.myForm.password2.value==""||isNaN(document.myForm.password2.value)||
     document.myForm.password2.value.length!=6)
  {
       alert("Please Enter The Confirm Password.");
       document.myForm.password2.focus();
       return false;
    }
    return(true); 
  }
  //Movable Login And Registration