


let sliders = document.querySelectorAll(".slides");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

sliders.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel()
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel()
});

function carousel() {

    if (counter === sliders.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = sliders.length - 1;
    }

    sliders.forEach(function (slides) {
        slides.style.transform = `translateX(-${counter * 100}%)`;
    });
};


// ---card sliders--

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};




// -----card2---

// ---card sliders--
var products = JSON.parse(localStorage.getItem("snapdeal")) || [];

productLists(products);

function productLists(products) {
    document.querySelector(".trending").textContent = "";

    products.map(function (elem) {
        var div = document.createElement("div");
        div.setAttribute("class", "trenditems");
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);

        var p = document.createElement("p");
        p.textContent = elem.name;
        var span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';

        var div2 = document.createElement("div")
        div2.setAttribute("class", "pricetag");


        var mrp = document.createElement("h5");
        mrp.textContent = "RS " + elem.mrp;
        var price = document.createElement("h4");
        price.textContent = "Rs " + elem.price;
        var dis = document.createElement("p");
        dis.textContent = elem.discount + "% Off";

        div2.append(mrp, price, dis)
        div.append(img, p, span, div2);
        document.querySelector(".trending").append(div);
    });
}



// =======signup===


var item = JSON.parse(localStorage.getItem("userdata"))
//   document.querySelector("#user_name").value = item.name
var login_boolean = JSON.parse(localStorage.getItem("login_boolean"))
if (login_boolean) {
    document.getElementById("user_name").textContent = item.name
} else {
    // <a href="" id="user_name">Sign In <i class="fas fa-user-circle"></i></a>
}

    //   function namesignin(element){
    //   element.preventDefault();

    //   }


