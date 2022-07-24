//Products
let products = [
    {
        id: 1,
        image: "img/products/1/arm1.jpg",
        linkitem: 'productdetail01.html',
        color: 'Gray',
        name: "Bergen Miro",
        wishlist: false,
        price: 279.30,
        pricegoc: 399.00,
        discount: 119.70,
        deliverytime: 5,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 2,
        name: "Bergen Kubrick",
        color: 'Magenta',
        image: "img/products/2/arm2.jpg",
        linkitem: 'productdetail02.html',
        wishlist: false,
        deliverytime: 5,
        price: 349.30,
        pricegoc: 499.00,
        discount: 149.70,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 3,
        name: "Bergen Sete",
        color: 'Beige',
        image: "img/products/3/arm3.jpg",
        linkitem: 'productdetail03.html',
        wishlist: false,
        deliverytime: 5,
        price: 599.00,
        pricegoc: 599.00,
        discount: 0.00,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 4,
        name: "Bergen Shona",
        color: 'Green',
        wishlist: false,
        image: "img/products/4/bar4.jpg",
        linkitem: 'productdetail04.html',
        deliverytime: 5,
        price: 209.30,
        pricegoc: 299.00,
        discount: 89.70,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 5,
        name: "Bel Air 2LG",
        color: 'Blue',
        wishlist: false,
        image: "img/products/5/arm5.jpg",
        linkitem: 'productdetail05.html',
        deliverytime: 5,
        price: 379.00,
        pricegoc: 379.00,
        discount: 0.00,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 6,
        image: "img/products/6/bar6.jpg",
        name: "Bel Air Lule",
        color: 'Gray',
        wishlist: false,
        linkitem: 'productdetail06.html',
        deliverytime: 5,
        inCart: 0,
        pricegoc: 299.00,
        discount: 89.70,
        price: 209.30,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 7,
        image: "img/products/7/bar7.jpg",
        color: 'Gray',
        wishlist: false,
        name: "Bel Air Swinton",
        linkitem: 'productdetail07.html',
        deliverytime: 5,
        inCart: 0,
        pricegoc: 149.00,
        discount: 44.70,
        price: 104.30,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 8,
        image: "img/products/8/sofa3.jpg",
        wishlist: false,
        color: 'Green',
        name: "Bel Air Orson",
        linkitem: 'productdetail08.html',
        deliverytime: 7,
        inCart: 0,
        pricegoc: 1049.00,
        discount: 314.70,
        price: 734.30,
        available: 28,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 9,
        image: "img/products/9/sofa4.jpg",
        linkitem: 'productdetail09.html',
        color: 'Green',
        wishlist: false,
        name: "Bel Air Branagh",
        deliverytime: 7,
        inCart: 0,
        price: 734.30,
        pricegoc: 1049.00,
        discount: 314.70,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 10,
        image: "img/products/10/sofa5.jpg",
        name: "Bel Air Elmira",
        color: 'Beige',
        deliverytime: 7,
        inCart: 0,
        price: 2199.00,
        pricegoc: 2199.00,
        discount: 0.00,
        linkitem: 'productdetail10.html',
        wishlist: false,
        available: 32,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 11,
        image: "img/products/11/banquette1.jpg",
        name: "Bartlett Assim",
        color: 'Beige',
        deliverytime: 5,
        inCart: 0,
        price: 329.00,
        pricegoc: 329.00,
        discount: 0.00,
        linkitem: 'productdetail11.html',
        wishlist: false,
        available: 46,
        cate: 'Banquette'
    },
    {
        id: 12,
        image: "img/products/12/banquette2.jpg",
        name: "Bartlett Raleigh",
        color: 'Gray',
        deliverytime: 5,
        inCart: 0,
        price: 139.30,
        pricegoc: 199.00,
        discount: 59.70,
        linkitem: 'productdetail12.html',
        wishlist: false,
        available: 19,
        cate: 'Banquette'
    },
    {
        id: 13,
        image: "img/products/13/banquette3.jpg",
        name: "Bartlett Asare 2",
        color: 'Beige',
        deliverytime: 5,
        inCart: 0,
        price: 104.30,
        pricegoc: 149.00,
        discount: 44.70,
        linkitem: 'productdetail13.html',
        wishlist: false,
        available: 19,
        cate: 'Banquette'
    },
    {
        id: 14,
        image: "img/products/14/banquette4.jpg",
        color: 'Pink',
        name: "Bartlett Asare",
        deliverytime: 5,
        inCart: 0,
        price: 199.00,
        pricegoc: 199.00,
        discount: 0.00,
        linkitem: 'productdetail14.html',
        wishlist: false,
        available: 26,
        cate: 'Banquette'
    },
    {
        id: 15,
        image: "img/products/15/banquette5.jpg",
        color: 'Green',
        name: "Bartlett Abel",
        deliverytime: 5,
        inCart: 0,
        price: 179.00,
        pricegoc: 179.00,
        discount: 0.00,
        linkitem: 'productdetail15.html',
        wishlist: false,
        available: 29,
        cate: 'Banquette'
    },
    {
        id: 16,
        image: "img/products/16/anhchinh.jpg",
        color: 'Yellow',
        name: "Bergen Abbon",
        deliverytime: 5,
        inCart: 0,
        price: 399.00,
        pricegoc: 399.00,
        discount: 0.00,
        linkitem: 'productdetail16.html',
        wishlist: false,
        available: 44,
        cate: 'Dining Chairs'
    },
    {
        id: 17,
        image: "img/products/17/anhchinh.jpg",
        color: 'Beige',
        name: "Bergen Revy",
        deliverytime: 5,
        inCart: 0,
        price: 249.00,
        pricegoc: 249.00,
        discount: 0.00,
        linkitem: 'productdetail17.html',
        wishlist: false,
        available: 30,
        cate: 'Dining Chairs'
    },
    {
        id: 18,
        image: "img/products/18/anhchinh.jpg",
        name: "Bergen Kalaspel",
        color: 'Yellow',
        deliverytime: 5,
        inCart: 0,
        price: 114.50,
        pricegoc: 229.00,
        discount: 114.50,
        linkitem: 'productdetail18.html',
        wishlist: false,
        available: 30,
        cate: 'Dining Chairs'
    },
    {
        id: 19,
        image: "img/products/19/anhchinh.jpg",
        color: 'Gray',
        name: "Bergen Deon",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 99.00,
        price: 69.30,
        discount: 29.70,
        linkitem: 'productdetail19.html',
        wishlist: false,
        available: 26,
        cate: 'Dining Chairs'
    },
    {
        id: 20,
        image: "img/products/20/anhchinh.jpg",
        color: 'Green',
        name: "Bel Air Rhye",
        deliverytime: 5,
        inCart: 0,
        price: 126.30,
        pricegoc: 180.00,
        discount: 53.70,
        linkitem: 'productdetail20.html',
        wishlist: false,
        available: 35,
        cate: 'Dining Chairs'
    },
    {
        id: 21,
        image: "img/products/21/anhchinh.jpg",
        color: 'Beige',
        name: "Bel Air Thelma",
        deliverytime: 3,
        inCart: 0,
        pricegoc: 220.00,
        discount: 65.70,
        price: 154.30,
        linkitem: 'productdetail21.html',
        wishlist: false,
        available: 35,
        cate: 'Office Chairs'
    },
    {
        id: 22,
        image: "img/products/22/anhchinh.jpg",
        color: 'Beige',
        name: "Bel Air Lule 2",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 199.00,
        discount: 0.00,
        price: 199.00,
        linkitem: 'productdetail22.html',
        wishlist: false,
        available: 40,
        cate: 'Office Chairs'
    },
    {
        id: 23,
        image: "img/products/23/anhchinh.jpg",
        color: 'Brown',
        name: "Bel Air Revy",
        deliverytime: 3,
        inCart: 0,
        pricegoc: 109.00,
        discount: 0.00,
        price: 109.00,
        linkitem: 'productdetail23.html',
        wishlist: false,
        available: 15,
        cate: 'Office Chairs'
    },
    {
        id: 24,
        image: "img/products/24/anhchinh.jpg",
        color: 'Pink',
        name: "Bergen Margot",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 249.00,
        discount: 0.00,
        price: 249.00,
        linkitem: 'productdetail24.html',
        wishlist: false,
        available: 16,
        cate: 'Office Chairs'
    },
    {
        id: 25,
        image: "img/products/25/anhchinh.jpg",
        color: 'Green',
        name: "Bergen Swinton",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 199.00,
        discount: 0.00,
        price: 199.00,
        linkitem: 'productdetail25.html',
        wishlist: false,
        available: 30,
        cate: 'Office Chairs'
    },
    {
        id: 26,
        image: "img/products/26/anhchinh.jpg",
        color: 'Gray',
        name: "Bartlett Lyra",
        deliverytime: 7,
        inCart: 0,
        pricegoc: 499.00,
        discount: 184.70,
        price: 314.30,
        linkitem: 'productdetail26.html',
        wishlist: false,
        available: 13,
        cate: 'Kids Chairs'
    },
    {
        id: 27,
        image: "img/products/27/anhchinh.jpg",
        color: 'Blue & Beige',
        name: "Bartlett Lyra Garden",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 179.00,
        discount: 53.70,
        price: 125.30,
        linkitem: 'productdetail27.html',
        wishlist: false,
        available: 5,
        cate: 'Kids Chairs'
    },
    {
        id: 28,
        image: "img/products/28/anhchinh.jpg",
        color: 'Gray',
        name: "Bartlett Nardi",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 399.00,
        price: 279.30,
        discount: 119.70,
        linkitem: 'productdetail28.html',
        wishlist: false,
        available: 15,
        cate: 'Kids Chairs'
    },
    {
        id: 29,
        image: "img/products/29/anhchinh.jpg",
        color: 'Beige',
        name: "Bartlett Topa",
        deliverytime: 7,
        inCart: 0,
        price: 229.00,
        pricegoc: 229.00,
        discount: 0.00,
        linkitem: 'productdetail29.html',
        wishlist: false,
        available: 55,
        cate: 'Kids Chairs'
    },
    {
        id: 30,
        image: "img/products/30/anhchinh.jpg",
        color: 'Beige',
        name: "Bartlett Swara",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 229.00,
        discount: 0.00,
        price: 229.00,
        linkitem: 'productdetail30.html',
        wishlist: false,
        available: 13,
        cate: 'Kids Chairs'
    },
    {
        id: 31,
        image: "img/products/1/color1.jpg",
        linkitem: 'productdetail01.html',
        color: 'Green',
        name: "Bergen Miro",
        wishlist: false,
        price: 279.30,
        pricegoc: 399.00,
        discount: 119.70,
        deliverytime: 5,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 32,
        name: "Bergen Kubrick",
        color: 'Yellow',
        image: "img/products/2/color1.jpg",
        linkitem: 'productdetail02.html',
        wishlist: false,
        deliverytime: 5,
        price: 349.30,
        pricegoc: 499.00,
        discount: 149.70,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 33,
        name: "Bergen Sete",
        color: 'Green',
        image: "img/products/3/color1.jpg",
        linkitem: 'productdetail03.html',
        wishlist: false,
        deliverytime: 5,
        price: 599.00,
        pricegoc: 599.00,
        discount: 0.00,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 34,
        name: "Bergen Shona",
        color: 'Beige',
        wishlist: false,
        image: "img/products/4/color1.jpg",
        linkitem: 'productdetail04.html',
        deliverytime: 5,
        price: 209.30,
        pricegoc: 299.00,
        discount: 89.70,
        inCart: 0,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 37,
        image: "img/products/7/color1.jpg",
        color: 'Beige',
        wishlist: false,
        name: "Bel Air Swinton",
        linkitem: 'productdetail07.html',
        deliverytime: 5,
        inCart: 0,
        pricegoc: 149.00,
        discount: 44.70,
        price: 104.30,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 38,
        image: "img/products/8/color1.jpg",
        wishlist: false,
        color: 'Gray',
        name: "Bel Air Orson",
        linkitem: 'productdetail08.html',
        deliverytime: 7,
        inCart: 0,
        pricegoc: 1049.00,
        discount: 314.70,
        price: 734.30,
        available: 28,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 39,
        image: "img/products/9/color1.jpg",
        linkitem: 'productdetail09.html',
        color: 'Gray',
        wishlist: false,
        name: "Bel Air Branagh",
        deliverytime: 7,
        inCart: 0,
        price: 734.30,
        pricegoc: 1049.00,
        discount: 314.70,
        available: 35,
        cate: 'Sofas & Armchairs'
    },
    {
        id: 41,
        image: "img/products/11/color1.jpg",
        name: "Bartlett Assim",
        color: 'Green',
        deliverytime: 5,
        inCart: 0,
        price: 329.00,
        pricegoc: 329.00,
        discount: 0.00,
        linkitem: 'productdetail11.html',
        wishlist: false,
        available: 46,
        cate: 'Banquette'
    },
    {
        id: 43,
        image: "img/products/13/color1.jpg",
        name: "Bartlett Asare 2",
        color: 'Pink',
        deliverytime: 5,
        inCart: 0,
        price: 104.30,
        pricegoc: 149.00,
        discount: 44.70,
        linkitem: 'productdetail13.html',
        wishlist: false,
        available: 19,
        cate: 'Banquette'
    },
    {
        id: 44,
        image: "img/products/14/color1.jpg",
        color: 'Green',
        name: "Bartlett Asare",
        deliverytime: 5,
        inCart: 0,
        price: 199.00,
        pricegoc: 199.00,
        discount: 0.00,
        linkitem: 'productdetail14.html',
        wishlist: false,
        available: 26,
        cate: 'Banquette'
    },
    {
        id: 46,
        image: "img/products/16/color1.jpg",
        color: 'Blue',
        name: "Bergen Abbon",
        deliverytime: 5,
        inCart: 0,
        price: 399.00,
        pricegoc: 399.00,
        discount: 0.00,
        linkitem: 'productdetail16.html',
        wishlist: false,
        available: 44,
        cate: 'Dining Chairs'
    },
    {
        id: 48,
        image: "img/products/18/color1.jpg",
        name: "Bergen Kalaspel",
        color: 'Blue',
        deliverytime: 5,
        inCart: 0,
        price: 114.50,
        pricegoc: 229.00,
        discount: 114.50,
        linkitem: 'productdetail18.html',
        wishlist: false,
        available: 30,
        cate: 'Dining Chairs'
    },
    {
        id: 49,
        image: "img/products/19/color1.jpg",
        color: 'Beige',
        name: "Bergen Deon",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 99.00,
        price: 69.30,
        discount: 29.70,
        linkitem: 'productdetail19.html',
        wishlist: false,
        available: 26,
        cate: 'Dining Chairs'
    },
    {
        id: 50,
        image: "img/products/20/color1.jpg",
        color: 'Yellow',
        name: "Bel Air Rhye",
        deliverytime: 5,
        inCart: 0,
        price: 126.30,
        pricegoc: 180.00,
        discount: 53.70,
        linkitem: 'productdetail20.html',
        wishlist: false,
        available: 35,
        cate: 'Dining Chairs'
    },
    {
        id: 51,
        image: "img/products/21/color1.jpg",
        color: 'Gray',
        name: "Bel Air Thelma",
        deliverytime: 3,
        inCart: 0,
        pricegoc: 220.00,
        discount: 65.70,
        price: 154.30,
        linkitem: 'productdetail21.html',
        wishlist: false,
        available: 35,
        cate: 'Office Chairs'
    },
    {
        id: 52,
        image: "img/products/22/color1.jpg",
        color: 'Green',
        name: "Bel Air Lule 2",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 199.00,
        discount: 0.00,
        price: 199.00,
        linkitem: 'productdetail22.html',
        wishlist: false,
        available: 40,
        cate: 'Office Chairs'
    },
    {
        id: 53,
        image: "img/products/23/color1.jpg",
        color: 'Blue',
        name: "Bel Air Revy",
        deliverytime: 3,
        inCart: 0,
        pricegoc: 109.00,
        discount: 0.00,
        price: 109.00,
        linkitem: 'productdetail23.html',
        wishlist: false,
        available: 15,
        cate: 'Office Chairs'
    },
    {
        id: 55,
        image: "img/products/25/color1.jpg",
        color: 'Beige',
        name: "Bergen Swinton",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 199.00,
        discount: 0.00,
        price: 199.00,
        linkitem: 'productdetail25.html',
        wishlist: false,
        available: 30,
        cate: 'Office Chairs'
    },
    {
        id: 56,
        image: "img/products/26/color1.jpg",
        color: 'Blue',
        name: "Bartlett Lyra",
        deliverytime: 7,
        inCart: 0,
        pricegoc: 499.00,
        discount: 184.70,
        price: 314.30,
        linkitem: 'productdetail26.html',
        wishlist: false,
        available: 13,
        cate: 'Kids Chairs'
    },
    {
        id: 57,
        image: "img/products/27/color1.jpg",
        color: 'Gray',
        name: "Bartlett Lyra Garden",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 179.00,
        discount: 53.70,
        price: 125.30,
        linkitem: 'productdetail27.html',
        wishlist: false,
        available: 5,
        cate: 'Kids Chairs'
    },
    {
        id: 58,
        image: "img/products/28/color1.jpg",
        color: 'Beige',
        name: "Bartlett Nardi",
        deliverytime: 5,
        inCart: 0,
        pricegoc: 399.00,
        price: 279.30,
        discount: 119.70,
        linkitem: 'productdetail28.html',
        wishlist: false,
        available: 15,
        cate: 'Kids Chairs'
    },
    {
        id: 59,
        image: "img/products/29/color1.jpg",
        color: 'Gray',
        name: "Bartlett Topa",
        deliverytime: 7,
        inCart: 0,
        price: 229.00,
        pricegoc: 229.00,
        discount: 0.00,
        linkitem: 'productdetail29.html',
        wishlist: false,
        available: 55,
        cate: 'Kids Chairs'
    }
];

//Product Detail
let cart1 = document.querySelectorAll('.add-cart1'); let cart2 = document.querySelectorAll('.add-cart2')
let cart3 = document.querySelectorAll('.add-cart3'); let cart4 = document.querySelectorAll('.add-cart4')
let cart5 = document.querySelectorAll('.add-cart5'); let cart6 = document.querySelectorAll('.add-cart6')
let cart7 = document.querySelectorAll('.add-cart7'); let cart8 = document.querySelectorAll('.add-cart8')
let cart9 = document.querySelectorAll('.add-cart9'); let cart10 = document.querySelectorAll('.add-cart10')
let cart11 = document.querySelectorAll('.add-cart11'); let cart12 = document.querySelectorAll('.add-cart12')
let cart13 = document.querySelectorAll('.add-cart13'); let cart14 = document.querySelectorAll('.add-cart14')
let cart15 = document.querySelectorAll('.add-cart15'); let cart16 = document.querySelectorAll('.add-cart16')
let cart17 = document.querySelectorAll('.add-cart17'); let cart18 = document.querySelectorAll('.add-cart18')
let cart19 = document.querySelectorAll('.add-cart19'); let cart20 = document.querySelectorAll('.add-cart20')
let cart21 = document.querySelectorAll('.add-cart21'); let cart22 = document.querySelectorAll('.add-cart22')
let cart23 = document.querySelectorAll('.add-cart23'); let cart24 = document.querySelectorAll('.add-cart24')
let cart25 = document.querySelectorAll('.add-cart25'); let cart26 = document.querySelectorAll('.add-cart26')
let cart27 = document.querySelectorAll('.add-cart27'); let cart28 = document.querySelectorAll('.add-cart28')
let cart29 = document.querySelectorAll('.add-cart29'); let cart30 = document.querySelectorAll('.add-cart30')
let cartdetail = document.querySelectorAll('.add-cart-detail1'); let product1 = [products[0], products[30]]
let cartdetail2 = document.querySelectorAll('.add-cart-detail2'); let product2 = [products[1], products[31]]
let cartdetail3 = document.querySelectorAll('.add-cart-detail3'); let product3 = [products[2], products[32]]
let cartdetail4 = document.querySelectorAll('.add-cart-detail4'); let product4 = [products[3], products[33]]
let cartdetail5 = document.querySelectorAll('.add-cart-detail5'); let product5 = [products[4]]
let cartdetail6 = document.querySelectorAll('.add-cart-detail6'); let product6 = [products[5]]
let cartdetail7 = document.querySelectorAll('.add-cart-detail7'); let product7 = [products[6], products[34]]
let cartdetail8 = document.querySelectorAll('.add-cart-detail8'); let product8 = [products[7], products[35]]
let cartdetail9 = document.querySelectorAll('.add-cart-detail9'); let product9 = [products[8], products[36]]
let cartdetail10 = document.querySelectorAll('.add-cart-detail10'); let product10 = [products[9]]
let cartdetail11 = document.querySelectorAll('.add-cart-detail11'); let product11 = [products[10], products[37]]
let cartdetail12 = document.querySelectorAll('.add-cart-detail12'); let product12 = [products[11]]
let cartdetail13 = document.querySelectorAll('.add-cart-detail13'); let product13 = [products[12], products[38]]
let cartdetail14 = document.querySelectorAll('.add-cart-detail14'); let product14 = [products[13], products[39]]
let cartdetail15 = document.querySelectorAll('.add-cart-detail15'); let product15 = [products[14]]
let cartdetail16 = document.querySelectorAll('.add-cart-detail16'); let product16 = [products[15], products[40]]
let cartdetail17 = document.querySelectorAll('.add-cart-detail17'); let product17 = [products[16]]
let cartdetail18 = document.querySelectorAll('.add-cart-detail18'); let product18 = [products[17], products[41]]
let cartdetail19 = document.querySelectorAll('.add-cart-detail19'); let product19 = [products[18], products[42]]
let cartdetail20 = document.querySelectorAll('.add-cart-detail20'); let product20 = [products[19], products[43]]
let cartdetail21 = document.querySelectorAll('.add-cart-detail21'); let product21 = [products[20], products[44]]
let cartdetail22 = document.querySelectorAll('.add-cart-detail22'); let product22 = [products[21], products[45]]
let cartdetail23 = document.querySelectorAll('.add-cart-detail23'); let product23 = [products[22], products[46]]
let cartdetail24 = document.querySelectorAll('.add-cart-detail24'); let product24 = [products[23]]
let cartdetail25 = document.querySelectorAll('.add-cart-detail25'); let product25 = [products[24], products[47]]
let cartdetail26 = document.querySelectorAll('.add-cart-detail26'); let product26 = [products[25], products[48]]
let cartdetail27 = document.querySelectorAll('.add-cart-detail27'); let product27 = [products[26], products[49]]
let cartdetail28 = document.querySelectorAll('.add-cart-detail28'); let product28 = [products[27], products[50]]
let cartdetail29 = document.querySelectorAll('.add-cart-detail29'); let product29 = [products[28], products[51]]
let cartdetail30 = document.querySelectorAll('.add-cart-detail30'); let product30 = [products[29]]
let cartbeige1 = document.querySelectorAll('.add-cart-beige1'); let productsbeige1 = [products[2],products[33], products[35], products[9], products[10],products[12], products[16], products[42],products[20]]
let cartbeige2 = document.querySelectorAll('.add-cart-beige2'); let productsbeige2 = [products[21], products[47], products[50], products[28]]
let cartblue = document.querySelectorAll('.add-cart-blue'); let productsblue = [products[4],products[40],products[41],products[46],products[48],products[26]]
let cartgray1 = document.querySelectorAll('.add-cart-gray1'); let productsgray1 = [products[0],products[5],products[6],products[35],products[36],products[11],products[18],products[44],products[25]]
let cartgray2 = document.querySelectorAll('.add-cart-gray2'); let productsgray2 = [products[49],products[27],products[51],products[29]]
let cartgreen1 = document.querySelectorAll('.add-cart-green1'); let productsgreen1 = [products[30], products[32],products[3],products[7],products[8],products[37],products[39],products[14],products[19]]
let cartgreen2 = document.querySelectorAll('.add-cart-green2'); let productsgreen2 = [products[45],products[24]]
let cartpink = document.querySelectorAll('.add-cart-pink'); let productspink = [products[1],products[38],products[13],products[23]]
let cartyellow = document.querySelectorAll('.add-cart-yellow'); let productsyellow = [products[31],products[15],products[17],products[43],products[22]]

function init(array, arrayproducts){
    for(let i = 0; i<array.length; i++){
        array[i].addEventListener('click', () => {
            cartNumbersAction(arrayproducts[i]);
            showPopup(arrayproducts[i], 1);
            totalCost(arrayproducts[i]);
            totalDiscount(arrayproducts[i]);
            shippingFee();
            displayCartHover();
            onLoadCartNumbers();
        })
    }
}

function initdetail(array, arrayproducts){
    for(let i = 0; i<array.length; i++){
        array[i].addEventListener('click', () => {
            if(i===0){
                let qty = document.querySelector("#qty-detail").value;
                if(checkInputValue(parseFloat(qty)) == true){
                    updateCartNumber(arrayproducts[i], parseInt(qty));
                    totalCostDetail(arrayproducts[i], parseInt(qty));
                    totalDiscountDetail(arrayproducts[i], parseInt(qty));
                    shippingFee();
                    showPopup(arrayproducts[i], parseInt(qty));
                    displayCartHover();
                    onLoadCartNumbers();
                }
                else {
                    array[i].disabled = true;
                }
            }
            if(i===1){
                let qty = document.querySelector("#qty-detail-2").value;
                if(checkInputValue(parseFloat(qty)) == true){
                    updateCartNumber(arrayproducts[i], parseInt(qty));
                    totalCostDetail(arrayproducts[i], parseInt(qty));
                    totalDiscountDetail(arrayproducts[i], parseInt(qty));
                    shippingFee();
                    showPopup(arrayproducts[i], parseInt(qty));
                    displayCartHover();
                    onLoadCartNumbers();
                }
                else {
                    array[i].disabled = true;
                }
            }
        })
    }
}

init(cart1,product1);init(cart2,product2);init(cart3,product3);init(cart4,product4);init(cart5,product5);
init(cart6,product6);init(cart7,product7);init(cart8,product8);init(cart9,product9);init(cart10,product10);
init(cart11,product11);init(cart12,product12);init(cart13,product13);init(cart14,product14);init(cart15,product15)
init(cart16,product16);init(cart17,product17);init(cart18,product18);init(cart19,product19);init(cart20,product20)
init(cart21,product21);init(cart22,product22);init(cart23,product23);init(cart24,product24);init(cart25,product25)
init(cart26,product26);init(cart27,product27);init(cart28,product28);init(cart29,product29);init(cart30,product30)
init(cartbeige1,productsbeige1); init(cartbeige2,productsbeige2); init(cartblue,productsblue); init(cartgray1,productsgray1)
init(cartgray2,productsgray2); init(cartgreen1,productsgreen1); init(cartgreen2,productsgreen2); init(cartpink,productspink)
init(cartyellow,productsyellow)

initdetail(cartdetail,product1); initdetail(cartdetail2, product2); initdetail(cartdetail3, product3); initdetail(cartdetail4, product4); initdetail(cartdetail5, product5);
initdetail(cartdetail6, product6); initdetail(cartdetail7, product7); initdetail(cartdetail8, product8); initdetail(cartdetail9, product9); initdetail(cartdetail10, product10);
initdetail(cartdetail11, product11); initdetail(cartdetail12, product12); initdetail(cartdetail13, product13); initdetail(cartdetail14, product14); initdetail(cartdetail15, product15);
initdetail(cartdetail16, product16); initdetail(cartdetail17, product17); initdetail(cartdetail18, product18); initdetail(cartdetail19, product19); initdetail(cartdetail20, product20);
initdetail(cartdetail21, product21); initdetail(cartdetail22, product22); initdetail(cartdetail23, product23); initdetail(cartdetail24, product24); initdetail(cartdetail25, product25);
initdetail(cartdetail26, product26); initdetail(cartdetail27, product27); initdetail(cartdetail28, product28); initdetail(cartdetail29, product29); initdetail(cartdetail30, product30);

function checkInputValue(x){
    if(Number.isInteger(x)===false || x<=0 || x == ''){
        return false;
    }
    else {
        return true;
    }
}
function showPopup(product, quantity){
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
                   <h6>${product.name} has been added to your <span><a href = "cart.html">cart</a></span>.</h6>
                   <p>Color: ${product.color}</p>
                   <p>Quantity: ${quantity}</p>
               </div>
               <div class = "col-lg-1">
                   <button class = "close float-right" onclick = "closePopup()">&times;</button>
               </div>
       </div></div>
   `;
        setTimeout(closePopup, 4000);
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
                   <h6>${product.name} has been added to your <span><a href = "cart.html">cart</a></span>.</h6>
                   <p>Color: ${product.color}</p>
                   <p>Quantity: ${quantity}</p>
               </div>
               <div class = "col-lg-1">
                   <button class = "close float-right" onclick = "closePopup()">&times;</button>
               </div>
       </div></div>
   `;
        setTimeout(closePopup, 4000);
    }
}
function closePopup(){
    let noti = document.querySelector('.notification-toast');
    if(noti.style.display === "block"){
        noti.classList.remove("animate__fadeInLeft");
        noti.classList.add("animate__fadeOutLeft");
    }
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart-icon span').textContent = productNumbers;
        document.querySelector('.cart-icon-1 span').textContent = productNumbers;
    }
}
function updateCartNumber(product, quantity){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers == undefined){
        localStorage.setItem("cartNumbers", (quantity).toString());
        document.querySelector('.cart-icon span').textContent = (quantity).toString();
    }
    else {
        localStorage.setItem("cartNumbers", (parseInt(productNumbers) + quantity).toString());
    }
    setItemsUpdate(product, quantity);
}
function setItemsUpdate(product, quantity){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var cartIds = localStorage.getItem("cartIds");
    cartIds = JSON.parse(cartIds);

    if(cartItems != null){
        let currentProduct = product.id;
        if( cartItems[currentProduct] == undefined && cartIds.indexOf(product.id)<0) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            };
            cartIds.push(product.id)
        }
        cartItems[currentProduct].inCart += quantity;
    }
    else {
        product.inCart = quantity;
        cartItems = {
            [product.id]: product
        };
        cartIds = [product.id];
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("productsInCartClone", JSON.stringify(cartItems));
    localStorage.setItem("cartIds", JSON.stringify(cartIds));
    console.log('qty',quantity);
    console.log('inCart: ', product.inCart);
}

function cartNumbersAction(product, action){
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(action) {
        localStorage.setItem("cartNumbers", (productNumbers - 1).toString());
        document.querySelector('.cart-icon span').textContent = (productNumbers - 1).toString();
    } else if(productNumbers) {
        localStorage.setItem("cartNumbers", (productNumbers + 1).toString());
        document.querySelector('.cart-icon span').textContent = (productNumbers + 1).toString();
    } else {
        localStorage.setItem("cartNumbers", (1).toString());
        document.querySelector('.cart-icon span').textContent = (1).toString();
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var cartIds = localStorage.getItem("cartIds");
    cartIds = JSON.parse(cartIds);

    if(cartItems != null){
        let currentProduct = product.id;

        if( cartItems[currentProduct] == undefined && cartIds.indexOf(product.id)<0) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
            cartIds.push(product.id)
        }
        cartItems[currentProduct].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product
        };
        cartIds = [product.id];
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("productsInCartClone", JSON.stringify(cartItems));
    localStorage.setItem("cartIds", JSON.stringify(cartIds));
}
function totalCost(product, action){
    let cart = localStorage.getItem("totalCost");
    if(action) {
        cart = parseFloat(cart);
        localStorage.setItem("totalCost", ((cart - product.price).toFixed(2)).toString());
        localStorage.setItem("totalCostClone", ((cart - product.price).toFixed(2)).toString());
    } else if(cart != null) {
        cart = parseFloat(cart);
        localStorage.setItem("totalCost", ((cart + product.price).toFixed(2)).toString());
        localStorage.setItem("totalCostClone", ((cart + product.price).toFixed(2)).toString());
    } else {
        localStorage.setItem("totalCost", ((product.price).toFixed(2)).toString());
        localStorage.setItem("totalCostClone", ((product.price).toFixed(2)).toString());
    }
}

function totalDiscount(product, action){
    let cartCostDiscount = localStorage.getItem("totalCostDiscount");
    if(action) {
        cartCostDiscount = parseFloat(cartCostDiscount);
        localStorage.setItem("totalCostDiscount", ((cartCostDiscount - product.discount).toFixed(2)).toString());
        localStorage.setItem("totalCostDiscountClone", ((cartCostDiscount - product.discount).toFixed(2)).toString());
    } else if(cartCostDiscount != null) {
        cartCostDiscount = parseFloat(cartCostDiscount);
        localStorage.setItem("totalCostDiscount", ((cartCostDiscount + product.discount).toFixed(2)).toString());
        localStorage.setItem("totalCostDiscountClone", ((cartCostDiscount + product.discount).toFixed(2)).toString());
    } else {
        localStorage.setItem("totalCostDiscount", ((product.discount).toFixed(2)).toString());
        localStorage.setItem("totalCostDiscountClone", ((product.discount).toFixed(2)).toString());
    }
}

function shippingFee() {
    let cartCost = parseFloat(localStorage.getItem('totalCost'));
    if (cartCost > 750 || cartCost === 0) {
        localStorage.setItem("shipfee", ((0.00).toFixed(2)).toString());
        localStorage.setItem("shipfeeClone", ((0.00).toFixed(2)).toString());
    } else {
        localStorage.setItem("shipfee", ((35.00).toFixed(2)).toString());
        localStorage.setItem("shipfeeClone", ((35.00).toFixed(2)).toString());
    }
}

function totalCostDetail(product, quantity){
    let cart = localStorage.getItem("totalCost");
    if(cart != null) {
        cart = parseFloat(cart);
        localStorage.setItem("totalCost", ((cart + product.price * quantity).toFixed(2)).toString());
        localStorage.setItem("totalCostClone", ((cart + product.price * quantity).toFixed(2)).toString());
    } else {
        localStorage.setItem("totalCost", ((product.price * quantity).toFixed(2)).toString());
        localStorage.setItem("totalCostClone", ((product.price * quantity).toFixed(2)).toString());
    }
}

function totalDiscountDetail(product, quantity){
    let cartCostDiscount = localStorage.getItem("totalCostDiscount");
    if(cartCostDiscount != null) {
        cartCostDiscount = parseFloat(cartCostDiscount);
        localStorage.setItem("totalCostDiscount", ((cartCostDiscount + product.discount * quantity).toFixed(2)).toString());
        localStorage.setItem("totalCostDiscountClone", ((cartCostDiscount + product.discount * quantity).toFixed(2)).toString());
    } else {
        localStorage.setItem("totalCostDiscount", ((product.discount * quantity).toFixed(2)).toString());
        localStorage.setItem("totalCostDiscountClone", ((product.discount * quantity).toFixed(2)).toString());
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    let shipfee = parseFloat(localStorage.getItem('shipfee'));
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartCost = parseFloat(localStorage.getItem('totalCost'));
    let cartCostDiscount = parseFloat(localStorage.getItem('totalCostDiscount'));
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item,index) =>{
            productContainer.innerHTML += `
              <div class = "row product-item">
                   <div class = "col-lg-5 col-product">
                       <div class = "row">
                           <div class = "col-lg-3"><img src = "${item.image}" width = 100px></div>
                           <div class = "col-lg-9">
                               <h6><a href = "${item.linkitem}">${item.name}</a></h6>
                               <p>Product ID: #<span>${item.id}</span>. &nbsp;&nbsp;Color: ${item.color}</p>
                               <p>Estimated delivery within ${item.deliverytime} working days</p>
                               <p><div class = "product"><button class = "removeCart">Remove</button></div></p>
                           </div>
                       </div>
                   </div>
                   <div class = "col-lg-3 col-qty">
                       <div class="quantity">
                               <div class="quantity-cart">
                                       <span class="decrease">-</span>
                                       <input type="text" value="${item.inCart}" onblur = "typeInput()">
                                       <span class="increase">+</span>
                               </div>
                       </div>
                   </div>
                   <div class = "col-lg-1 col-price"><h6>$${(item.pricegoc).toFixed(2)}</h6></div>
                   <div class = "col-lg-2 col-discount"><h6>$${(item.discount).toFixed(2)}</h6></div>
                   <div class = "col-lg-1 col-total"><h6>$${(item.price * item.inCart).toFixed(2)}</h6></div>
              </div>
          `;
        });
        productContainer.innerHTML += `
           <div class = "row footer-cart">
               <div class = "col-lg-6 order-1 order-lg-1 shipfee">
                   <div class = "row row-ship">
                       <div class = "col-lg-8">
                           <h6>Shipping fee</h6>
                           <p>Free shipping for orders above $750.00</p>
                       </div>
                       <div class = "col-lg-4">
                           <h6>$${(shipfee.toFixed(2).toString())}</h6>
                       </div>
                   </div>   
               </div>
               <div class = "col-lg-6 order-2 order-lg-2 summary">
                   <div class = "row">
                       <div class = "col-lg-8 offset-lg-2 total-text">
                           <h6>Number of items</h6>
                           <h6>Discount</h6>
                           <h6>Subtotal</h6>
                       </div>
                       <div class = "col-lg-2 total">
                           <h6>${(cartNumbers).toString()}</h6>
                           <h6>$${((cartCostDiscount).toFixed(2)).toString()}</h6>
                           <h6 style = "color: crimson">$${((cartCost).toFixed(2)).toString()}</h6>
                       </div>
                   </div>
               </div>
           </div>
           <div class="row row-btn">
               <div class="col-lg-6 btn-left">
                   <button class = "backtoshop"><a href = "products1.html">BACK TO SHOPPING</a></button>
               </div>
               <div class="col-lg-6 btn-right">
                   <button type="button" class = "checkout" onclick="return cartcheck()">CHECK OUT</button>
                   <div id="cartcheckError"></div>
               </div>
           </div>
       `;
        deleteButtons();
        manageQuantity();
    }}
function displayTableSummary(){
    let tableSummary = document.querySelector('.table-total');
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = parseFloat(localStorage.getItem('totalCost'));
    let shipfee = parseFloat(localStorage.getItem('shipfee'));
    var promo = localStorage.getItem("promo"); var discountCoupon = localStorage.getItem("discountCoupon");
    if(cartItems && tableSummary){
        tableSummary.innerHTML = '';
        Object.values(cartItems).map(item=>{
            tableSummary.innerHTML += `
               <tr>
                   <td><img src = "${item.image}" width = 80px></td>
                   <td>
                       <h6>${item.name}</h6>
                       <p>Quantity: ${item.inCart}</p>
                   </td>
                   <td>
                       <h6>$${(item.price * item.inCart).toFixed(2)}</h6>
                   </td>
               </tr>
               `;
        })
        tableSummary.innerHTML += `
           <tr>
               <td colspan="2"><h6>Subtotal</h6></td>
               <td>
                   <h6>$${((cartCost).toFixed(2)).toString()}</h6>
               </td>
           </tr>
           <tr>
               <td colspan="2"><h6>Shipping</h6></td>
               <td>
                   <h6>$${((shipfee).toFixed(2)).toString()}</h6>
               </td>
           </tr>
           <tr>
               <td colspan="2"><h6>Total</h6></td>
               <td><h6 style = "color: crimson">$${((cartCost + shipfee).toFixed(2)).toString()}</h6></td>
           </tr>
           `;
    }
    if(promo && discountCoupon){
        tableSummary.innerHTML = '';
        Object.values(cartItems).map(item=>{
            tableSummary.innerHTML += `
               <tr>
                   <td><img src = "${item.image}" width = 80px></td>
                   <td>
                       <h6>${item.name}</h6>
                       <p>Quantity: ${item.inCart}</p>
                   </td>
                   <td>
                       <h6>$${(item.price * item.inCart).toFixed(2)}</h6>
                   </td>
               </tr>
               `;
        })
        tableSummary.innerHTML += `
           <tr>
               <td colspan="2"><h6>Subtotal</h6></td>
               <td>
                   <h6>$${((cartCost + parseFloat(discountCoupon)).toFixed(2)).toString()}</h6>
               </td>
           </tr>
           <tr>
               <td colspan="2"><h6>Coupon discount</h6></td>
               <td>
                   <h6>$${((parseFloat(discountCoupon)).toFixed(2)).toString()}</h6>
               </td>
           </tr>
           <tr>
               <td colspan="2"><h6>Shipping</h6></td>
               <td>
                   <h6>$${((shipfee).toFixed(2)).toString()}</h6>
               </td>
           </tr>
           <tr>
               <td colspan="2"><h6>Total</h6></td>
               <td><h6 style = "color: crimson">$${((cartCost + shipfee).toFixed(2)).toString()}</h6></td>
           </tr>
           `;
    }}
function displayCartHover(){
    let cartHoverTable = document.querySelector('.cart-hover-items');
    let cartCost = parseFloat(localStorage.getItem('totalCost'));
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if(cartItems && cartHoverTable){
        cartHoverTable.innerHTML = '';
        Object.values(cartItems).map(item=>{
            cartHoverTable.innerHTML += `
                         <div class = "row">
                           <div class = "col-lg-3 si-pic"><img src = "${item.image}" alt=""></div>
                           <div class = "col-lg-6 si-text">
                               <div class = "product-selected">
                                   <p>$${(item.price)} x ${item.inCart}</p>
                                   <h6><a href = "${item.linkitem}">${item.name}</a></h6>
                                </div>
                           </div>
                           <div class = "col-lg-3 si-close">
                                <p>ID: <span>${item.id}</span></p>
                                <div class = "product"><button class = "removeCartHover"><i class="icon_close"></i></button></div>
                           </div>
                         </div>
               `;
        });
        cartHoverTable.innerHTML += `
       <div class = "select-total">
           <span>Total</span>
           <h5>$${(cartCost).toFixed(2)}</h5>
       </div>
       <div class = "select-button">
           <a href = "cart.html" class = "primary-btn view-card">VIEW CART
               </a>
           <a onclick="return cartcheck1()" class = "primary-btn checkout-card">CHECK OUT</a>
           <div class="row">
               <div class="col-lg-6 checkoutbtn-left">
                   <div id="cartcheckError1"></div>
               </div>
               <div class="col-lg-6 checkoutbtn-right">
                   <div id="go-shopping"></div>
               </div>
           </div>
       </div>
       `;
        deleteButtonsHover();
    }
}
function displayTableSuccess(){
    let tableSuccess = document.querySelector('.table-success');
    let tableOrder = document.querySelectorAll('.order-summary');

    let cartItemsClone = localStorage.getItem("productsInCartClone");
    cartItemsClone = JSON.parse(cartItemsClone);
    let totalCostClone = localStorage.getItem("totalCostClone");
    let totalCostDiscountClone = localStorage.getItem("totalCostDiscountClone");
    let shipfeeClone = localStorage.getItem("shipfeeClone");
    let discountCouponClone = localStorage.getItem("discountCouponClone");
    let promoClone = localStorage.getItem("promoClone");


    if(promoClone && discountCouponClone){
        sessionStorage.setItem('promo', (promoClone).toString()); localStorage.setItem('promo', (0).toString());
        sessionStorage.setItem('discountCoupon', (discountCouponClone).toString()); localStorage.setItem('discountCoupon', (0).toString());
        sessionStorage.setItem('productsInCart', JSON.stringify(cartItemsClone)); localStorage.setItem('productsInCart', null);
        sessionStorage.setItem('totalCost', (totalCostClone).toString()); localStorage.setItem('totalCost', (0).toString());
        sessionStorage.setItem('totalCostDiscount', (totalCostDiscountClone).toString()); localStorage.setItem('totalCostDiscount', (0).toString());
        sessionStorage.setItem('shipfee', (shipfeeClone).toString()); localStorage.setItem('shipfee', (0).toString());
        localStorage.setItem('cartNumbers', (0).toString()); localStorage.setItem('cartIds', null);
    }
    else {
        sessionStorage.setItem('discountCoupon', (0).toString()); localStorage.setItem('discountCoupon', (0).toString());
        sessionStorage.setItem('productsInCart', JSON.stringify(cartItemsClone)); localStorage.setItem('productsInCart', null);
        sessionStorage.setItem('totalCost', (totalCostClone).toString()); localStorage.setItem('totalCost', (0).toString());
        sessionStorage.setItem('totalCostDiscount', (totalCostDiscountClone).toString()); localStorage.setItem('totalCostDiscount', (0).toString());
        sessionStorage.setItem('shipfee', (shipfeeClone).toString()); localStorage.setItem('shipfee', (0).toString());
        localStorage.setItem('cartNumbers', (0).toString()); localStorage.setItem('cartIds', null);
    }

    let cartItems = sessionStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = parseFloat(sessionStorage.getItem('totalCost'));
    let cartCostDiscount = parseFloat(sessionStorage.getItem('totalCostDiscount'));
    let shipfee = parseFloat(sessionStorage.getItem('shipfee'));
    let discountCoupon = parseInt(sessionStorage.getItem('discountCoupon'));
    let promo = localStorage.getItem("promo");

    if(cartItems && tableSuccess){
        tableSuccess.innerHTML = '';
        Object.values(cartItems).map(item=>{
            tableSuccess.innerHTML += `
               <div class = "row order-summary">
                   <div class = "col-lg-2">
                       <img src = "${item.image}" width = 80px>
                   </div>
                   <div class = "col-lg-5">
                       <h6>${item.name}</h6>
                       <p>The items will be shipped in about ${item.deliverytime} days</p>
                   </div>
                   <div class = "col-lg-3">
                       <p>Qty: ${item.inCart}</p>
                   </div>
                   <div class = "col-lg-2">
                       <p>$${(item.price * item.inCart).toFixed(2)}</p>
                   </div>
               </div>
               `;
        })
        tableOrder[1].innerHTML = ""; tableOrder[2].innerHTML = "";
        tableOrder[1].innerHTML += `
           <div class = "col-lg-10">
                   <p>Subtotal</p>
                   <p>Express Shipping</p>
                   <p>You have saved</p>
                   <p>Coupon discount</p>
               </div>
           <div class = "col-lg-2">
                   <p>$${(cartCost).toFixed(2)}</p>
                   <p>$${(shipfee).toFixed(2)}</p>
                   <p>$${(cartCostDiscount).toFixed(2)}</p>
                    <p>$${(discountCoupon).toFixed(2)}</p>
           </div>`;
        tableOrder[2].innerHTML += `
           <div class = "col-lg-10">
                   <h6>Total</h6>
           </div>
           <div class = "col-lg-2">
                   <h6>$${(cartCost + shipfee).toFixed(2)}</h6>
           </div>
       `
        ;
    }
    if(promo && discountCoupon){
        tableSuccess.innerHTML = '';
        Object.values(cartItems).map(item=>{
            tableSuccess.innerHTML += `
               <div class = "row order-summary">
                   <div class = "col-lg-2">
                       <img src = "${item.image}" width = 80px>
                   </div>
                   <div class = "col-lg-5">
                       <h6>${item.name}</h6>
                       <p>The items will be shipped in about ${item.deliverytime} days</p>
                   </div>
                   <div class = "col-lg-3">
                       <p>Qty: ${item.inCart}</p>
                   </div>
                   <div class = "col-lg-2">
                       <p>$${(item.price * item.inCart).toFixed(2)}</p>
                   </div>
               </div>
               `;
        })
        tableOrder[1].innerHTML = ""; tableOrder[2].innerHTML = "";
        tableOrder[1].innerHTML += `
           <div class = "col-lg-10">
                   <p>Subtotal</p>
                   <p>Express Shipping</p>
                   <p>You have saved</p>
                   <p>Coupon discount</p>
           </div>
           <div class = "col-lg-2">
                   <p>$${(cartCost + discountCoupon + cartCostDiscount).toFixed(2)}</p>
                   <p>$${(shipfee).toFixed(2)}</p>
                   <p>$${(cartCostDiscount).toFixed(2)}</p>
                   <p>$${(discountCoupon).toFixed(2)}</p>
           </div>`;
        tableOrder[2].innerHTML += `
           <div class = "col-lg-10">
                   <h6>Total</h6>
               </div>
           <div class = "col-lg-2">
                   <h6>$${(cartCost + shipfee).toFixed(2)}</h6>
           </div>
       `
        ;
    }
}
function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('input').value;
            currentProduct = decreaseButtons[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('span').textContent;

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbersAction(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                totalDiscount(cartItems[currentProduct], "decrease");
                shippingFee();
                checkOldValue(currentQuantity);
                onLoadCartNumbers();
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
                displayCart();
            }
        });
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('input').value;
            currentProduct = increaseButtons[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('span').textContent;

            cartItems[currentProduct].inCart += 1;
            cartNumbersAction(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            totalDiscount(cartItems[currentProduct]);
            shippingFee();
            onLoadCartNumbers();
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function typeInput(){
    let decreaseButtons = document.querySelectorAll('.decrease');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    for(let i=0; i < decreaseButtons.length; i++) {
        let currentQuantity = parseFloat(decreaseButtons[i].parentElement.querySelector('input').value);
        let currentProduct = decreaseButtons[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('span').textContent;
        if(currentQuantity >= 1 && Number.isInteger(currentQuantity) === true){
            let quantity = currentQuantity - parseInt(cartItems[currentProduct].inCart);
            updateCartNumber(cartItems[currentProduct], quantity);
            totalCostDetail(cartItems[currentProduct], quantity);
            totalDiscountDetail(cartItems[currentProduct], quantity);
            shippingFee();
            onLoadCartNumbers();
            cartItems[currentProduct].inCart = currentQuantity;
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
            displayCart();
        }
        else if(currentQuantity <= 0 || Number.isInteger(currentQuantity) === false || currentQuantity == ''){
            decreaseButtons[i].parentElement.querySelector('input').value = (1).toString();
            updateCartNumber(cartItems[currentProduct], -(cartItems[currentProduct].inCart - 1));
            totalCostDetail(cartItems[currentProduct], -(cartItems[currentProduct].inCart - 1));
            totalDiscount(cartItems[currentProduct], -(cartItems[currentProduct].inCart - 1));
            shippingFee();
            onLoadCartNumbers();
            cartItems[currentProduct].inCart = 1;
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
            displayCart();
        }
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.removeCart');
    let cartCost = parseFloat(localStorage.getItem("totalCost")).toFixed(2);
    let cartItems = localStorage.getItem('productsInCart');
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartCostDiscount = parseFloat(localStorage.getItem('totalCostDiscount')).toFixed(2);
    cartItems = JSON.parse(cartItems);
    let cartIds = localStorage.getItem("cartIds");
    cartIds = JSON.parse(cartIds);
    let productId;

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productId = deleteButtons[i].parentElement.parentElement.parentElement.querySelector('span').textContent;
            localStorage.setItem('cartNumbers', (cartNumbers - cartItems[productId].inCart).toString());
            localStorage.setItem('totalCost', ((cartCost - (cartItems[productId].price * cartItems[productId].inCart)).toFixed(2)).toString());
            localStorage.setItem('totalCostDiscount', ((cartCostDiscount - (cartItems[productId].discount * cartItems[productId].inCart)).toFixed(2)).toString());

            localStorage.setItem('totalCostClone', ((cartCost - (cartItems[productId].price * cartItems[productId].inCart)).toFixed(2)).toString());
            localStorage.setItem('totalCostDiscountClone', ((cartCostDiscount - (cartItems[productId].discount * cartItems[productId].inCart)).toFixed(2)).toString());
            delete cartItems[productId];
            var j = 0;
            for(var k = 0, l = cartIds.length; k<l; k++){
                if(cartIds[k] != productId){
                    cartIds[j++] = cartIds[k];
                }
            }
            cartIds.length = j;
            localStorage.setItem('cartIds', JSON.stringify(cartIds));
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
            shippingFee();
            displayCart();
            displayCartHover();
            onLoadCartNumbers();
        })
    }
}

function deleteButtonsHover() {
    let deleteButtons = document.querySelectorAll('.removeCartHover');
    let cartCost = parseFloat(localStorage.getItem("totalCost")).toFixed(2);
    let cartItems = localStorage.getItem('productsInCart');
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartCostDiscount = parseFloat(localStorage.getItem('totalCostDiscount')).toFixed(2);
    cartItems = JSON.parse(cartItems);
    let cartIds = localStorage.getItem("cartIds");
    cartIds = JSON.parse(cartIds);
    let productId;
    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productId = deleteButtons[i].parentElement.parentElement.parentElement.querySelector('span').textContent;
            localStorage.setItem('cartNumbers', (cartNumbers - cartItems[productId].inCart).toString());
            localStorage.setItem('totalCost', ((cartCost - (cartItems[productId].price * cartItems[productId].inCart)).toFixed(2)).toString());
            localStorage.setItem('totalCostDiscount', ((cartCostDiscount - (cartItems[productId].discount * cartItems[productId].inCart)).toFixed(2)).toString());

            localStorage.setItem('totalCostClone', ((cartCost - (cartItems[productId].price * cartItems[productId].inCart)).toFixed(2)).toString());
            localStorage.setItem('totalCostDiscountClone', ((cartCostDiscount - (cartItems[productId].discount * cartItems[productId].inCart)).toFixed(2)).toString());
            delete cartItems[productId];
            var j = 0;
            for(var k = 0, l = cartIds.length; k<l; k++){
                if(cartIds[k] != productId){
                    cartIds[j++] = cartIds[k];
                }
            }
            cartIds.length = j;
            localStorage.setItem('cartIds', JSON.stringify(cartIds));
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('productsInCartClone', JSON.stringify(cartItems));
            shippingFee();
            displayCart();
            displayCartHover();
            onLoadCartNumbers();
            setTimeout(()=>{window.location.reload()},2000);
        })
    }
    $("#preloader").addClass('hide');
}
function localStoragecheck() {
    var cartNumbers = localStorage.getItem('cartNumbers');
    var wishlistNumbers = localStorage.getItem('wishlistNumber');
    var rfc = localStorage.getItem('rfc');
    if(rfc==undefined){
        if(parseInt(cartNumbers) === 0 || cartNumbers === undefined){
            if (parseInt(wishlistNumbers) === 0 || wishlistNumbers === undefined)
            {
                localStorage.clear();
            }
            localStorage.removeItem('totalCost');
            localStorage.removeItem('productIds');
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('shipfee');
            localStorage.removeItem('cartIds');
        }
    }
}
onLoadCartNumbers();
displayCart();
displayTableSummary();
displayCartHover();
localStoragecheck();
