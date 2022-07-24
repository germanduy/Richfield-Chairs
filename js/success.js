/*---------------------------------------On click coupon---------------------------------------------*/
var checkbox0 = document.getElementById('bartlettCheck');
var checkbox1 = document.getElementById('bergenCheck');
var checkbox2 = document.getElementById('belairCheck');
var checkbox3 = document.getElementById('rfcCheck');
var backtocart = document.querySelector('.backtocart');

checkbox0.addEventListener('click', checkPromo)
checkbox0.addEventListener('click', removeCouponButtons)
checkbox1.addEventListener('click', checkPromo)
checkbox1.addEventListener('click', removeCouponButtons)
checkbox2.addEventListener('click', checkPromo)
checkbox2.addEventListener('click', removeCouponButtons)
checkbox3.addEventListener('click', checkPromo)
checkbox3.addEventListener('click', removeCouponButtons)
backtocart.addEventListener('click', backtoCart);

function checkPromo(){
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseFloat(cartCost);
    let discountCoupon;
    var statusbox = document.querySelector('.statusCode');
    var checkbox0 = document.getElementById('bartlettCheck');
    var checkbox1 = document.getElementById('bergenCheck');
    var checkbox2 = document.getElementById('belairCheck');
    var checkbox3 = document.getElementById('rfcCheck');
    var promo = localStorage.getItem("promo");

    var promoContainer = document.querySelector('.coupon-row');
    if(checkbox1.checked === true){
            if(parseInt(promo) === 0 || promo == undefined){
                localStorage.setItem("promo", (1).toString()); localStorage.setItem("promoClone", (1).toString());
                cartCost = cartCost - 150;
                discountCoupon = 150;
                localStorage.setItem("totalCost", (cartCost).toString());
                localStorage.setItem("discountCoupon", (discountCoupon).toString());
                localStorage.setItem("totalCostClone", (cartCost).toString());
                localStorage.setItem("discountCouponClone", (discountCoupon).toString());
                localStorage.setItem("couponName", 'BERGEN150');
                promoContainer.innerHTML = `
                    <div class = "coupon5 coupon rounded mb-3 d-flex justify-content-between">
                                <div class="py-3 d-flex align-items-center">
                                    <div>
                                        <h6>BERGEN150</h6>
                                    </div>
                                </div>
                    </div>
                `
                statusbox.innerHTML = `
            <div class = "alert alert-success" role="alert">
                 <i class="fa fa-check-circle"></i> &nbsp;&nbsp;Promotion applied!
            </div>
            `
            }
        checkbox0.disabled = true;
        checkbox2.disabled = true;
        checkbox3.disabled = true;
    }
    if(checkbox0.checked === true){
            if(parseInt(promo) === 0 || promo == undefined){
                localStorage.setItem("promo", (1).toString()); localStorage.setItem("promoClone", (1).toString());
                cartCost = cartCost - 100;
                discountCoupon = 100;
                localStorage.setItem("totalCost", (cartCost).toString());
                localStorage.setItem("discountCoupon", (discountCoupon).toString());
                localStorage.setItem("totalCostClone", (cartCost).toString());
                localStorage.setItem("discountCouponClone", (discountCoupon).toString());
                localStorage.setItem("couponName", 'BARTLETT100');
                promoContainer.innerHTML = `
                    <div class = "coupon5 coupon rounded mb-3 d-flex justify-content-between">
                                <div class="py-3 d-flex align-items-center">
                                    <div>
                                        <h6>BARTLETT100</h6>
                                    </div>
                                </div>
                    </div>
                `
                statusbox.innerHTML = `
            <div class = "alert alert-success" role="alert">
                 <i class="fa fa-check-circle"></i> &nbsp;&nbsp;Promotion applied!
            </div>
            `
            }
        checkbox1.disabled = true;
        checkbox2.disabled = true;
        checkbox3.disabled = true;
    }
    if(checkbox2.checked === true){
            if(parseInt(promo) === 0 || promo == undefined){
                localStorage.setItem("promo", (1).toString()); localStorage.setItem("promoClone", (1).toString());
                cartCost = cartCost - 100;
                discountCoupon = 100;
                localStorage.setItem("totalCost", (cartCost).toString());
                localStorage.setItem("discountCoupon", (discountCoupon).toString());
                localStorage.setItem("totalCostClone", (cartCost).toString());
                localStorage.setItem("discountCouponClone", (discountCoupon).toString());
                localStorage.setItem("couponName", 'BELAIR100');
                promoContainer.innerHTML = `
                <div class = "coupon5 coupon rounded mb-3 d-flex justify-content-between">
                                <div class="py-3 d-flex align-items-center">
                                    <div>
                                        <h6>BELAIR100</h6>
                                    </div>
                                </div>
                    </div>
                `
                statusbox.innerHTML = `
            <div class = "alert alert-success" role="alert">
                 <i class="fa fa-check-circle"></i> &nbsp;&nbsp;Promotion applied!
            </div>
            `
            }
        checkbox0.disabled = true;
        checkbox1.disabled = true;
        checkbox3.disabled = true;}
    if(checkbox3.checked === true){
        if(localStorage.getItem("rfc") == undefined){
            localStorage.setItem("promo", (1).toString()); localStorage.setItem("promoClone", (1).toString());
            cartCost = cartCost - 50;
            discountCoupon = 50;
            localStorage.setItem("totalCost", (cartCost).toString());
            localStorage.setItem("discountCoupon", (discountCoupon).toString());
            localStorage.setItem("rfc", (1). toString());
            localStorage.setItem("totalCostClone", (cartCost).toString());
            localStorage.setItem("discountCouponClone", (discountCoupon).toString());
            localStorage.setItem("couponName", 'RFC50');
            promoContainer.innerHTML = `
                <div class = "coupon5 coupon rounded mb-3 d-flex justify-content-between">
                                <div class="py-3 d-flex align-items-center">
                                    <div>
                                        <h6>RFC50</h6>
                                    </div>
                                </div>
                    </div>
                `
            statusbox.innerHTML = `
            <div class = "alert alert-success" role="alert">
                 <i class="fa fa-check-circle"></i> &nbsp;&nbsp;Promotion applied!
            </div>
            `
            }
        checkbox0.disabled = true;
        checkbox1.disabled = true;
        checkbox2.disabled = true;
        }
    displayTableSummary();
}

function onLoadValidCoupon(){
    let cartIds = localStorage.getItem("cartIds");
    cartIds = JSON.parse(cartIds);
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let rfc = localStorage.getItem('rfc');
    var checkbox0 = document.getElementById('bartlettCheck');
    var checkbox1 = document.getElementById('bergenCheck');
    var checkbox2 = document.getElementById('belairCheck');
    var checkbox3 = document.getElementById('rfcCheck');
    var bergens = [1, 31, 32, 2, 32, 3, 33, 4, 34, 16, 46, 17, 18, 48, 19, 49, 24, 25, 55];
    var bartletts = [11, 12, 13, 14, 15, 26, 27, 28, 29, 30, 41, 43, 44, 56, 57, 58, 59];
    var belairs = [5, 6, 7, 37, 8, 9, 10, 20, 21, 22, 23, 38, 39, 50, 51, 52, 53];
    let j; let k; let l;
    let j1 = 0; let k1 = 0; let l1 = 0;
    for(var i = 0; i<cartIds.length; i++){
        let currentId = parseInt(cartIds[i]);
        if(bergens.indexOf(currentId)>=0){
            j1+= cartItems[currentId].inCart;
        }
    }
    j = j1;
    for(var e = 0; e<cartIds.length; e++){
        let currentId = parseInt(cartIds[e]);
        if(bartletts.indexOf(currentId)>=0){
            k1+= cartItems[currentId].inCart;
        }
    }
    k = k1;
    for(var g = 0; g<cartIds.length; g++){
        let currentId = parseInt(cartIds[g]);
        if(belairs.indexOf(currentId)>=0){
            l1+= cartItems[currentId].inCart;
        }
    }
    l = l1;
    if(parseInt(rfc) === 1){
        checkbox3.disabled = true;
    }
    else if(rfc == undefined){
        checkbox3.disabled = false;
    }
    if(j<3){
        checkbox1.disabled = true;
    }
    else if(j>=3){
        checkbox1.disabled = false;
    }
    if(k<2){
        checkbox0.disabled = true;
    }
    else if(k>=2){
        checkbox0.disabled = false;
    }
    if(l<2){
        checkbox2.disabled = true;
    }
    else if(l>=2){
        checkbox2.disabled = false;
    }
}

function onLoadPromo(){
    var promoName = localStorage.getItem("couponName");
    var checkbox0 = document.getElementById('bartlettCheck');
    var checkbox1 = document.getElementById('bergenCheck');
    var checkbox2 = document.getElementById('belairCheck');
    var checkbox3 = document.getElementById('rfcCheck');
    var promoContainer = document.querySelector('.coupon-row');
    if(promoName){
        promoContainer.innerHTML = "";
        promoContainer.innerHTML += `
                <div class = "coupon5 coupon rounded mb-3 d-flex justify-content-between">
                    <div class="py-3 d-flex align-items-center">
                                    <div>
                                        <h6>${promoName}</h6>
                                    </div>
                                </div>
                                </div>
                `;
        if(promoName === 'BARTLETT100'){
            checkbox0.checked = true;
        }
        else
            checkbox0.checked = false;
        if(promoName === 'BERGEN150'){
            checkbox1.checked = true;
        }
        else
            checkbox1.checked = false;
        if(promoName === 'BELAIR100'){
            checkbox2.checked = true;
        }
        else
            checkbox2.checked = false;
        if(promoName === 'RFC50'){
            checkbox3.checked = true;
        }
        else
            checkbox3.checked = false;
    }
}

function removeCouponButtons(){
    var checkbox0 = document.getElementById('bartlettCheck');
    var checkbox1 = document.getElementById('bergenCheck');
    var checkbox2 = document.getElementById('belairCheck');
    var checkbox3 = document.getElementById('rfcCheck');
    let cartCost = parseFloat(localStorage.getItem("totalCost"));
    let couponName = localStorage.getItem('couponName');
    var promoContainer = document.querySelector('.coupon-row');
    var statusbox = document.querySelector('.statusCode');

    if((checkbox0.checked === false && couponName === 'BARTLETT100')){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.removeItem("couponName");
        localStorage.setItem('totalCost', ((cartCost + 100).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 100).toFixed(2)).toString());
        statusbox.innerHTML = "";
        promoContainer.innerHTML = "";
        onLoadValidCoupon();
        displayTableSummary();
    }

    if((checkbox2.checked === false && couponName === 'BELAIR100')){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.removeItem("couponName");
        localStorage.setItem('totalCost', ((cartCost + 100).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 100).toFixed(2)).toString());
        statusbox.innerHTML = "";
        promoContainer.innerHTML = "";
        onLoadValidCoupon();
        displayTableSummary();
    }

    if(checkbox3.checked === false && couponName === 'RFC50'){
        localStorage.removeItem("rfc");
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.removeItem("couponName");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCost', ((cartCost + 50).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 50).toFixed(2)).toString());
        statusbox.innerHTML = "";
        promoContainer.innerHTML = "";
        onLoadValidCoupon();
        displayTableSummary();
    }

    if(checkbox1.checked === false && couponName === 'BERGEN150'){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.removeItem("couponName");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCost', ((cartCost + 150).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 150).toFixed(2)).toString());
        statusbox.innerHTML = "";
        promoContainer.innerHTML = "";
        onLoadValidCoupon();
        displayTableSummary();
    }
}

function backtoCart(){
    var checkbox0 = document.getElementById('bartlettCheck');
    var checkbox1 = document.getElementById('bergenCheck');
    var checkbox2 = document.getElementById('belairCheck');
    var checkbox3 = document.getElementById('rfcCheck');
    let cartCost = parseFloat(localStorage.getItem("totalCost"));
    let couponName = localStorage.getItem('couponName');
    if((checkbox0.checked === true && couponName === 'BARTLETT100')){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.removeItem("couponName");
        localStorage.setItem('totalCost', ((cartCost + 100).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 100).toFixed(2)).toString());
    }

    if((checkbox2.checked === true && couponName === 'BELAIR100')){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.removeItem("couponName");
        localStorage.setItem('totalCost', ((cartCost + 100).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 100).toFixed(2)).toString());
    }

    if(checkbox3.checked === true && couponName === 'RFC50'){
        localStorage.removeItem("rfc");
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.removeItem("couponName");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCost', ((cartCost + 50).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 50).toFixed(2)).toString());
        statusbox.innerHTML = "";
        promoContainer.innerHTML = "";
    }

    if(checkbox1.checked === true && couponName === 'BERGEN150'){
        localStorage.removeItem("promo");
        localStorage.removeItem("promoClone");
        localStorage.removeItem("couponName");
        localStorage.setItem("discountCoupon", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCost', ((cartCost + 150).toFixed(2)).toString());
        localStorage.setItem("discountCouponClone", ((0).toFixed(2)).toString());
        localStorage.setItem('totalCostClone', ((cartCost + 150).toFixed(2)).toString());
    }
}
onLoadValidCoupon();
onLoadPromo();