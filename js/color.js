/*-------------------
            Color choose
        --------------------- */
var coloritem1 = document.querySelector('.pd-color-item1'); var coloritem2 = document.querySelector('.pd-color-item2');
var productcolor1 = document.querySelector('.product-color-1');
var productdetails1 = document.querySelector('.product-color-detail1');
var heartdetails1 = document.querySelector('.heart-color1');
var productcolor2 = document.querySelector('.product-color-2');
var productdetails2 = document.querySelector('.product-color-detail2');
var heartdetails2 = document.querySelector('.heart-color2');
productcolor2.style.display = "none"; productdetails2.style.display = "none"; heartdetails2.style.display = "none"
coloritem2.addEventListener('click', ()=>{
    coloritem2.classList.add("active");
    productcolor2.style.display = "block";
    productdetails2.style.display = "block";
    heartdetails2.style.display = "block"
    productcolor1.style.display = "none";
    productdetails1.style.display = "none";
    heartdetails1.style.display = "none";
    coloritem1.classList.remove("active");
});
coloritem1.addEventListener('click', ()=>{
    coloritem1.classList.add("active");
    productcolor1.style.display = "block";
    productdetails1.style.display = "block";
    heartdetails1.style.display = "block";
    productcolor2.style.display = "none";
    productdetails2.style.display = "none";
    heartdetails2.style.display = "none"
    coloritem2.classList.remove("active");
});