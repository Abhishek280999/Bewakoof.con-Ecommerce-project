let product_div_data = JSON.parse(localStorage.getItem("Div_Data"));

product_div(product_div_data);

function product_div(data) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let head = document.createElement("h3");
  let Name = document.createElement("h4");
  let Price = document.createElement("p");
  let price1 = document.createElement("p");
  let price2 = document.createElement("p");

  price1.innerText = 'Total Price : '+"₹" + data.price;
  price2.innerText = "₹" + data.mprice;

  Price.style.display = "flex";
  price2.style.textDecoration = "line-through";
  price2.style.marginLeft = "10px";

  console.log(img);
  img.src = data.image;
  Price.classList.add("Price");
  head.innerText = data.heading;
  Name.innerText = data.name;
  Price.append(price1, price2);

  div1.append(img);
  div2.append(head, Name, Price);

  document.querySelector("#Div1").append(div1);
  document.querySelector("#Div2").append(div2);
}
