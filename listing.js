
const option = document.getElementById("options");
const locinfo = document.getElementById("locinfo");
const container = document.getElementsByClassName("left-col")[0];


 let loc = localStorage.getItem("loc")
let info =localStorage.getItem("result");
let obj = JSON.parse(info);
option.innerText= `${obj.results.length}+ Options`;
locinfo.innerText = `Recommended Places In ${loc}`;


// <div class="house">
// <div class="house-img">
//     <img src="images/image-s6.png">
// </div>
// <div class="house-info">
//     <p>Private Villa in San Francisco</p>
//     <h3>Deluxe Queen Room With Street View</h3>
//     <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star-half-alt"></i>
//     <i class="far fa-star"></i>
//     <div class="house-price">
//         <p>2 Guest</p>
//         <h4>$ 100 <span>/ day</span></h4>
//     </div>
// </div>
// </div>

function addtoUi(arr){
    for(let i=0;i<10;i++){
     let house = document.createElement("div");
     house.className="house";
     house.innerHTML=`<div class="house-img">
         <img src=${arr[i].images[0]}>
        </div>
     <div class="house-info">
          <p>${arr[i].name}</p>
        <h3>${arr[i].type}</h3>
         <p>${arr[i].bedrooms} Bedroom / ${arr[i].bathrooms} Bathroom / Wifi / Kitchen</p>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
         <i class="far fa-star"></i>
         <div class="house-price">
              <p>${arr[i].persons} Guest</p>
             <h4>$ ${arr[i].price.total}<span>/ day</span></h4>
         </div>
     </div>`
    container.append(house);
    house.addEventListener("click",(e)=>{
        e.preventDefault();
     document.cookie = `arr=${JSON.stringify(arr[i])};path=/`
     window.location.href = "./house.html"
    })
    }
}

addtoUi(obj.results);