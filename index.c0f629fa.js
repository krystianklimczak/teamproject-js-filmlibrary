// signup
const e=document.querySelector("#signup-form");e.addEventListener("submit",t=>{t.preventDefault();// get user info
let n=e["signup-email"].value,o=e["signup-password"].value;// sign up the user
auth.createUserWithEmailAndPassword(n,o).then(t=>{// close the signup modal & reset form
let n=document.querySelector("#modal-signup");M.Modal.getInstance(n).close(),e.reset()})});// logout
const t=document.querySelector("#logout");t.addEventListener("click",e=>{e.preventDefault(),auth.signOut().then(()=>{console.log("user signed out")})});// login
const n=document.querySelector("#login-form");n.addEventListener("submit",e=>{e.preventDefault();// get user info
let t=n["login-email"].value,o=n["login-password"].value;// log the user in
auth.signInWithEmailAndPassword(t,o).then(e=>{console.log(e.user);// close the signup modal & reset form
let t=document.querySelector("#modal-login");M.Modal.getInstance(t).close(),n.reset()})});//# sourceMappingURL=index.c0f629fa.js.map

//# sourceMappingURL=index.c0f629fa.js.map
