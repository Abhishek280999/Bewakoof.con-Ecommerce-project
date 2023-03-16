let payment_data = JSON.parse(localStorage.getItem("add_cart"));
let form =document.querySelector('form')


function details(){

  let details_obj = {

   Name : form.name.value,
   Mobile_no : form.mobile_no.value,
   City : form.city.value,
   State : form.state.value,
   Email : form.email.value,
   Pincode : form.pin.value,
    Address : form.add.value,

  }
  let details_data =[]

  details_data = JSON.parse(localStorage.getItem('user_data')) || []
  details_data.push(details_obj)

  localStorage.setItem('user_data', JSON.stringify(details_data))
  
}

function goto(){
  window.location.href = '/payment.html'
}

payment(payment_data)
function payment(data){

    data.forEach(element => {

        let img = document.createElement("img");
        img.src =element.image;

         document.querySelector('#order').append(img)
        
    });

}

let total = payment_data.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  

let total_price = document.createElement("span");
total_price.innerText = "Total Amount : " + "₹" + total;


document.querySelector('#ordredetails').append(total_price)





