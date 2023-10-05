const housetitle = document.getElementsByClassName("house-title")[0];
const gallery = document.getElementsByClassName('gallery')[0];
const smalldetails = document.getElementsByClassName("small-details")[0];
const iframe = document.getElementById("iframe");
{/* <div class="house-title">
            <h1>Wenge House</h1>
            <div class="row">
                <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <span>245 Reviews</span>
                </div>
                <div>
                    <p>Location: San Francisco, California, United States</p>
                </div>
            </div>
        </div> */}



let houseobj = (document.cookie.substring(4))
let house = JSON.parse(houseobj);
document.cookie="";
        
 

 housetitle.innerHTML =`<h1>${house.name}</h1>
 <div class="row">
     <div>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <i class="far fa-star"></i>
         <span>${house.reviewsCount} Reviews</span>
     </div>
     <div>
         <p>Location: ${house.address}</p>
     </div>
 </div>`;

 gallery.innerHTML = `
 <div class="gallery-img-1"><img src=${house.images[0]}></div>
     <div><img src= ${house.images[1]}></div>
     <div><img src=${house.images[2]}></div>
     <div><img src=${house.images[3]}></div>
     <div><img src=${house.images[5]}></div>`
 
smalldetails.innerHTML = `<h2>Entire rental unit hosted by Brandon</h2>
<p>${house.persons} guest &nbsp; &nbsp; ${house.beds} beds &nbsp; &nbsp; ${house.bathrooms} bathroom</p>
<h4>$${house.price.total} / day</h4>`     
 
iframe.src=`https://maps.google.com/maps?q=${house.lat},${house.lng}&z=15&output=embed`