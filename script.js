let arrObj = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-men-1672915214.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-1672915214.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-1673010262.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672915214.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg",
  },
];

arrObj.forEach((element) => {
  let div = document.createElement("div");
  let images = document.createElement("img");
  images.src = element.img;

  div.append(images);

  document.getElementById("categories").append(div);
});

let arrObj1 = [
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg",
  },
];

arrObj1.forEach((element) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = element.imgage;

  div.append(img);

  document.getElementById("bags").append(div);
});

let arrObj2 = [
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png",
  },
  {
    imgage:
      "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png",
  },
];

arrObj2.forEach((element) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = element.imgage;

  div.append(img);

  document.getElementById("top_accessories").append(div);

});


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