
let cart_data = JSON.parse(localStorage.getItem("add_cart"));

// console.log(cart_data);
product_div(cart_data);

function product_div(data ,index) {
  console.log(data);

  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let Name = document.createElement("h4");
    let Price = document.createElement("p");
    let price1 = document.createElement("p");
    let price2 = document.createElement("p");


    let span_lebal = document.createElement('span')
    span_lebal.innerText = 'Size :'
    span_lebal.classList.add('lebal')

    let span = document.createElement('span')
   span.classList.add('Size')
  
    let div1 = document.createElement('div')
    div1.innerText = 'S'
    let div2 = document.createElement('div')
    div2.innerText = 'M'
    let div3 = document.createElement('div')
    div3.innerText = 'L'
    let div4 = document.createElement('div')
    div4.innerText = 'XL'

    div1.addEventListener('click' , function(){
      div1.style.backgroundColor = 'red'
    })
    div2.addEventListener('click' , function(){
      div2.style.backgroundColor = 'red'
    })
    div3.addEventListener('click' , function(){
      div3.style.backgroundColor = 'red'
    })
    div4.addEventListener('click' , function(){
      div4.style.backgroundColor = 'red'
    })

    span.append(div1,div2,div3,div4)

    
    let delate_btn = document.createElement('button')
    delate_btn.innerText='Remove'

    price1.innerText = "₹" + element.price;
    price2.innerText = "₹" + element.mprice;

    Price.style.display = "flex";
    price2.style.textDecoration = "line-through";
    price2.style.marginLeft = "10px";

    img.src = element.image;
    
    
    Name.innerText = element.name;
    Price.append(price1, price2);


    delate_btn.addEventListener('click',function(){
      data.splice(index,1)
      localStorage.setItem('add_cart',JSON.stringify(data))
      location.reload()

    })
   

    console.log(element.price);
    div.append(img,Name, Price ,span_lebal,span ,delate_btn);

  
    document.querySelector("#Div1").append(div);
    
  });

}
function order(){ 
        
  window.location.href='/order_page.html'
 
 }

let total = cart_data.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);




console.log(total);

let total_price = document.createElement("span");
total_price.innerText = "Total Price : " + "₹" + total;

let cart_count = JSON.parse(localStorage.getItem("add_cart")) || [];
let item = cart_count.length;

let total_item = document.createElement("p");
total_item.innerText = "Total Item : " + item;


document.querySelector("#Div2 > div").append(total_price ,total_item);





