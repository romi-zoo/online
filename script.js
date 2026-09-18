const enterZoo=document.getElementById("enterZoo");
let entering=false;
enterZoo.addEventListener("click",()=>{
  if(entering)return;
  entering=true;
  document.querySelector(".entrance").classList.add("entering");
  enterZoo.disabled=true;
  setTimeout(()=>{window.location.href="zoo.html"},1350);
});
