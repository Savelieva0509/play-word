var t=function(){const t=document.querySelector(".text-field");t.addEventListener("mouseover",(function(t){t.target.classList.contains("letter")&&(t.target.style.color="red")})),t.addEventListener("mouseout",(function(t){t.target.classList.contains("letter")&&(t.target.style.color="")}))};var e=function(){const t=document.getElementById("input"),e=document.querySelector(".text-field"),n=t.value.toLowerCase();e.textContent=n};var n=function(){const t=document.querySelector(".text-field"),e=t.textContent;t.innerHTML="",e.split("").forEach((e=>{const n=document.createElement("span");n.textContent=e,n.classList.add("letter"),t.appendChild(n)}))};document.querySelector(".button").addEventListener("click",(o=>{e(),n(),t()}));
//# sourceMappingURL=index.f3745137.js.map
