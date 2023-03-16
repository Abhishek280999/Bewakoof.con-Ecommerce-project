let savedata = JSON.parse(localStorage.getItem("mobile data"));

product_page(savedata);

function product_page(data) {
  document.querySelector(".product_div").innerHTML = "";

  data.forEach((element) => {
    let main_div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    let img = document.createElement("img");
    let head = document.createElement("h3");
    let Name = document.createElement("h4");
    let Price = document.createElement("p");
    let price1 = document.createElement("p");
    let price2 = document.createElement("p");
    let btn = document.createElement("button");
    btn.innerText = "Add TO Cart";

    let head_Wish = document.createElement("p");

    let wishlist = document.createElement("span");
    wishlist.innerHTML = '<i class="fa fa-heart-o"aria-hidden="true"></i>';
    wishlist.classList.add("Wishlist");

    head_Wish.style.display = "flex";

    img.src = element.image;
    head.innerHTML = element.heading;
    Name.innerHTML = element.name;
    price1.innerText = "₹" + element.price;
    price2.innerText = "₹" + element.mprice;
  


    Price.style.display = "flex";
    price2.style.textDecoration = "line-through";
    price2.style.marginLeft = "10px";

    Price.append(price1, price2);
    head_Wish.append(head,wishlist)
    Price.classList.add("Price");
    div1.append(img);
    div2.append(head_Wish,Name,Price);
    div3.append(btn )
    main_div.append(div1,div2,div3)

    div1.addEventListener("click", function () {
      localStorage.setItem("Div_Data", JSON.stringify(element));
      window.location.href = "/Product_div.html";
    });

    btn.addEventListener("click", function () {
      let cart_data = [];

      cart_data = JSON.parse(localStorage.getItem("add_cart")) || [];
      cart_data.push(element);

      localStorage.setItem("add_cart", JSON.stringify(cart_data));

      update_cart_count();
    });

    document.querySelector(".product_div").append(main_div);
  });
}

let cart_count = JSON.parse(localStorage.getItem("add_cart")) || [];
let count = document.querySelector(".cart-counter");
console.log(cart_count);
count.innerHTML = cart_count.length;

function update_cart_count() {
  let cart_count = JSON.parse(localStorage.getItem("add_cart")) || [];
  let count = document.querySelector(".cart-counter");
  console.log(cart_count);
  count.innerHTML = cart_count.length;
}

function sort_option() {
  var select = document.getElementById("sort_div").value;
  if (select == "Low") {
    var sortArr = savedata.sort((a, b) => {
      let fa = a.price,
        fb = b.price;

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  } else if (select == "High") {
    var sortArr = savedata.sort((a, b) => {
      let fa = a.price,
        fb = b.price;

      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
  }

  product_page(sortArr);
}
