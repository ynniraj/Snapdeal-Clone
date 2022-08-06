var arr = [
    {
        "name": "Ambrane PP-20 20000 -mAh Li-Polymer Power Bank Black",
        "mrp": "3799",
        "price": "1299",
        "discount": "66",
        "img": "https://n1.sdlcdn.com/imgs/j/e/c/Ambrane-PP-20-20000-mAh-SDL497847923-1-23d77.jpg",
        "link": "snapdeal4.html"
    },
    {
        "name": "Ambrane Stylo 20K 20000 -mAh Li-Polymer Power Bank Green",
        "mrp": "2499",
        "price": "1449",
        "discount": "42",
        "img": "https://n1.sdlcdn.com/imgs/j/u/l/Ambrane-20000-mAh-Li-Polymer-SDL975841344-1-cc3d4.jpg",
        "link": "product.html"

    },
    {
        "name": "Ambrane Power Lit 10000 -mAh Li-Polymer Power Bank Green",
        "mrp": "1499",
        "price": "675",
        "discount": "55",
        "img": "https://n4.sdlcdn.com/imgs/j/t/l/Ambrane-Power-Lit-10000-mAh-SDL242000307-1-bb747.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane PP-111 10000 -mAh Li-Polymer Power Bank Blue",
        "mrp": "1499",
        "price": "775",
        "discount": "48",
        "img": "https://n2.sdlcdn.com/imgs/j/7/u/Ambrane-PP-111-10000-mAh-SDL697853207-1-b8fd0.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane Blaze PP-128 10000 -mAh Li-Polymer Power Bank Green (20 W, Power Delivery 2.0, Quick Charge 3.0)",
        "mrp": "1599",
        "price": "675",
        "discount": "58",
        "img": "https://n2.sdlcdn.com/imgs/j/u/r/01-601a9.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane Stylo 10K 10000 -mAh Li-Polymer Power Bank Blue",
        "mrp": "1599",
        "price": "775",
        "discount": "52",
        "img": "https://n2.sdlcdn.com/imgs/j/y/k/Ambrane-10000-mAh-Li-Polymer-SDL233266248-1-68674.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane PP-20 Pro 20000 -mAh Li-Polymer Power Bank Black",
        "mrp": "1999",
        "price": "1299",
        "discount": "35",
        "img": "https://n1.sdlcdn.com/imgs/j/u/k/Ambrane-20000-mAh-Li-Polymer-SDL024857461-1-bf5c0.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane PP-1000 10000 -mAh Li-Polymer Power Bank Gold",
        "mrp": "2499",
        "price": "499",
        "discount": "80",
        "img": "https://n2.sdlcdn.com/imgs/j/x/x/Ambrane-PP-1000-10000-mAh-SDL132727650-1-b76c6.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane PP-30 Pro 27000 -mAh Li-Polymer Power Bank Black",
        "mrp": "3999",
        "price": "1549",
        "discount": "61",
        "img": "https://n3.sdlcdn.com/imgs/i/1/2/Ambrane-PP-30-Pro-27000-SDL153257793-1-e437e.jpeg",
        "link": "product.html"
    },
    {
        "name": "Ambrane 20000 -mAh Li-Polymer Power Bank White",
        "mrp": "2499",
        "price": "1299",
        "discount": "48",
        "img": "https://n4.sdlcdn.com/imgs/j/y/k/Ambrane-20000-mAh-Li-Polymer-SDL391745921-1-e8666.jpg",
        "link": "product.html"
    },
    {
        "name": "Ambrane 20000 -mAh Li-Polymer Power Bank Green",
        "mrp": "1999",
        "price": "1299",
        "discount": "35",
        "img": "https://n1.sdlcdn.com/imgs/k/a/1/Ambrane-20000-mAh-Li-Polymer-SDL494473743-1-c0bd0.jpg",
        "link": "product.html"
    },
];

  localStorage.setItem("products",JSON.stringify(arr));

  append(arr);

  function append(arr){
    document.querySelector(".prod").innerHTML="";
    arr.map(function(elem){
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src",elem.img);
      var name = document.createElement("div");
      name.textContent=elem.name;
      var div2 = document.createElement("div");
      div2.setAttribute("class","div2")
      var mrp = document.createElement("p");
      mrp.textContent="Rs."+elem.mrp;
      var price=document.createElement("p");
      price.textContent="Rs."+elem.price;
      var discount=document.createElement("p");
      discount.textContent=elem.discount+"% Off";
      div2.append(mrp,price,discount);
      var div3=document.createElement("div");
      div3.setAttribute("class","div3");
      var color = document.createElement("p");
      color.textContent="Color";
      var d1 = document.createElement("div");
      var d2 = document.createElement("div");
      div3.append(color,d1,d2);
      div.append(img,name,div2,div3);
      document.querySelector(".prod").append(div);
      div.addEventListener("click",function(){
        window.location.href="snapdeal4.html";
      });
    });
  }
  
  function filter(){
    var select = document.querySelector(".sortby").value;

    if(select=="low"){
      arr.sort(function(a,b){
        return a.price-b.price;
      });
      
      append(arr);
    }

    if(select=="high"){
      arr.sort(function(a,b){
        return b.price-a.price;
      });
      
      append(arr);
    }

    if(select=="discount"){
      arr.sort(function(a,b){
        return b.discount-a.discount;
      });
      
      append(arr);
    }
  }

  var item = JSON.parse(localStorage.getItem("userdata"))
  
  var login_boolean = JSON.parse(localStorage.getItem("login_boolean"))
  if (login_boolean) {
      document.getElementById("user_name").textContent = item.name
  } 
