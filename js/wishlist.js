heartdetail1 = document.querySelectorAll('.icon1'); heartdetail2 = document.querySelectorAll('.icon2');
heartdetail3 = document.querySelectorAll('.icon3'); heartdetail4 = document.querySelectorAll('.icon4');
heartdetail5 = document.querySelectorAll('.icon5');heartdetail6 = document.querySelectorAll('.icon6');
heartdetail7 = document.querySelectorAll('.icon7');heartdetail8 = document.querySelectorAll('.icon8');
heartdetail9 = document.querySelectorAll('.icon9');heartdetail10 = document.querySelectorAll('.icon10');
heartdetail11 = document.querySelectorAll('.icon11');heartdetail12 = document.querySelectorAll('.icon12');
heartdetail13 = document.querySelectorAll('.icon13');heartdetail14 = document.querySelectorAll('.icon14');
heartdetail15 = document.querySelectorAll('.icon15');heartdetail16 = document.querySelectorAll('.icon16');
heartdetail17 = document.querySelectorAll('.icon17');heartdetail18 = document.querySelectorAll('.icon18');
heartdetail19 = document.querySelectorAll('.icon19');heartdetail20 = document.querySelectorAll('.icon20');
heartdetail21 = document.querySelectorAll('.icon21');heartdetail22 = document.querySelectorAll('.icon22');
heartdetail23 = document.querySelectorAll('.icon23');heartdetail24 = document.querySelectorAll('.icon24');
heartdetail25 = document.querySelectorAll('.icon25');heartdetail26 = document.querySelectorAll('.icon26');
heartdetail27 = document.querySelectorAll('.icon27');heartdetail28 = document.querySelectorAll('.icon28');
heartdetail29 = document.querySelectorAll('.icon29');heartdetail30 = document.querySelectorAll('.icon30');
iconbeige = document.querySelectorAll('.iconbeige1'); iconbeige2 = document.querySelectorAll('.iconbeige2')
iconblue = document.querySelectorAll('.iconblue'); icongray = document.querySelectorAll('.icongray1');
icongray2 = document.querySelectorAll('.icongray2'); icongreen = document.querySelectorAll('.icongreen1')
icongreen2 = document.querySelectorAll('.icongreen2'); iconpink = document.querySelectorAll('.iconpink')
iconyellow = document.querySelectorAll('.iconyellow')

function initwishlist(hearts, product){
    for(let i = 0; i<hearts.length; i++){
        hearts[i].addEventListener('click', function(){
            if(hearts[i].classList.contains("liked")){
                hearts[i].innerHTML = `<i class = "fa fa-heart-o"></i>`;
                hearts[i].classList.remove("liked");
                wishlistNumbers(product[i], "decrease");
                removeItem(product[i]);
                showPopupwishlistRemove(product[i]);
            }
            else {
                hearts[i].innerHTML = `<i class = "fa fa-heart"></i>`;
                hearts[i].classList.add("liked");
                wishlistNumbers(product[i]);
                addItem(product[i]);
                setClass(product[i]);
                showPopupwishlist(product[i]);
            }
        })
    }
    onLoadHeart(hearts, product)
}

initwishlist(heartdetail1, product1); initwishlist(heartdetail2, product2); initwishlist(heartdetail3, product3); initwishlist(heartdetail4, product4)
initwishlist(heartdetail5, product5); initwishlist(heartdetail6, product6); initwishlist(heartdetail7, product7); initwishlist(heartdetail8, product8)
initwishlist(heartdetail9, product9); initwishlist(heartdetail10, product10); initwishlist(heartdetail11, product11); initwishlist(heartdetail12, product12)
initwishlist(heartdetail13, product13); initwishlist(heartdetail14, product14); initwishlist(heartdetail15, product15); initwishlist(heartdetail16, product16)
initwishlist(heartdetail17, product17); initwishlist(heartdetail18, product18); initwishlist(heartdetail19, product19); initwishlist(heartdetail20, product20)
initwishlist(heartdetail21, product21); initwishlist(heartdetail22, product22); initwishlist(heartdetail23, product23); initwishlist(heartdetail24, product24)
initwishlist(heartdetail25, product25); initwishlist(heartdetail26, product26); initwishlist(heartdetail27, product27); initwishlist(heartdetail28, product28)
initwishlist(heartdetail29, product29); initwishlist(heartdetail30, product30)
initwishlist(iconbeige,productsbeige1); initwishlist(iconbeige2,productsbeige2); initwishlist(iconblue,productsblue); initwishlist(icongray,productsgray1)
initwishlist(icongray2,productsgray2); initwishlist(icongreen,productsgreen1); initwishlist(icongreen2,productsgreen2); initwishlist(iconpink,productspink)
initwishlist(iconyellow,productsyellow)

//-----------------------------------Wishlist Action

//Show pop up message
function showPopupwishlist(product){
    let noti = document.querySelector('.notification-toast');
    noti.style.display = "block";
    if(noti.classList.contains("animate__fadeOutLeft")){
        noti.classList.remove("animate__fadeOutLeft");
        noti.classList.add("animate__fadeInLeft");
        noti.innerHTML = `
        <div class = "container">
        <div class = "row">
                <div class = "noti-image col-lg-4">
                    <img src = "${product.image}" width = "90px">
                </div>
                <div class = "noti-detail col-lg-7">
                    <h6>${product.name} has been added to your <span><a href = "wishlist.html">wishlist</a></span>.</h6>
                    <p>Color: ${product.color}</p>
                    <p>In stock: ${product.available}</p>
                </div>
                <div class = "col-lg-1">
                    <button class = "close float-right" onclick = "closePopup()">&times;</button>
                </div>
        </div></div>
    `;
        setTimeout(closePopup, 8000);
    }
    else {
        noti.classList.add("animate__fadeInLeft");
        noti.innerHTML = `
        <div class = "container">
        <div class = "row">
                <div class = "noti-image col-lg-4">
                    <img src = "${product.image}" width = "90px">
                </div>
                <div class = "noti-detail col-lg-7">
                    <h6>${product.name} has been added to your <span><a href = "wishlist.html">wishlist</a></span>.</h6>
                    <p>Color: ${product.color}</p>
                    <p>In stock: ${product.available}</p>
                </div>
                <div class = "col-lg-1">
                    <button class = "close float-right" onclick = "closePopup()">&times;</button>
                </div>
        </div></div>
    `;
        setTimeout(closePopup, 8000);
    }
}

function showPopupwishlistRemove(product){
    let noti = document.querySelector('.notification-toast');
    noti.style.display = "block";
    if(noti.classList.contains("animate__fadeOutLeft")){
        noti.classList.remove("animate__fadeOutLeft");
        noti.classList.add("animate__fadeInLeft");
        noti.innerHTML = `
        <div class = "container">
        <div class = "row">
                <div class = "noti-image col-lg-4">
                    <img src = "${product.image}" width = "90px">
                </div>
                <div class = "noti-detail col-lg-7">
                    <h6>${product.name} has been removed from your <span><a href = "wishlist.html">wishlist</a></span>.</h6>
                    <p>Color: ${product.color}</p>
                    <p>In stock: ${product.available}</p>
                </div>
                <div class = "col-lg-1">
                    <button class = "close float-right" onclick = "closePopup()">&times;</button>
                </div>
        </div></div>
    `;
        setTimeout(closePopup, 8000);
    }
    else {
        noti.classList.add("animate__fadeInLeft");
        noti.innerHTML = `
        <div class = "container">
        <div class = "row">
                <div class = "noti-image col-lg-4">
                    <img src = "${product.image}" width = "90px">
                </div>
                <div class = "noti-detail col-lg-7">
                    <h6>${product.name} has been removed from your <span><a href = "wishlist.html">wishlist</a></span>.</h6>
                    <p>Color: ${product.color}</p>
                    <p>In stock: ${product.available}</p>
                </div>
                <div class = "col-lg-1">
                    <button class = "close float-right" onclick = "closePopup()">&times;</button>
                </div>
        </div></div>
    `;
        setTimeout(closePopup, 8000);
    }
}

//Save class of item to LocalStorage
function setClass(product){
    var wishlistItems = localStorage.getItem("wishlist");
    wishlistItems = JSON.parse(wishlistItems);
    if(product.wishlist == false){
        let productId = product.id;
        product.wishlist = true;
        wishlistItems = {
            ...wishlistItems,
            [productId]: product
        }
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
}

function onLoadHeart(hearts, products){
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    if(wishlistIds){
        for(var i = 0; i<hearts.length; i++){
            if(wishlistIds.indexOf(products[i].id) >=0){
                hearts[i].innerHTML = `<i class = "fa fa-heart"></i>`;
                hearts[i].classList.add("liked");
            }
        }
    }
}

//Add item to productsinList in LocalStorage
function addItem(product){
    var wishlistItems = localStorage.getItem("wishlist");
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    wishlistItems = JSON.parse(wishlistItems);
    if(wishlistItems != null){
        let currentProduct = product.id;
        if( wishlistItems[currentProduct] == undefined && wishlistIds.indexOf(product.id)<0) {
            wishlistItems = {
                ...wishlistItems,
                [currentProduct]: product
            }
            wishlistIds.push(product.id)
        }
    }
    else {
        wishlistItems = {
            [product.id]: product
        };
        wishlistIds = [product.id];
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
    localStorage.setItem('wishlistNumber', (wishlistIds.length).toString());
}
//Remove item to productsinList in LocalStorage
function removeItem(product){
    var wishlistItems = localStorage.getItem("wishlist");
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    wishlistItems = JSON.parse(wishlistItems);
    delete wishlistItems[(product.id).toString()];
    var j = 0;
    for(var i = 0, l = wishlistIds.length; i<l; i++){
        if(wishlistIds[i] !== product.id){
            wishlistIds[j++] = wishlistIds[i];
        }
    }
    wishlistIds.length = j;
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
    localStorage.setItem('wishlistNumber', (wishlistIds.length).toString());
}

//Set item in wishlist & Create array of product ids that are added in wishlist
function setItem(product){
    var wishlistItems = localStorage.getItem("wishlist");
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    wishlistItems = JSON.parse(wishlistItems);
    if(wishlistItems != null){
        let currentProduct = product.id;
        if( wishlistItems[currentProduct] == undefined && wishlistIds.indexOf(product.id)<0) {
            wishlistItems = {
                ...wishlistItems,
                [currentProduct]: product
            }
            wishlistIds.push(product.id)
        }
    }
    else {
        wishlistItems = {
            [product.id]: product
        };
        wishlistIds = [product.id];
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
}
//Set number of items in wishlistNumber in LocalStorage
function wishlistNumbers(product, action){
    let wishlistNumbers = localStorage.getItem('wishlistNumber');
    var wishlistItems = localStorage.getItem("wishlist");
    wishlistItems = JSON.parse(wishlistItems);
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    if(wishlistNumbers && wishlistItems) {
        localStorage.setItem("wishlistNumber", (parseInt(wishlistNumbers) + 1).toString());
        if(action){
            localStorage.setItem("wishlistNumber", (parseInt(wishlistNumbers) - 1).toString());
        }
    }
    else {
        localStorage.setItem("wishlistNumber", (1).toString());
    }
    setItem(product);
}

//-----------------------------------Wishlist Page

//Display Wishlist number
function onLoadWishlistNumber() {
    let wishlistNumbers = localStorage.getItem('wishlistNumber');
    if(wishlistNumbers){
        document.querySelector('.wishlistNumber span').textContent = wishlistNumbers;
    }
}

//Display Wishlist products
function displayWishlist(){
    let wishlistItems = localStorage.getItem("wishlist");
    wishlistItems = JSON.parse(wishlistItems);
    let wishlistContainer = document.querySelector(".wishlist-container");
    if(wishlistItems && wishlistContainer){
        wishlistContainer.innerHTML = '';
        Object.values(wishlistItems).map( (item,index) =>{
            wishlistContainer.innerHTML += `
               <div class = "row product-item">
                    <div class = "col-lg-5 col-product">
                        <div class = "row">
                            <div class = "col-lg-3"><img src = "${item.image}" width = 100px></div>
                            <div class = "col-lg-9">
                                <h6><a href = "${item.linkitem}">${item.name}</a></h6>
                                <p>Product ID: #<span>${item.id}</span>, Color: ${item.color}</p>
                                <p>Category: ${item.cate}</p>
                                <p><div class = "product"><button class = "removeCart"><div>Remove</div><i class="fa fa-trash-alt"></i></button></button></div></p>
                            </div>
                        </div>
                    </div>
                    <div class = "col-lg-2 col-qty col-available">
                        <p>${item.available} in stock</p>
                    </div>
                    <div class = "col-lg-1 col-price"><h6>$${(item.pricegoc).toFixed(2)}</h6></div>
                    <div class = "col-lg-2 col-discount"><h6>$${(item.discount).toFixed(2)}</h6></div>
                    <div class = "col-lg-2 col-total col-action">
                        <p><div class = "product-add"><button class = "add"><div>Add to cart</div><i class="icon_cart_alt"></i></button></div></p>
                    </div>
               </div>
           `;
        });
        wishlistContainer.innerHTML += `
          
                <div class = "row btn-header">
                    <div class = "col-lg-12">
                        <h6>Find out more about Richfield Chairs products</h6>
                    </div>
                </div>
                <div class="row row-btn">
                    <div class="col-lg-6 btn-left">
                        <button class = "backtoshop"><a href = "products1.html">BACK TO SHOPPING</a></button>
                    </div>
                    <div class="col-lg-6 btn-right">
                        <button class = "checkout"><a href = "product-compare.html">COMPARE PRODUCTS</a></button>
                    </div>
                </div>
        `;
        removeItemWishlist();
        addItemWishlist();
}}

//Remove item from wishlist
function removeItemWishlist(){
    let deleteButtons = document.querySelectorAll('.removeCart');
    let wishlistItems = localStorage.getItem("wishlist");
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    wishlistItems = JSON.parse(wishlistItems);
    let productId;

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productId = deleteButtons[i].parentElement.parentElement.parentElement.querySelector('span').textContent;
            delete wishlistItems[productId];
            var j = 0;
            for(var k = 0, l = wishlistIds.length; k<l; k++){
                if(wishlistIds[k] != productId){
                    wishlistIds[j++] = wishlistIds[k];
                }
            }
            wishlistIds.length = j;
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
            localStorage.setItem('wishlistNumber', (wishlistIds.length).toString());
            displayWishlist();
            onLoadWishlistNumber();
        })
    }
}

//Add Wishlist Item to cart
function addItemWishlist(){
    let addButtons = document.querySelectorAll('.product-add button');
    let wishlistItems = localStorage.getItem("wishlist");
    var wishlistIds = localStorage.getItem("wishlistIds");
    wishlistIds = JSON.parse(wishlistIds);
    wishlistItems = JSON.parse(wishlistItems);
    let productId;
    for(let i=0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', () => {
            productId = addButtons[i].parentElement.parentElement.parentElement.querySelector('span').textContent;
            showPopup(wishlistItems[productId], 1);
            cartNumbersAction(wishlistItems[productId]);
            totalCost(wishlistItems[productId]);
            totalDiscount(wishlistItems[productId]);
            shippingFee();
            displayCartHover();
            delete wishlistItems[productId];
            var j = 0;
            for(var k = 0, l = wishlistIds.length; k<l; k++){
                if(wishlistIds[k] != productId){
                    wishlistIds[j++] = wishlistIds[k];
                }
            }
            wishlistIds.length = j;
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
            localStorage.setItem('wishlistNumber', (wishlistIds.length).toString());
            displayWishlist();
            onLoadWishlistNumber();
        })
    }
}


