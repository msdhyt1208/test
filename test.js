const main =document.querySelector("main");
const height =document.querySelector("#height>h1") ;
const width =document.querySelector("#width>h1") ;
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
  console.log(`${main.clientWidth}:${main.clientHeight}`);
  height.textContent =main.clientHeight;
  width.textContent = main.clientWidth;
})
