wishlist_data = JSON.parse(localStorage.getItem("Wishlist")) || [];

wishlist_div(wishlist_data);

function wishlist_div(data) {

    console.log(data);
  
    data.forEach((element , index) => {
      let div1 = document.createElement("div");
      let img = document.createElement("img");
      let head = document.createElement("h3");
      let Name = document.createElement("h4");
      let Price = document.createElement("p");
      let price1 = document.createElement("p");
      let price2 = document.createElement("p");
  
      let delate_btn = document.createElement('button')
      delate_btn.innerText='Remove'
      delate_btn.classList.add('remove_btn')
  
      price1.innerText = "₹" + element.price;
      price2.innerText = "₹" + element.mprice;
  
      Price.classList.add('Price')
      price2.style.textDecoration = "line-through";
      price2.style.marginLeft = "10px";
  
      img.src = element.image;
  
      head.innerText = element.heading;
      Name.innerText = element.name;
      Price.append(price1, price2);
  
  
  
      delate_btn.addEventListener('click',function(){
        data.splice(index,1)
        localStorage.setItem('Wishlist',JSON.stringify(data))
        location.reload()
  
      })
  
      console.log(element.price);
      div1.append(img, head, Name, Price ,delate_btn);
    
  
      document.querySelector(".wishlist_div").append(div1);
    });
  }
  let cart_count = JSON.parse(localStorage.getItem("add_cart")) || [];
let count = document.querySelector(".cart-counter");
console.log(cart_count);
count.innerHTML = cart_count.length;

