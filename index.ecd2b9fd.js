var t=function(t){let e=null;return function(t){null!==e&&e!==t&&e.classList.remove("selected"),t.classList.toggle("selected"),e=t.classList.contains("selected")?t:null}};var e=function(){const t=document.getElementById("input"),e=document.querySelector(".text-field"),n=t.value.toLowerCase();e.innerHTML="";for(let t=0;t<n.length;t++){const l=document.createElement("span");l.textContent=n[t],l.classList.add("letter"),e.appendChild(l)}};var n=function(t){t.addEventListener("click",(function(t){t.ctrlKey&&t.target.classList.contains("letter")&&t.target.classList.toggle("selected")}))};var l=function(t,e){const n=document.querySelector(".text-field"),l=document.createElement("div");l.classList.add("selection-rect"),l.style.position="absolute",l.style.left=t+"px",l.style.top=e+"px",l.style.width="0",l.style.height="0",l.style.backgroundColor="rgba(0,0,0,0)",n.appendChild(l);let s=!1,c={x:t,y:e},o={x:t,y:e};function i(t){if(!s)return;o={x:t.clientX,y:t.clientY};const e=o.x-c.x,n=o.y-c.y;l.style.left=Math.min(c.x,o.x)+"px",l.style.top=Math.min(c.y,o.y)+"px",l.style.width=Math.abs(e)+"px",l.style.height=Math.abs(n)+"px",document.querySelectorAll(".letter").forEach((t=>{const e=t.getBoundingClientRect();e.left<Math.max(c.x,o.x)&&e.right>Math.min(c.x,o.x)&&e.top<Math.max(c.y,o.y)&&e.bottom>Math.min(c.y,o.y)?t.classList.add("selected"):t.classList.remove("selected")}))}n.addEventListener("mousedown",(function(t){s=!0,c={x:t.clientX,y:t.clientY},document.addEventListener("mousemove",i)})),document.addEventListener("mouseup",(function(){s=!1,document.removeEventListener("mousemove",i)}))};var s=function(t,e){if(!t.target.classList.contains("letter")){e.querySelectorAll(".letter").forEach((t=>t.classList.remove("selected")))}};var c=function(){const e=document.querySelector(".text-field");console.log("Select settings initialized");const c=t();e.addEventListener("click",(t=>{console.log("Click event on .text-field");const s=t.target;!t.ctrlKey&&s.classList.contains("letter")?(c(s),n(e)):l(0,0)})),document.addEventListener("click",(t=>{e.contains(t.target)||s(t,e)}))};document.querySelector(".button").addEventListener("click",(t=>{e(),c()}));
//# sourceMappingURL=index.ecd2b9fd.js.map