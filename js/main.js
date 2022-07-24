/*  --------------------------------------------------- */
(function ($) {

    /*PreLoader*/

    $(window).on('load',function () {
        $(".loader").fadeOut;
        $("#preloader").delay(1000).fadeOut("slow");
    });
    $("#preloader").removeClass('hide');

    /*Language Selector*/
    $(document).ready(function (e){
        $(".language_drop").msDropdown({roundedBorder:false});
        $("#tech").data("dd");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Hero Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        navigation : true,
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Product Slider
    --------------------*/
    $(".product-slider").owlCarousel({
        navigation : true,
        margin: 25,
        nav: true,
        items: 3,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    $(".video-items").owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        autoHeight: true,
        lazyLoad:false,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })

    /*------------------
        CountDown
    --------------------*/
    var timerdate = "2022/04/01";

    $("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

    $(".countdown-coupon").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>"));
    });


    /*-----------------------
     Product Single Slider
  -------------------------*/
    $(".ps-slider").owlCarousel({
        navigation: true,
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    /*------------------
        Single Product
    --------------------*/
    $('.product-thumbs-track .pt').on('click', function(){
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if(imgurl != bigImg) {
            $('.product-big-img').attr({src: imgurl});
            $('.zoomImg').attr({src: imgurl});
        }
    });

    $('.product-pic-zoom').zoom();

    /*-------------------
            Quantity change
        --------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn decrease">-</span>');
    proQty.append('<span class="inc qtybtn increase">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
})(jQuery);

function checkOldValue(x){
    if(x <= 0){
        x = 1;
    }
    else {
        x = parseInt(x) - 1;
    }
}

function deletePromoRecord(){
    var promo = localStorage.getItem('promo');
    var promoClone = localStorage.getItem('promoClone');
    var discountCoupon = localStorage.getItem('discountCoupon');
    var discountCouponClone = localStorage.getItem('discountCouponClone');
    var couponName = localStorage.getItem('couponName');
    var rfc = localStorage.getItem('rfc');
    var idOrder = localStorage.getItem('idOrder');
    var cartCost = parseFloat(localStorage.getItem('totalCost'));
    if(promo && promoClone && discountCoupon && discountCouponClone && couponName){
        localStorage.setItem('totalCost', (cartCost + parseFloat(discountCoupon)).toString())
        localStorage.setItem('totalCostClone', (cartCost + parseFloat(discountCoupon)).toString())
        localStorage.removeItem('promo');
        localStorage.removeItem('promoClone');
        localStorage.removeItem('discountCoupon');
        localStorage.removeItem('discountCouponClone');
        localStorage.removeItem('couponName');
    }
    if(rfc && idOrder == undefined){
        localStorage.removeItem('rfc');
    }
}

/*---------------------------------------Log in check------------------------------------------------*/

function check()
{
    email= document.getElementById("email");
    pass = document.getElementById("password");
    t1 = document.getElementById("errorEmail");
    t2 = document.getElementById("errorPassword");
    link = document.getElementById("bt1");
    var re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
    if(email.value==="")
    {
        t1.innerHTML="This field is required";
        t1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        t1.focus();
        link.disabled = true;
        return false;
    }
    if(re2.test(email.value)===false){
        t1.innerHTML="Wrong type of email";
        t1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        t1.focus();
        link.disabled = true;
        return false;
    }
    else
        t1.innerHTML="";

    if(pass.value=="")
    {
        t2.innerHTML="This field is required";
        t2.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        t2.focus();
        link.disabled = true;
        return false;
    }
    else
        t2.innerHTML="";
    if(email.value ==="admin@rfc.com" && pass.value==="team1isdabest"){
        link.disabled = false;
        localStorage.clear();
        link.innerHTML = `<img src="img/Rolling-1s-200px.gif" width = "20px">`;
        setTimeout(()=>{window.open("admin/index.html", "_self")},3000)
        link.setAttribute("style", "background-color: #f9f9f9; border: 1px #1B2F44 solid; color: #1B2F44!important");
        return true;
    }
    link.disabled =false;
    return true;
}
/*---------------------------------------Register check------------------------------------------------*/

function checkregister(){
    firstname = document.getElementById('firstname');
    errorfname = document.getElementById('errorfirstname');
    lastname = document.getElementById('lastname');
    errorlname = document.getElementById('errorlastname');
    email = document.getElementById('email');
    errormail = document.getElementById('erroremail');
    password = document.getElementById('password');
    errorpass = document.getElementById('errorpassword');
    repassword = document.getElementById('repassword');
    errorrepass = document.getElementById('errorrepassword');
    checkbox1 = document.getElementById('check1');
    checkbox2 = document.getElementById('check2');
    checkbox3 = document.getElementById('check3');
    errorcheck = document.getElementById('erroraccept');
    var re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
    var button = document.getElementById('bt4');

    if(firstname.value === ""){
        errorfname.innerHTML="This field is required";
        errorfname.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson')
        button.setAttribute('style', 'background-color: gray');
        firstname.focus();
        button.disabled = true;
        return false;
    }
    else
        errorfname.innerHTML="";
    if(lastname.value==="")
    {
        errorlname.innerHTML="This field is required";
        errorlname.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        lastname.focus();
        button.disabled = true;
        return false;
    }
    else
        errorlname.innerHTML="";
    if(email.value==="")
    {
        errormail.innerHTML="This field is required";
        errormail.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        email.focus();
        button.disabled = true;
        return false;
    }
    if(re2.test(email.value)===false)
    {
        errormail.innerHTML="Wrong type of mail";
        errormail.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        email.focus();
        button.disabled = true;
        return false;
    }
    else
        errormail.innerHTML="";
    if(password.value===""){
        errorpass.innerHTML="This field is required";
        errorpass.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        password.focus();
        button.disabled = true;
        return false;
    }
    if(password.value.length < 6){
        errorpass.innerHTML="Please enter at least 6 characters";
        errorpass.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        password.focus();
        button.disabled = true;
        return false;
    }
    else
        errorpass.innerHTML = "";
    if(repassword.value===""){
        errorrepass.innerHTML="This field is required";
        errorrepass.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        repassword.focus();
        button.disabled = true;
        return false;
    }
    if(repassword.value!==password.value){
        errorrepass.innerHTML="Password different from above";
        errorrepass.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        repassword.focus();
        button.disabled = true;
        return false;
    }
    else
        errorrepass.innerHTML = "";
    if(checkbox1.checked===false || checkbox2.checked===false || checkbox3.checked===false){
        errorcheck.innerHTML="Please check all fields";
        errorcheck.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        button.setAttribute('style', 'background-color: gray');
        button.disabled = true;
        return false;
    }
    else
        errorcheck.innerHTML = "";
    button.setAttribute('style', 'background-color: #1B2F44');
    button.disabled =false;
    return true;
}

/*---------------------------------------Contact check------------------------------------------------*/
function checkcontact() {
    ho = document.getElementById("cc1");
    ho1= document.getElementById("errorcc1");
    ten= document.getElementById("cc2");
    ten1= document.getElementById("errorcc2");
    sdt= document.getElementById("cc3");
    sdt1= document.getElementById("errorcc3");
    email= document.getElementById("cc4");
    email1= document.getElementById("errorcc4");
    contact1=document.getElementById("cc5");
    title = document.getElementById("cc6");
    title1 = document.getElementById("errorcc6");
    mes = document.getElementById("cc7");
    mes1 = document.getElementById("errorcc7");
    var re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
    var rePhone = /^0\d{9}$/;
    if(ho.value==="")
    {
        ho1.innerHTML="This field is required";
        ho1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        ho1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        ho1.innerHTML="";
    if(ten.value==="")
    {
        ten1.innerHTML="This field is required";
        ten1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        ten1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        ten1.innerHTML="";
    if(sdt.value==="")
    {
        sdt1.innerHTML="This field is required";
        sdt1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        sdt1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    if(rePhone.test(sdt.value)==false)
    {
        sdt1.innerHTML="Wrong type of phone number";
        sdt1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        sdt1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        sdt1.innerHTML="";

    if(email.value==="")
    {
        email1.innerHTML="This field is required";
        email1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        email1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    if(re2.test(email.value)===false){
        email1.innerHTML="Wrong type of email";
        email1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        email1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        email1.innerHTML="";
    if(title.value===""){
        title1.innerHTML="This field is required";
        title1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        title1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        title1.innerHTML = "";
    if(mes.value===""){
        mes1.innerHTML="This field is required";
        mes1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        mes1.focus();
        contact1.setAttribute('style', 'background-color: gray');
        contact1.disabled = true;
        return false;
    }
    else
        mes1.innerHTML = "";
    contact1.disabled =false;
    contact1.setAttribute('style', 'background-color: #1B2F44');
    return true;
}
/*---------------------------------------Delivery check------------------------------------------------*/
function checkdelivery()
{
    ho = document.getElementById("cc1");
    ho1= document.getElementById("errorcc1");
    ten= document.getElementById("cc2");
    ten1= document.getElementById("errorcc2");
    sdt= document.getElementById("phone");
    sdt1= document.getElementById("errorcc3");
    email= document.getElementById("cc4");
    email1= document.getElementById("errorcc4");
    city = document.getElementById('cc5');
    city1 = document.getElementById('errorcc5');
    dist = document.getElementById('cc6');
    dist1 = document.getElementById('errorcc6');
    addr = document.getElementById('cc7');
    addr1 = document.getElementById('errorcc7');
    var radios = document.querySelectorAll('input[type=radio]');
    var checked = document.querySelectorAll('input[type=radio]:checked');
    var method = document.getElementById("errorMethod");
    var bt1=document.getElementById("placeorder");
    var errorcheck = document.getElementById('errorcheck');
    var checkbox = document.getElementById('cc13');

    if(ho.value==="")
    {
        ho1.innerHTML="This field is required";
        ho1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        ho1.focus();
        bt1.setAttribute('style', 'background-color: #cccccc; cursor: auto');
        bt1.innerHTML="<style='cursor:auto'>PLACE MY ORDER";
        ho.focus();
        return false;
    }
    else
        ho1.innerHTML="";
    if(ten.value==="")
    {
        ten1.innerHTML="This field is required";
        ten1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        ten1.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        ten.focus();
        return false;
    }
    else
        ten1.innerHTML="";
    var rePhone = /^0\d{9}$/;
    if(sdt.value==="")
    {
        sdt1.innerHTML="This field is required";
        sdt1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        sdt1.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        sdt.focus();
        return false;
    }
    if(rePhone.test(sdt.value)==false)
    {
        sdt1.innerHTML="Wrong type of phone number";
        sdt1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        sdt1.focus();
        contact1.setAttribute('style', 'background-color: #cccccc');
        contact1.disabled = true;
        return false;
    }
    else
        sdt1.innerHTML="";
    if(email.value==="")
    {
        email1.innerHTML="This field is required";
        email1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        email.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        return false;
    }
    var re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
    if(re2.test(email.value)===false){
        email1.innerHTML="Wrong type of email";
        email1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        email.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        return false;
    }
    else
        email1.innerHTML="";
    if(city.value==="")
    {
        city1.innerHTML="This field is required";
        city1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        city.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        return false;
    }
    else
        city1.innerHTML="";
    if(dist.value==="")
    {
        dist1.innerHTML="This field is required";
        dist1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        dist.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        return false;
    }
    else
        dist1.innerHTML="";
    if(addr.value==="")
    {
        addr1.innerHTML="This field is required";
        addr1.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        addr.focus();
        bt1.setAttribute('style', 'background-color: #cccccc');
        return false;
    }
    else
        addr1.innerHTML="";
    if(!checked.length){
        bt1.setAttribute("disabled", "disabled");
        bt1.disabled = true;
        method.innerHTML = "This field is required";
        method.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        return false;
    }
    radios.forEach(function(el){
        el.addEventListener('click', function(){
            checked = document.querySelectorAll('input[type=radio]:checked');
            if(checked.length){
                bt1.removeAttribute("disabled");
                bt1.setAttribute('style', 'background-color: #1B2F44');
                bt1.disabled = false;
                method.innerHTML = "";
            }
        });
    });
    if (radios[0].checked ===true){
        localStorage.setItem("method", 'Cash');
    }
    if(radios[1].checked ===true && (document.getElementById('cc8').value == '')){
        document.getElementById('errorMethod').innerHTML = "Please fill in all fields.";
        document.getElementById('errorMethod').setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        bt1.disabled = true;
        bt1.setAttribute('style', 'background-color: #cccccc');
        document.getElementById('cc8').focus();
        localStorage.setItem("method", 'Card');
        return false;
    }
    else
        method.innerHTML = "";
    if(radios[1].checked ===true && (document.getElementById('cc9').value == '')){
        document.getElementById('errorMethod').innerHTML = "Please fill in all fields.";
        document.getElementById('errorMethod').setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        bt1.disabled = true;
        bt1.setAttribute('style', 'background-color: #cccccc');
        document.getElementById('cc9').focus();
        return false;
    }
    else
        method.innerHTML = "";
    if(radios[1].checked ===true && (document.getElementById('cc10').value == '' || document.getElementById('cc11').value == '')){
        document.getElementById('errorMethod').innerHTML = "Please fill in all fields.";
        document.getElementById('errorMethod').setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        bt1.disabled = true;
        bt1.setAttribute('style', 'background-color: #cccccc');
        document.getElementById('cc10').focus();
        localStorage.setItem("method", 'Card');
        return false;
    }
    else
        method.innerHTML = "";
    if(radios[1].checked ===true && (document.getElementById('cc12').value == '')){
        document.getElementById('errorMethod').innerHTML = "Please fill in all fields.";
        document.getElementById('errorMethod').setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        bt1.disabled = true;
        bt1.setAttribute('style', 'background-color: #cccccc');
        document.getElementById('cc12').focus();
        localStorage.setItem("method", 'Card');
        return false;
    }
    else
        document.getElementById('errorMethod').innerHTML = "";
    if(checkbox.checked ===false){
        errorcheck.innerHTML = "This field is required";
        errorcheck.setAttribute('style', 'margin-top: 5px; font-size: 0.9rem; color: crimson');
        bt1.disabled = true;
        checkbox.focus();
        return false;
    }
    else
        errorcheck.innerHTML = "";
    bt1.setAttribute('style', 'background-color: #1B2F44');
    bt1.disabled = false;
    bt1.addEventListener('click', ()=>{
        window.open('success.html', '_self');
    })
    localStorage.setItem("address", city.value);
    return true;
}
/*Check Email in Footer*/
function checkSubEmail(){
    input = document.getElementById("sub-email");
    email_error = document.getElementById("subemail-error");
    var email = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
    if(input.value === ""){
        email_error.innerHTML = "This field is required";
        email_error.setAttribute('style','color:crimson;font-size:14px;margin-top:10px');
        return false
    }
    if(email.test(input.value)===false){
        email_error.innerHTML = "Email invalid";
        email_error.setAttribute('style','color:crimson;font-size:14px;margin-top:10px');
        return false
    }
    else {
        email_error.innerHTML = "Successfully subscribed";
        email_error.setAttribute('style','color:#1b2f44;font-size:14px;margin-top:10px');
        return true
    }
}

function onLoadMethod(){
    var amount = localStorage.getItem("totalCost");
    var radios = document.querySelectorAll('input[type=radio]');
    var method1 = document.getElementById("method1");
    amount = parseFloat(amount);
    if(amount >500){
        radios[0].disabled = true;
        radios[1].checked = true;
        method1.setAttribute('style', 'opacity: 0.3; filter: alpha(opacity=30);');
        method1.innerHTML += `
        <p style = "font-size: 14px;">Note: For orders exceeding $500 worth, we could only accept payment by card.</p>
    `
    }
}

function onLoadDetail(){
    document.getElementById("order-card").innerHTML = localStorage.getItem("method");
    document.getElementById("order-add").innerHTML = localStorage.getItem("address");
}

function deleteRecordMethod(){
    localStorage.setItem('address', null);
    localStorage.setItem('method', null);
    localStorage.setItem('shipfeeClone', (0).toString());
    localStorage.setItem('totalCostClone', (0).toString());
    localStorage.setItem('productsInCartClone', null);
    localStorage.setItem('totalCostDiscountClone', (0).toString());
    window.open('products1.html', '_self');
}

//color details
var color = document.querySelector.bind(document);
var color1 = document.querySelectorAll.bind(document);

var tabs = color1(".tab-itemcolor");
var panes = color1(".tab-panecolor");

tabs.forEach((tab, index) => {
    var pane = panes[index];

    tab.onclick = function () {
        color(".tab-itemcolor.active").classList.remove("active");
        color(".tab-panecolor.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");
    };
});

/*Product Compare*/
const model = {
    chairs: [
        {
            name: '-Select chair-',
            imgSrc: 'img/products/13/color3.jpg',
            catid: 'filtercat',
        },
        {
            name: 'Bergen Miro',
            imgSrc: 'img/products/1/arm1.jpg',
            color: 'Gray, Green',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bergen',
            dimen: '69cm x 92cm x 88cm',
            weight: '26kg',
            material: 'Fabric',
            price: '$399.00',
            sale: 'Sale 30%',
            feature: 'The back has a softly curved top rail adding an element of comfort in the way the chair cradles and supports your back when seated in it. The thinly upholstered, enclosed arms come straight out from the chair back and slope down at the front from the top to meet the chair seat. The seat is framed with welt and exposed wood seat rails. The legs of the Bergen chair taper to a thin stiletto look at the foot. Stretchers support the legs on each side and across the back.'

        },
        {
            name: 'Bergen Kubrick',
            imgSrc: 'img/products/2/arm2.jpg',
            color: 'Pink, Yellow',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bergen',
            dimen: '105cm x 91cm x 90cm',
            weight: '22kg',
            material: 'Fabric',
            price: '$499.00',
            sale: 'Sale 30%',
            feature: 'The arm for this new armchair has all the elements needed to complement the stately presence of this grand chair. A side view of the arm profile reveals a scalloped shape that complements the scalloped shapes of the wings and chair back when looking at the chair facing the seat. The upholstered upper chair is framed below by exposed wood seat rails.'

        },
        {
            name: 'Bergen Sete',
            imgSrc: 'img/products/3/arm3.jpg',
            color: 'Beige, Green',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bergen',
            dimen: '76cm x 93cm x 95cm',
            weight: '25kg',
            material: 'Fabric',
            price: '$599.00',
            sale: 'No',
            feature: 'The space also creates a functional element of being able to move the chair by using the exposed wood parts instead of by touching the upholstered fabric of the back. The tightly upholstered inside back features double-needle stitching at the outer edges. The tightly upholstered arm has double-needle stitching along the inner edge that flows into the double-needle stitching of the inside back. Exposed wood seat rails frame the base of the chair seat. The lightly scaled, tapered exposed wood legs are supported on the sides and across the back by stretchers.'

        },
        {
            name: 'Bergen Shona',
            imgSrc: 'img/products/4/bar4.jpg',
            color: 'Green, Beige',
            cat: 'Bar Height Stools',
            catid: 'stool filtercat',
            brand: 'Bergen',
            dimen: '90cm x 65cm x 60cm',
            weight: '15kg',
            material: 'Fabric',
            price: '$299.00',
            sale: 'Sale 30%',
            feature: 'The crisp welt detail accentuates the back shape both in the front view and the back view. The gently curved top rail features an exposed wood handle in the center. The seat is tightly upholstered. The seat attaches to the exposed wood, tapered leg base by memory swivel. Stretchers frame the tapered legs on all sides and a metal kickplate, available in three finish choices, centers the front stretcher.'

        },
        {
            name: 'Bel Air 2LG',
            imgSrc: 'img/products/5/arm5.jpg',
            color: 'Navy',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bel Air',
            dimen: '80cm x 84cm x 85cm',
            weight: '22kg',
            material: 'Fabric',
            price: '$379.00',
            sale: 'No',
            feature: 'This new chair features a barrel back with an opening between the lower back and the seat of the chair. The dome-shaped back has in the center of the top rail an exposed wood handle. The side profile view reveals a simple movement in the shaped back wings that curve down to meet the arms. The curve continues through the arms down the outside edges of the seat and into the front leg posts. Tapered front legs and gently curved back legs complete this beautiful armchair.'

        },
        {
            name: 'Bel Air Lule',
            imgSrc: 'img/products/6/bar6.jpg',
            color: 'Gray',
            cat: 'Bar Height Stools',
            catid: 'stool filtercat',
            brand: 'Bel Air',
            dimen: '87cm x 56cm x 51cm',
            weight: '8kg',
            material: '100% recycled polyester',
            price: '$229.00',
            sale: 'Sale 30%',
            feature: 'The back is scaled so the sleekly upholstered wings cradle the back just below one\'s arms. The seat is tightly upholstered and attaches to the exposed wood base by memory swivel. Exposed wood seat rails and elegantly tapered legs complete this great transitionally styled stool.'

        },
        {
            name: 'Bel Air Swinton',
            imgSrc: 'img/products/7/bar7.jpg',
            color: 'Gray, Beige',
            cat: 'Bar Height Stools',
            catid: 'stool filtercat',
            brand: 'Bel Air',
            dimen: '89cm x 51cm x 57cm',
            weight: '6kg',
            material: '100% recycled polyester',
            price: '$149.00',
            sale: 'Sale 30%',
            feature: 'The height of the back of the Swinton stool is just below the height of a standard counter or bar. Even with the low back height, there is still enough height that one will feel back support when sitting on the stool. The generous, tightly upholstered seat is sinuous wire sprung for comfort. A metal kick plate, available in three finishes, is centered on the front stretcher. The Swinton stool is available in both counter and bar heights.'

        },
        {
            name: 'Bel Air Orson',
            imgSrc: 'img/products/8/sofa3.jpg',
            color: 'Green, Grey',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bel Air',
            dimen: '79cm x 201cm x 97cm',
            weight: '44kg',
            material: '100% recycled polyester',
            price: '$1,049.00',
            sale: 'Sale 30%',
            feature: 'For the assembly, the metal frame is put together - completely without screws and tools - and then stretched with the fabric cover. The matching upholstery and cushions are placed on it and already the sofa is assembled. A flexible and lightweight design that is easy to transport and move. A design that is "simple, relaxed and for everyone" according to the designers Ronan and Erwan Bouroullec.'

        },
        {
            name: 'Bel Air Branagh',
            imgSrc: 'img/products/9/sofa4.jpg',
            color: 'Green, Grey',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bel Air',
            dimen: '76cm x 264cm x 94cm',
            weight: '58kg',
            material: '100% recycled polyester',
            price: '$1,049.00',
            sale: 'Sale 30%',
            feature: 'The frame of the Branagh is made of pine wood, which can be painted in different colours. On the frame is a Basic Futon mattress. The filling of the futon consists of 4 layers of cotton and a 4 cm thick foam core. The cover, which is available in various attractive colours, is made of polyester and cotton. In addition, two matching cushions are included.'

        },
        {
            name: 'Bel Air Elmira',
            imgSrc: 'img/products/10/sofa5.jpg',
            color: 'Beige',
            cat: 'Sofas & Armchairs',
            catid: 'sofa filtercat',
            brand: 'Bel Air',
            dimen: '85cm x 274cm x 204cm',
            weight: '102kg',
            material: '100% recycled polyester',
            price: '$2199.00',
            sale: 'No',
            feature: 'This is a sectional sofa consisting of individual units arranged together. Sofa units can be re-configured to suit individual needs and preferences. This chaise sofa can be used in the living, study or bedroom to provide extra seating spaces. However, 2 pieces of this sofa can be creatively combined to create an L Shaped sofa or a spacious 4 seater sofa that is great for large living rooms. Available in Granite and Stone and separately as a chaise lounge or together as a 4 seater sofa.\n' +
                '\n' +
                'You can choose from Right or Left Arm Chaise Unit:\n' +
                '• Right arm unit: When facing the arm unit, the armrest is on the right.\n' +
                '• Left arm unit: When facing the arm unit, the armrest is on the Left.'

        },
        {
            name: 'Bartlett Assim',
            imgSrc: 'img/products/11/banquette1.jpg',
            color: 'Beige, Green',
            cat: 'Banquette',
            catid: 'banquette filtercat',
            brand: 'Bartlett',
            dimen: '62cm x 120cm x 45cm',
            weight: '15kg',
            material: 'Engineered wood, Polyester',
            price: '$329.00',
            sale: 'No',
            feature: 'Experience the stylish NYC living with the Barlett Assim Storage Bench. Its soft cushion seat will provide you with maximum comfort while dining with your family and friends. Resting on a solid wooden frame, Assim is sturdy enough to withstand the wear and tear of daily use. His versatile personality makes him absolutely functional, a suave complement to any home furnishings, be it in the dining area, living room or entryways! The Assim Storage Bench seats 2 people comfortably, and is available in 2 colours - Natural - Grey, and Cocoa - Seal.\n'

        },
        {
            name: 'Bartlett Raleigh',
            imgSrc: 'img/products/12/banquette2.jpg',
            color: 'Gray',
            cat: 'Banquette',
            catid: 'banquette filtercat',
            brand: 'Bartlett',
            dimen: '47cm x 95cm x 39cm',
            weight: '8kg',
            material: 'Engineered wood, Polyester',
            price: '$199.00',
            sale: 'Sale 30%',
            feature: 'The solid wood legs are stained rubber wood therefore the shade might differ from the image as stated that wood is a natural material. A stable hardwood construction made for gatherings, for many years to come. Place this traditional wooden storage bench at the dining table, in the hallway or wherever you need seating for several people while utilising space in the best way. The bench can be tucked away under the table, making it a great space-saver.\n'

        },
        {
            name: 'Bartlett Asare 2',
            imgSrc: 'img/products/13/banquette3.jpg',
            color: 'Beige, Pink',
            cat: 'Banquette',
            catid: 'banquette filtercat',
            brand: 'Bartlett',
            dimen: '45cm x 32cm x 32cm',
            weight: '4kg',
            material: 'Engineered wood, Polyester',
            price: '$149.00',
            sale: 'Sale 30%',
            feature: 'A sophisticated sofa for the bold and single-minded, the Barlett Asare 2 Bench is a mid-century sofa upholstered in updated bonded leather and velvet fabric to create the distinctive look for your room. With its slim solid wood frame, diagonal button tufting, and brass metal legs, this sofa is a modern classic dream come true! Available in 3 seater, loveseat and armchair versions with matching ottoman.\n'

        },
        {
            name: 'Bartlett Asare',
            imgSrc: 'img/products/14/banquette4.jpg',
            color: 'Pink, Green',
            cat: 'Banquette',
            catid: 'banquette filtercat',
            brand: 'Bartlett',
            dimen: '44cm x 110cm x 44cm',
            weight: '11kg',
            material: 'Engineered wood, Polyester',
            price: '$199.00',
            sale: 'No',
            feature: 'A sophisticated sofa for the bold and single-minded, the Barlett Asare Bench is a mid-century sofa upholstered in updated bonded leather and velvet fabric to create the distinctive look for your room. With its slim solid wood frame, diagonal button tufting, and brass metal legs, this sofa is a modern classic dream come true! Available in 3 seater, loveseat and armchair versions with matching ottoman.\n'

        },
        {
            name: 'Bartlett Abel',
            imgSrc: 'img/products/15/banquette5.jpg',
            color: 'Green',
            cat: 'Banquette',
            catid: 'banquette filtercat',
            brand: 'Bartlett',
            dimen: '46cm x 111cm x 41cm',
            weight: '14.5kg',
            material: 'Engineered wood, Polyester',
            price: '$179.00',
            sale: 'No',
            feature: 'A sophisticated sofa for the bold and single-minded, the Barlett Abel Bench is a mid-century sofa upholstered in updated bonded leather and velvet fabric to create the distinctive look for your room. With its slim solid wood frame, diagonal button tufting, and brass metal legs, this sofa is a modern classic dream come true! Available in 3 seater, loveseat and armchair versions with matching ottoman.\n'
        },
        {
            name: 'Bergen Abbon',
            imgSrc: 'img/products/16/anhchinh.jpg',
            color: 'Yellow, Navy',
            cat: 'Dining Chairs',
            catid: 'dining filtercat',
            brand: 'Bergen',
            dimen: '78cm x 53cm x 53cm',
            weight: '5kg',
            material: 'Paper cord, Solid ash',
            price: '$399.00',
            sale: 'No',
            feature: 'A stylish and modern wooden chair, the Bergen Abbon Woven Dining Chair is ideal as a set for the dining table, or single as an occasional seat. She features a curved backrest that extends down to her slender legs. Coupled with a wide and smooth seat surface that will give you ample seating space, Abbon gets you comfortable when entertaining guests at the dinner table. Abbon Dining Chair features four wood layers of varnish for durability and the chair and woven seat have been given an anti-UV treatmen.'

        },
        {
            name: 'Bergen Revy',
            imgSrc: 'img/products/17/anhchinh.jpg',
            color: 'Beige',
            cat: 'Dining Chairs',
            catid: 'dining filtercat',
            brand: 'Bergen',
            dimen: '78cm x 59cm x 59cm',
            weight: '11kg',
            material: '95% Polyester, 5% Acrylic, Solid birch',
            price: '$249.00',
            sale: 'No',
            feature: 'Plushy luxury is how we\'d describe the Bergen Revy Dining Chair. Diamond quilting detailing over a firm velvety seating, Ravy sits atop a sturdy set of black metal legs and will be the best seating accompaniment for turning an otherwise usual dining experience into a glitzy one.'
        },
        {
            name: 'Bergen Kalaspel',
            imgSrc: 'img/products/18/anhchinh.jpg',
            color: 'Yellow, Navy',
            cat: 'Dining Chairs',
            catid: 'dining filtercat',
            brand: 'Bergen',
            dimen: '70cm x 60cm x 53cm',
            weight: '10kg',
            material: '100% recycled polyester',
            price: '$229.00',
            sale: 'Sale 50%',
            feature: 'The comfort was a result from the combination of a cantilever structure with an anthropomorphic shape using a slightly flexible material. The Kalaspel Dining Chair has received numerous international design awards and is represented in the collections of many prominent museums. Due to its expressive form, it has become an icon of the twentieth century.'
        },
        {
            name: 'Bergen Deon',
            imgSrc: 'img/products/19/anhchinh.jpg',
            color: 'Gray, Beige',
            cat: 'Dining Chairs',
            catid: 'dining filtercat',
            brand: 'Bergen',
            dimen: '83cm x 49cm x 56cm',
            weight: '3kg',
            material: 'Plastic, PU, Rubber wood',
            price: '$99.00',
            sale: 'Sale 30%',
            feature: 'Made for the Minimalist, the Bergen Deon Dining Chair has simple lines to complement a modern contemporary home. Adorned with an intricate back design, Deon is a simple yet unique chair. The high backrest, make it perfect for dining and the work desk. Made from recycled plastics, you are making a conscious environmental friendly choice through this.'
        },
        {
            name: 'Bel Air Rhye',
            imgSrc: 'img/products/20/anhchinh.jpg',
            color: 'Green, Yellow',
            cat: 'Dining Chairs',
            catid: 'dining filtercat',
            brand: 'Bel Air',
            dimen: '81cm x 50cm x 51cm',
            weight: '11kg',
            material: 'Paper cord, Rubber wood',
            price: '$180.00',
            sale: 'Sale 30%',
            feature: 'The Bel Air Rhye Dining Chair, also known as the CH24 Chair or Y Chair is a chair designed by Hans Wegner in 1949 for Carl Hansen & Søn. The chair features a bentwood armrest and a paper cord rope seat in a woven envelope pattern. The chair is named after the Y or wishbone-shaped backrest.'
        },
        {
            name: 'Bel Air Thelma',
            imgSrc: 'img/products/21/anhchinh.jpg',
            color: 'Beige, Gray',
            cat: 'Office Chairs',
            catid: 'office filtercat',
            brand: 'Bel Air',
            dimen: '84cm x 49cm x 54cm',
            weight: '6kg',
            material: 'Engineered wood, Polyester',
            price: '$220.00',
            sale: 'Sale 30%',
            feature: 'The Bel Air Thelma Office Chair is a modern and versatile chair that can be matched easily with most office settings. Linnett\'s round silhouette and foam padded seat provides maximum comfort for you to sink into during work. With lasting support from her strong wooden legs, Thelma would make a perfect addition to your working area, making it fun and cosy for your Scandinavian or minimalist work interior. Available in Natural - White, Natural - Grey.'
        },
        {
            name: 'Bel Air Lule 2',
            imgSrc: 'img/products/22/anhchinh.jpg',
            color: 'Beige, Green',
            cat: 'Office Chairs',
            catid: 'office filtercat',
            brand: 'Bel Air',
            dimen: '79cm x 59cm x 61cm',
            weight: '10.5kg',
            material: 'Solid walnut,100% Polyester',
            price: '$220.00',
            sale: 'No',
            feature: 'The Bel Air Lule Office Chair is an upgrade in the timeless contoured bucket seat. Featuring firm seats, a quilted curved backrest and slim metal legs, it commands a stoic splendour that also speaks of charm and elegance. Add this to any room, and you\'ll be surprised at how Lule will bring opulence to your space.'
        },
        {
            name: 'Bel Air Revy',
            imgSrc: 'img/products/23/anhchinh.jpg',
            color: 'Yellow, Navy',
            cat: 'Office Chairs',
            catid: 'office filtercat',
            brand: 'Bel Air',
            dimen: '80cm x 59cm x 58cm',
            weight: '23.5kg',
            material: '100% recycled polyester, Powder-coated iron',
            price: '$109.00',
            sale: 'No',
            feature: 'Like a breath of fresh air, The Bel Air Revy Office Chair is an amusingly fresh take on Scandinavian design. Clean, sleek lines with swanky dark legs with a minimalist silhouette that showcases just how versatile this piece would be in a dining room, a study, or living room.'
        },
        {
            name: 'Bergen Margot',
            imgSrc: 'img/products/24/anhchinh.jpg',
            color: 'Pink',
            cat: 'Office Chairs',
            catid: 'office filtercat',
            brand: 'Bergen',
            dimen: '86cm x 49cm x 61cm',
            weight: '13kg',
            material: '100% recycled polyester, Copper-plated steel',
            price: '$249.00',
            sale: 'No',
            feature: 'The embrace of the Bergen Margot Office Chair is cosy and comfortable, with soft foam padding and a sloped back rest, making it the perfect place to sit back and relax with a glass of wine in hand. Four tapered and elegantly angled legs have been carved from metal and finished with a clear lacquer to preserve its beauty.'
        },
        {
            name: 'Bergen Swinton',
            imgSrc: 'img/products/25/anhchinh.jpg',
            color: 'Green, Beige',
            cat: 'Office Chairs',
            catid: 'office filtercat',
            brand: 'Bergen',
            dimen: '74-84cm x 66cm x 62cm',
            weight: '10kg',
            material: '100% recycled polyester',
            price: '$199.00',
            sale: 'No',
            feature: 'Thoughtfully designed for the restless worker, the Bergen Swinton Office Chair gives you the autonomy to sit however you wish to. It’s adjustable height with a gas lever mechanism and a 360 degree swivel base. With its firm yet cushy seat surface, this office chair combines functionality and style to give you the perfect office chair.\n' +
                'Available in 2 cool colours - Grey and Carbon, it is perfect for your study or home office.'
        },
        {
            name: 'Bartlett Lyra',
            imgSrc: 'img/products/26/anhchinh.jpg',
            color: 'Gray, Navy',
            cat: 'Kids Chairs',
            catid: 'kids filtercat',
            brand: 'Bartlett',
            dimen: '183cm x 107cm x 100cm',
            weight: '28kg',
            material: 'Poly rattan, Steel',
            price: '$449.00',
            sale: 'Sale 30%',
            feature: 'The cosy shape and extra cushioning are ideal for afternoon lounging, with a sturdy steel frame in a black powder coated finish. The Barlett Lyra Kids Chair is not just a style choice, the woven rattan is durable and easy to clean.'
        },
        {
            name: 'Bartlett Lyra Garden',
            imgSrc: 'img/products/27/anhchinh.jpg',
            color: 'Navy, Gray',
            cat: 'Kids Chairs',
            catid: 'kids filtercat',
            brand: 'Bartlett',
            dimen: '80cm x 54cm x 58cm',
            weight: '13.2kg',
            material: 'Poly rattan, Steel',
            price: '$179.00',
            sale: 'Sale 30%',
            feature: 'The Barlett Lyra Kids Chair is designed with comfort in mind. Ideal for longer sittings. Its weave perfectly cradles the body within its clean lines without suffocating and offers a character of casual sophistication to every home. It is designed to endure the weather. You have one less worry about bad weather problems. More than just a place to sit. Removable and washable covers so you take the covers off and wash them. The cushion fabric is water resistant and quick dry. It also resists ultra violet (UV) light while retaining the fabrics natural softness.'
        },
        {
            name: 'Bartlett Nardi',
            imgSrc: 'img/products/28/anhchinh.jpg',
            color: 'Gray, Beige',
            cat: 'Kids Chairs',
            catid: 'kids filtercat',
            brand: 'Bartlett',
            dimen: '82.5cm x 58.5cm x 53.5cm',
            weight: '4.7kg',
            material: 'Fibreglass, Polyprolylene',
            price: '$399.00',
            sale: 'Sale 30%',
            feature: 'Modern and sleek, this gorgeous Barlett Nardi Kids Chair is designed by the famed Charles and Ray Eames in the mid-20th century. The body of this chair is designed to perfectly complement the contours of the human form. The Barlett Nardi Kids Chair features intricately designed beech wood legs that contrast the plastic seat, giving it a contemporary look. Nardi would be a gorgeous addition to your dining or study room for your children. It is available in a variety of colours, allowing you to select one which will best suit your interior.'
        },
        {
            name: 'Bartlett Topa',
            imgSrc: 'img/products/29/anhchinh.jpg',
            color: 'Beige, Gray',
            cat: 'Kids Chairs',
            catid: 'kids filtercat',
            brand: 'Bartlett',
            dimen: '84cm x 54cm x 53cm',
            weight: '19kg',
            material: 'Acacia,Aluminium,Polyester',
            price: '$229.00',
            sale: 'No',
            feature: 'A must-have for every household, the Bartlett Topa Kids Chair is a simple chair that serves its functionality without compromising on your home aesthetics. It\'s solid color design helps to declutter your visuals. The PU leather upholstered seat that is cushioned with 15mm foam helps to elevate the comfort level. '
        },
        {
            name: 'Bartlett Swara',
            imgSrc: 'img/products/30/anhchinh.jpg',
            color: 'Gray',
            cat: 'Kids Chairs',
            catid: 'kids filtercat',
            brand: 'Bartlett',
            dimen: '100cm x 73cm x 65cm',
            weight: '7kg',
            material: 'Aluminium, Polyester, Poly wicker',
            price: '$229.00',
            sale: 'No',
            feature: 'Our Bartlett Swara Kids Chair is an updated version of the classic wicker chair. Its hand-woven synthetic rattan is easier to maintain and the structure is made from solid acacia wood. It\'s also perfect for covered/sheltered outdoor spaces. Swara uses wood from sustainably-managed forests with controlled felling and responsible environmental management. Your Swara is exclusive. The unique tones and patterns of the solid wood make each piece a unique one-off, and the hand-woven rattan adds to the authenticity.\n'
        },
    ],
};

const controller = {
    init() {
        model.currentChair=model.chairs[0];
        chairListView.init();
        chairView.init();
        model.currentChair1=model.chairs[0];
        chairListView1.init();
        chairView1.init();
    },
    getCurrentChair(){
        return model.currentChair;
    },
    getChair() {
        return model.chairs;
    },

    setCurrentChair(chair){
        model.currentChair = chair;
    },
    getCurrentChair1(){
        return model.currentChair1;
    },

    getChair1() {
        return model.chairs;
    },
    setCurrentChair1(chair1){
        model.currentChair1 = chair1;
    },
};

const chairView = {
    init(){
        this.chairName = document.getElementById('chair-name-1');
        this.chairImg = document.getElementById('chair-img-1');
        this.chairColor = document.getElementById('chair-color-1');
        this.chairCat = document.getElementById('chair-cat-1');
        this.chairBrand = document.getElementById('chair-brand-1');
        this.chairDimensions = document.getElementById('chair-dimensions-1');
        this.chairWeight = document.getElementById('chair-weight-1');
        this.chairMaterial = document.getElementById('chair-material-1');
        this.chairPrice = document.getElementById('chair-price-1');
        this.chairSale = document.getElementById('chair-sale-1');
        this.chairFeature = document.getElementById('chair-feature-1');
        this.render();
    },

    render(){
        const currentChair = controller.getCurrentChair();
        this.chairName.textContent = currentChair.name;
        this.chairImg.src = currentChair.imgSrc;
        this.chairColor.textContent = currentChair.color;
        this.chairCat.textContent = currentChair.cat;
        this.chairBrand.textContent = currentChair.brand;
        this.chairDimensions.textContent = currentChair.dimen;
        this.chairWeight.textContent = currentChair.weight;
        this.chairMaterial.textContent = currentChair.material;
        this.chairPrice.textContent = currentChair.price;
        this.chairSale.textContent = currentChair.sale;
        this.chairFeature.textContent = currentChair.feature;
    },
};

const chairView1 = {
    init(){
        this.chairName1 = document.getElementById('chair-name-2');
        this.chairImg1 = document.getElementById('chair-img-2');
        this.chairColor1 = document.getElementById('chair-color-2');
        this.chairCat1 = document.getElementById('chair-cat-2');
        this.chairBrand1 = document.getElementById('chair-brand-2');
        this.chairDimensions1 = document.getElementById('chair-dimensions-2');
        this.chairWeight1 = document.getElementById('chair-weight-2');
        this.chairMaterial1 = document.getElementById('chair-material-2');
        this.chairPrice1 = document.getElementById('chair-price-2');
        this.chairSale1 = document.getElementById('chair-sale-2');
        this.chairFeature1 = document.getElementById('chair-feature-2');
        this.render();
    },

    render(){
        const currentChair1 = controller.getCurrentChair1();
        this.chairName1.textContent = currentChair1.name;
        this.chairImg1.src = currentChair1.imgSrc;
        this.chairColor1.textContent = currentChair1.color;
        this.chairCat1.textContent = currentChair1.cat;
        this.chairBrand1.textContent = currentChair1.brand;
        this.chairDimensions1.textContent = currentChair1.dimen;
        this.chairWeight1.textContent = currentChair1.weight;
        this.chairMaterial1.textContent = currentChair1.material;
        this.chairPrice1.textContent = currentChair1.price;
        this.chairSale1.textContent = currentChair1.sale;
        this.chairFeature1.textContent = currentChair1.feature;
    },
};

const chairListView = {
    init() {
        this.chairListElem = document.getElementById('chair-list1');
        this.render();
    },

    render() {
        const chairs = controller.getChair();

        for(var i=0;i<chairs.length;i++) {
            chair = chairs[i];
            elem = document.createElement('option');
            elem.style.cursor = 'pointer';
            elem.className = chair.catid;
            elem.value= i;
            elem.textContent = chair.name;
            this.chairListElem.appendChild(elem);
        }

        this.chairListElem.addEventListener('change',function(){
            var i = $(this).val();
            controller.setCurrentChair(chairs[i]);
            chairView.render();
        });
    },
};

const chairListView1 = {
    init(){
        this.chairListElem1 = document.getElementById('chair-list2');
        this.render();
    },

    render(){
        const chairs = controller.getChair1();

        for (var i=0;i<chairs.length;i++) {
            chair1 = chairs[i];
            elem1 = document.createElement('option');
            elem1.style.cursor = 'pointer';
            elem1.className = chair1.catid;
            elem1.value = i;
            elem1.textContent = chair1.name;
            this.chairListElem1.appendChild(elem1);
            model.currentChair1=chairs[0];
        }
        this.chairListElem1.addEventListener('change', function (){
            var i = $(this).val();
            controller.setCurrentChair1(chairs[i]);
            chairView1.render();
        });
    },
};
controller.init();

filterselection("all")
function filterselection(c) {
    var x, i;
    x = document.getElementsByClassName("filtercat");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
        elemAddClass(x[i], "hide");
        if (x[i].className.indexOf(c) > -1) elemRemoveClass(x[i], "hide");
    }
}

var catselector = document.getElementById("cat-selector");
var btns = catselector.getElementsByClassName("cat-name");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("cat-name active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/*Close Button onclick*/

function clearsearch() {
    searchcontent = document.getElementById('search-input');
    searchcontent.innerHTML = "";
}

/*Searh Filter*/

function searchfunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("the-list");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function displayList() {
    $(".product-list").show();
}

function hideList() {
    $("ul.product-list").hide();
}

function filterselected(selected_cat) {
    var x,i;
    x = document.getElementsByClassName('filterDiv');
    c = selected_cat.value;
    if (c == 'all') c="";

    for (i=0;i<x.length;i++){
        elemAddClass(x[i],"hide");
        if (x[i].className.indexOf(c) > -1) elemRemoveClass(x[i],"hide");
    }
}

function elemAddClass (element,name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0;i<arr2.length;i++){
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function elemRemoveClass (element,name) {
    var i, arr1, arr2;
    arr1= element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0;i<arr2.length;i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}

/*Cart Check*/

function cartcheck() {
    var cartNumbers = localStorage.getItem('cartNumbers');
    var cartcheckError = document.getElementById('cartcheckError');
    if(parseInt(cartNumbers) === 0 || cartNumbers == undefined)
    {
        cartcheckError.innerHTML = "<sup>*</sup>Cart is empty";
        return false;
    }
    else
    {
        window.open('checkout.html','_self');
    }
}
function cartcheck1() {
    var cartNumbers = localStorage.getItem('cartNumbers');
    var cartcheckError = document.getElementById('cartcheckError1');
    var goshopping = document.getElementById('go-shopping');
    if(parseInt(cartNumbers) === 0 || cartNumbers == undefined)
    {
        cartcheckError.innerHTML = "<sup>*</sup>Cart is empty";
        goshopping.innerHTML = "<a href = 'products1.html'>Go Shopping</a>";
        return false;
    }
    else
    {
        window.open('checkout.html','_self');
    }
}