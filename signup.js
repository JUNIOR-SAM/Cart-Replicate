const toast = (message, bgColor, color, fontWeight, marginTop, borderRadius) =>{
Toastify({
  text:message,
  duration: 3000,
  // destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: bgColor,
    color,
    fontWeight,
    marginTop,
    borderRadius,
  },
  onClick: function(){} // Callback after click
}).showToast();
}


const allUser = []

const signUp = () =>{
  if(firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '' || confirmPassword.value === ''){
      toast('Please fill all the fields' , 'red', 'white', 'bold', '50px' , '50px')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)

  }else if(firstName.value.length < 3 || lastName.value.length < 3){
      toast('First name and last name must be at least 3 characters long' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
      else if(email.value.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === -1){
      toast('Please enter a valid email address' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value.length < 8){
      toast('Password must be at least 8 characters long' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value.search(/[0-9]/) === -1){
      toast('Password must contain at least one number' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value.search(/[a-z]/) === -1){
      toast('Password must contain at least one lowercase letter' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value.search(/[A-Z]/) === -1){
      toast('Password must contain at least one uppercase letter' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value.search(/[^a-zA-Z0-9]/) === -1){
      toast('Password must contain at least one special character' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if (password.value.search(/[\s]/) !== -1) {
      toast('Password must not contain any spaces' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }
    else if(password.value !== confirmPassword.value){
      toast('Password does not match' , 'red', 'white', 'bold')
      sub.innerHTML = '.......loading'
      setTimeout(() => {
        sub.innerHTML = 'Sign Up'   
      }, 1000)
    }

    // else{
    //   const user = {
    //     firstName:firstName.value,
    //     lastName:lastName.value,
    //     email:email.value,
    //     password:password.value
    //   };
    //   allUser.push(user);
    //   console.log(allUser);
    //   localStorage.setItem("user" , JSON.stringify(allUser));
    //   toast("signup successful", "green", "white", "bold")
    //   sub.innerHTML = '.........loading';
    //   setTimeout(() => {
    //     sub.innerHTML = 'Sign Up'   
    //   }, 2000)
    //     window.location.href = 'Signin.html'  
    // }

    else {
      const allUsers = JSON.parse(localStorage.getItem('user')) || [];     
      
      const emailExists = allUsers.some((user) => user.email === email.value);
      if (emailExists) {
          toast("Email already exists!", "red", "white", "bold" , "50px", "50px");
          sub.innerHTML = ".......loading";
          setTimeout(() => {
              sub.innerHTML = "Sign Up";
          }, 1000);
          allUser = ""// Stop further execution
      }
  
      // Check if the password already exists
      const passwordExists = allUsers.some((user) => user.password === password.value);
      if (passwordExists) {
          toast("Password already exists!", "red", "white", "bold");
          sub.innerHTML = ".......loading";
          setTimeout(() => {
              sub.innerHTML = "Sign Up";
          }, 1000);
          allUser = "" // Stop further execution
      }
      const user = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
      };
      allUsers.push(user);
      localStorage.setItem('user', JSON.stringify(allUsers));
      toast("signup successful", "green", "white", "bold" , "50px", "50px");
      sub.innerHTML = '.........loading';
      setTimeout(() => {
          sub.innerHTML = 'Sign Up';
        }, 7000);
        window.location.href = 'Signin.html'; 
      }

    const myUser = JSON.parse(localStorage.getItem('user'));
    console.log(myUser);
    

}



