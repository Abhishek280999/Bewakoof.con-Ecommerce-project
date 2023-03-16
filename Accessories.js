let arrObj = [
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png",
       
    },
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-flats-1673351676.jpg",
       
    },
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png",
       
    },
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg",
       
    },
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png",
      
    },
    {
        imgage : "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png",
        
    }
]


arrObj.forEach((element) => {

    let div = document.createElement('div')
    let images = document.createElement('img')
    let name = document.createElement('p')
    images.src =element.imgage;
   
    


    div.append(images)
  


    document.getElementById('categories').append(div)

});