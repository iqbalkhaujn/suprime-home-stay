const cfg={whatsapp:"917828456696"};
document.querySelector(".menu-btn").onclick=()=>document.querySelector("nav").classList.toggle("open");

let hindi=false;
document.getElementById("lang").onclick=()=>{
  hindi=!hindi;
  document.documentElement.lang=hindi?"hi":"en";
  document.querySelectorAll("[data-en]").forEach(el=>el.textContent=el.dataset[hindi?"hi":"en"]);
  document.getElementById("lang").textContent=hindi?"English":"हिंदी";
};

function waLink(text){
  return "https://wa.me/"+cfg.whatsapp+"?text="+encodeURIComponent(text);
}

document.getElementById("whatsapp").href=waLink(
  "Hello Suprime Home Stay! I would like to enquire about room availability."
);

document.getElementById("floatingWhatsapp").href=waLink(
  "Hello Suprime Home Stay! I would like to enquire about a stay."
);

document.getElementById("bookingForm").addEventListener("submit",()=>{
  document.getElementById("formStatus").textContent=
    "Sending your booking enquiry...";
});
