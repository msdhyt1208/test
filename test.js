const main =document.querySelector("main");
const height =document.querySelector("#height>p") ;
const width =document.querySelector("#width>p") ;
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
  console.log(`${main.clientWidth}:${main.clientHeight}`);
  height.textContent =main.clientHeight;
  width.textContent = main.clientWidth;
})
