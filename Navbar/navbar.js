


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDbjDTAO6RvjVEINQmb4_ZilkFti-sEW6s",
    authDomain: "jsproject-2.firebaseapp.com",
    projectId: "jsproject-2",
    storageBucket: "jsproject-2.firebasestorage.app",
    messagingSenderId: "825089000631",
    appId: "1:825089000631:web:eb9984acab31b75b2c3932",
    measurementId: "G-3TK78M2BZ6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const author=getAuth(app)


let signUpBtn=document.getElementById("signUpBtn");
signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault()
let signUpModal=new bootstrap.Modal(document.getElementById("signUpModal"));
signUpModal.show()


let signUpSubmitBtn=document.getElementById("signUpSubmitBtn");
signUpSubmitBtn.addEventListener("click",async()=>{

    
let sNameFromModal=document.getElementById("signup-name").value.trim();
let sEamilFromModal=document.getElementById("signup-email").value.trim();
let sPasswordFromModal=document.getElementById("signup-password").value.trim();

if(sEamilFromModal === "" || sNameFromModal==="" || sPasswordFromModal === ""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter all fields",
      }).then(()=>{
        signUpModal.show()
      })
      return;
}
try{
          await createUserWithEmailAndPassword(author,sEamilFromModal,sPasswordFromModal).then(()=>{
            Swal.fire({
                title: "registered successfully!",
                icon: "success",
              }).then(()=>{
                document.getElementById("signup-name").textContent=""
                document.getElementById("signup-email").textContent=""
                document.getElementById("signup-password").textContent=""
                // location.href="./shop-now.html"
              })
          })
}catch(err){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      }).then(() => {
        signUpModal.hide()
        
      })
      return;
}
})
})


let loginBtn=document.getElementById("loginBtn");
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
let loginModal=new bootstrap.Modal(document.getElementById("loginModal"));
loginModal.show()

let loginSubmitBtn=document.getElementById("loginSubmitBtn");
loginSubmitBtn.addEventListener("click",async()=>{

let sEamilFromModal=document.getElementById("login-email").value.trim();
let sPasswordFromModal=document.getElementById("login-password").value.trim();

if(sEamilFromModal === ""  || sPasswordFromModal === ""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter all fields",
      }).then(()=>{
        loginModal.show()
      })
      return;
}
try{
          await signInWithEmailAndPassword(author,sEamilFromModal,sPasswordFromModal).then(()=>{
            Swal.fire({
                title: "logged successfully!",
                icon: "success",
              }).then(()=>{
               
                document.getElementById("login-email").textContent=""
                document.getElementById("login-password").textContent=""
                location.href="./shop-now.html"
              })
          })
}catch(err){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      })
}
})
})