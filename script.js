let categories = ['clothes','sport','computers','phones'];
let subcategories = {
    clothes : ['t-shirt', 'pant', 'men\'s jacket'],
    sport : ['ball', 'football uniform', 'football boots'],
    computers : ['ASUS Zenbook', 'Lenovo IdeaPad', 'Apple MacBook Pro'],
    phones : ['Asus Zenfone 8', 'Lenovo K14 Plus', 'iPhone 13 Pro']
};

let $categories = document.getElementById('category');
let $subcategories = document.getElementById('subcategory');
let $products = document.getElementById('product');
let $congratBox = document.getElementById('congrat_box');
let subcategoryItemArray = [];
addElements(categories,$categories,'category','category_item');

let categoriesElementArray = Array.from(document.getElementsByClassName('category_item'));
categoriesElementArray.forEach(function (e) {
    e.addEventListener('click',function(e){
        let categoryName = e.target.dataset.category;
        let categoryItems = Array.from(subcategories[categoryName]);
        if(document.getElementsByClassName('subcategory_item').length > 0){
            $subcategories.innerHTML = '';
        }
        addElements(categoryItems,$subcategories,'product','subcategory_item');
        subcategoryItemArray = Array.from(document.getElementsByClassName('subcategory_item'));
        turnOnProducts();
    })
});

function turnOnProducts(){
    subcategoryItemArray.forEach(function (e) {
        e.addEventListener('click',function (e) {
            $products.innerHTML = '';
            let prdouctElement = document.createElement('p');
            let prdouctBtn = document.createElement('a');
            $products.prepend(prdouctElement);
            $products.append(prdouctBtn);
            prdouctElement.innerText = `Do you want to buy - ${e.target.innerText} ?`;
            prdouctBtn.innerText = 'BUY NOW';
            prdouctBtn.classList.add('buy_btn');
            prdouctBtn.setAttribute(`data-buy`, e.target.innerText);
            turnOnBuyBtn();
        })
    })
}

function turnOnBuyBtn(){
    let buyBtn = document.querySelector('.buy_btn');
    buyBtn.addEventListener('click', function (){
        $congratBox.innerHTML = `<h1>Congratulation! You buy ${buyBtn.dataset.buy}</h1>`;
        setTimeout(function () {
            $congratBox.innerHTML = '';
            $subcategories.innerHTML = '';
            $products.innerHTML = '';
        },3000)
    });
}




function addElements(array,place,data,className){
    array.forEach(function (e) {
        let categoriesElement = document.createElement('p');
        place.append(categoriesElement);
        categoriesElement.innerText = e;
        categoriesElement.setAttribute(`data-${data}`, e);
        categoriesElement.classList.add(className);
    })
}

