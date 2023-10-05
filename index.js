const locationinput = document.querySelector(".location-input>input");
const checkin = document.querySelector(".checkin>input");
const checkout = document.querySelector(".checkout>input");
const guest = document.querySelector(".guest>input");
const button = document.getElementById("searchbutton");

console.log(locationinput)

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let locval = locationinput.value;
    let checkinval = checkin.value;
    let checkoutval = checkout.value;
    const guests = guest.value;

api(locval,checkinval,checkoutval,guests).then( ()=>{
    window.location.href = "./listing.html";
}
);
  
    // locationinput.value="";
    // checkin.value="";
    // checkout.value="";
    // guest.value="";
});


async function api(input, date1, date2, guestNo) {
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${input}&checkin=${date1}&checkout=${date2}&adults=${guestNo}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6336c42bf3msh6f53bf585782411p1068f1jsna274f3500452',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        if (data.error == false) {
            localStorage.setItem("result", JSON.stringify(data));
            localStorage.setItem("loc",input);
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
    }
} 
// api("india","2023-10-20","2023-10-21",1);