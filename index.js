
/*-------SELECTORES--------------------*/

/*GRID-LIST*/

const gridButton = document.querySelector('#grid-btn')
const listButton = document.querySelector('#list-btn')
const productsList = document.querySelector('.products-list');
const productsDescriptions = document.querySelectorAll('.product-description');//todas las descripciones de los productos

/*pruebo si selecciona*/
// console.log(gridButton)
// console.log(listButton)
// console.log(productsList)
// console.log(productsDescriptions)
/*ok*/

/*FILTROS*/
const inputSearch = document.querySelector("#input-search"); /*CAJA BUSQUEDA*/
const products = document.getElementsByClassName(
  "product"
); /*LISTA DE PRODUCTOS*/
const starsFilters = document.getElementsByClassName(
  "filter-review"
); /*LISTA DE STRE*/
const categoryFilters = document.getElementsByClassName(
  "filter-category"
); /* LISTA DE CATEGORIAS*/
const checkboxesFilter = document.querySelectorAll(
  ".filter"
); /*LISTA DE CHECKBOXES*/
const clearAllFiltersBtn = document.querySelector(".clear-btn"); /*BOTON*/
const allCheckboxes = document.querySelectorAll(
  "input[type='checkbox']"
); /*CHECKBOX EN GRAL*/

// console.log(inputSearch);
// console.log(products);
// console.log(starsFilters);
// console.log(categoryFilters);
// console.log(checkboxesFilter);
// console.log(clearAllFiltersBtn);
// /*ok*/

// /*cambiar numero*/
// const quantityOfProducts = document.querySelector("#products-quantity")
// console.log(quantityOfProducts)

//*CARRITO*/
const closeCar = document.querySelector(".close-car-shop-menu")
const openCar = document.querySelector(".btn-shop")
const overlay = document.querySelector("#overlay")
const carShopMenu = document.querySelector("#car-shop-menu")
const hidden = document.querySelector(".hidden")
const empyCar = document.querySelector(".empy-car-btn")
const overlay2 = document.querySelector("#overlay2")

const cancelEmptyCar = document.querySelector(".btn-cancel-empty")
const confirmEmptyCar = document.querySelector(".btn-confirm-empty")
const singEmpyCar = document.querySelector("#sing-empty-car-container")

console.log(closeCar)
console.log(openCar)
console.log(overlay)
console.log(carShopMenu)
console.log(hidden)

//*CHECKOUT*//
const btnCheckout = document.querySelector(".buy-car-btn")
const checkout = document.querySelector("#checkout-modal")
const cancelCheckout = document.querySelector(".cancel-modal-btn")
const paymentOptions = document.querySelectorAll(".payment-type")
const cash = document.querySelector("#cash")
const credit = document.querySelector("#credit")
const shippingCheckbox = document.querySelector("#shipping-checkbox")
const discoutCheckbox = document.querySelector("#discount-checkbox")
const subtotal = document.querySelector("#subtotal")
const surcharge = document.querySelector("#surcharge")
const discount = document.querySelector("#discount")
const shipping = document.querySelector("#shipping")
const total = document.querySelector("#total")
// console.log(btnCheckout)

/*------------------------FUNCIONES-------------------------*/


/*-----F(X) ABRIR CERRAR-----------*/

/*--Carrito*/
openCar.onclick = () => {
  carShopMenu.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

closeCar.onclick = () => {
  carShopMenu.classList.add("hidden")
  overlay.classList.add("hidden")
}

/*--Checkout*/
btnCheckout.onclick = () => {
  checkout.classList.remove("hidden")
  overlay2.classList.remove("hidden")
}

cancelCheckout.onclick = () => {
  checkout.classList.add("hidden")
  overlay2.classList.add("hidden")
}

//*----F(X) CALCULO TOTAL CHECKOUT----*/

//precio subtotal
let subtotalPrice = Number(subtotal.dataset.precio)

//función calculo total cada vez que alguna opción está marcada
for (let opcion of paymentOptions) {
    opcion.oninput = () => {
        totalPrice()
    }
}

//recargo tarjeta
let surchargePrice

const surchargeCredit = () => {
    surchargePrice = subtotalPrice * 0.1
    surcharge.textContent = surchargePrice
    return surchargePrice
}

//envio
let shippingPrice

const surchargeShip = () => {
    shippingPrice = 50
    shipping.textContent = shippingPrice
    return shippingPrice
}

//agregoDescuento, donde se hace la cuenta individual
let discountPrice

const addDiscount = () => {
    discountPrice = -subtotalPrice * 0.1
    discount.textContent = discountPrice
    return discountPrice
}

//total
const totalPrice = () => {
    if (credit.checked) {
        surchargePrice = surchargeCredit()
    } else {
        surchargePrice = 0
        surcharge.textContent = surchargePrice
    }

    if (shippingCheckbox.checked) {
        surchargePrice = surchargeShip()

    } else {
        surchargePrice = 0
        shipping.textContent = shippingPrice

    }

    if (discoutCheckbox.checked) {
        discountPrice = addDiscount()
    } else {
        discountPrice = 0
        discount.textContent = discountPrice
    }

    let totalPrice = subtotalPrice + shippingPrice + surchargePrice + discountPrice
    total.textContent = totalPrice
    return totalPrice
}
//ABRIR Y CERRAR VACIAR EL CARRITO

empyCar.onclick = () => {
  singEmpyCar.classList.remove("hidden")
  overlay2.classList.remove("hidden")
}

cancelEmptyCar.onclick = () => {
  singEmpyCar.classList.add("hidden")
  overlay2.classList.add("hidden")

}

confirmEmptyCar.onclick = () => {
  singEmpyCar.classList.add("hidden")
  overlay2.classList.add("hidden")
  overlay.classList.add("hidden")
  carShopMenu.classList.add("hidden")
}

/*---------------F(X) GRILLA/LISTA---------------------*/ 

/* f(x) para mostrar en grid: **/
  grid = () =>{
    productsList.classList.remove("column")
    productsList.classList.add("grid")

    for(let prod of products){
      prod.classList.remove("line-prod")
    }

    for (let description of productsDescriptions){
      hide(description)
    }
  }

/* f(x) para mostrar en lista: **/
list = () =>{
   productsList.classList.remove("grid")
    productsList.classList.add("column")

    for(let prod of products){
      prod.classList.add("line-prod");
    }

    for(let description of productsDescriptions){
      show(description)
    }
  }
/* eventos on click para grilla/lista*/

  gridButton.onclick = () =>{
    grid();
  }

  listButton.onclick = () => {
    list();
  }
/*fotos se desforman*/

/*----------------------------------- F/X) FILTROS  -------------------------------*/
/*ejecución filtros:*/
/*
Seleccionar elementos y guardarnos en const (OK)
recorrer todos los filters 
evocar f(x) si hay algun filtro onclick.
filtrar productos en consecuencia (a traves de c/ f(x))
dar resultado 

/*BOTON LIMPIAR FILTROS
onclick clear-btn = limpiar todos los filtros (OK)
*/

// veo si datas ok: //
// for (let product of products){
//   console.log(product.dataset)
// }


/*F/X) HIDE/SHOW QUE REUTILIZO*/

/*Para mostrar u ocultar productos:*/
const hide = (product) => {
  return product.classList.add("hidden");
};

const show = (product) => {
  return product.classList.remove("hidden");
};

/////////////////////*F(X) FILTRAR PRODUCTOS MAIN => *////////////////////////

const runAllFilters = (product) => {
  if (starsFilter(product) && checkboxesFilter(product) && inputFilter(product)) {
    return true
  }
  else {
    return false
  }
}

/*******************************FILTRO POR INPUT***********************************/
/*SOLO OK)
/* f(x) si hay algo escrito en el input: */
const somethingInInput = () => {
  if (inputSearch.value) {
    return true;
    // ingresa string, coercionan siempre true
  } else {
    return false;
  }
};

// // /*Compara input/producto:*/
const compareInputProduct = (product) => {
  if (product.dataset.name.includes(inputSearch.value.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// /*Pasa filtros Input*/

const runInputFilter = (product) => {
  if (somethingInInput()) {
    if (compareInputProduct(product)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// // /* Filtra los productos por INPUT y muestra/oculta*/
const inputFilter = () => {
  for (let product of products) {
    if (runInputFilter(product)){
      show(product)
    } 
    else {
      hide(product)
    }
  }
}


// // /***************************FILTRO CHECKBOX***************************************/

/* f(x) si hay algún checkbox categoría checkeado:*/
const checkboxCategoryChecked = () => {
  for (let categoryCheckbox of categoryFilters) {
    if (categoryCheckbox.checked) {
      return true;
    }
  }
  return false;
};
/*compara filtro/producto*/
const compareCategory = (product) => {
  for (let checkboxCategory of categoryFilters) {
    if (checkboxCategory.checked) {
      if (checkboxCategory.dataset.category === product.dataset.category) {
        return true;
      }
    }
  }
  return false;
};

/*Pasa filtros category*/

const runCategoryFilter = (product) => {
  if (checkboxCategoryChecked()) {
    if (compareCategory(product)) {
      return true;
    } 
    else {
      return false;
    }
  } 
  else {
    return true
  }
};

/*Resultado pasa filtros categoria muestra/oculta*/

const categoryFilter = () => {
  for (let product of products) {
    if (runCategoryFilter(product)) {
      show(product);
    } 
    else {
      hide(product);
    }
  }
};

/********************************FILTRO POR ESTRELLA*****************************/

/* f(X) si hay algún checkbox estrella checkeado: */
const checkboxStarsChecked = () => {
  for (starsCheckbox of starsFilters) {
    if (starsCheckbox.checked) {
      return true;
    }
  }
  return false;
};

/* f(x) compara estrellas/productos: */
const compareStars = (product) => {
  for (let starsCheckbox of starsFilters) {
    if (starsCheckbox.checked) {
      if (starsCheckbox.value === product.dataset.stars) {
        return true
      }
    }
  }
  return false
};

/* f(x) corre filtro */
const runStarsFilter = (product) => {
  if (checkboxStarsChecked()) {
    if (compareStars(product)) {
      return true;
    } 
    else {
      return false;
    }
  } 
  else {
    return true;
  }
};
/* f(x) resultado pasa filtro muestra/oclta*/
const starsFilter = () => {
  for (let product of products){
    if (runStarsFilter(product)){
      show(product)
    }
    else {
      hide(product)
    }
  }
}


//  EVENTOS => (ver si hay evento=> si lo hay, pasa por los filtros */

/*evento input*/
inputSearch.oninput = () => {
  // console.log('hay algo escrito')
  inputFilter();
 };

/*evento category*/
for (let checkboxCategory of categoryFilters) {
  checkboxCategory.oninput = () => {
    categoryFilter();
  };
}
/*evento stars*/
for (let starsCheckbox of starsFilters) {
  starsCheckbox.oninput = () => {
    // console.log(' hay estrella checked')
    starsFilter();
  };
}


// //--------------------Limpiar Busqueda-------------------------//

/* f/x) limpiar todo*/
const clearInput = () => {
  inputSearch.value = "";
};

const clearCheckboxes = () => {
  for (let checkbox of allCheckboxes) {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
};

const showAllProd = () => {
  for (let product of products) {
    show(product);
  }
};

/*Evento apreta botón limpiar*/
clearAllFiltersBtn.onclick = () => {
  clearCheckboxes();
  clearInput();
  showAllProd();
};

//-------------------Modificar Cantidad productos seleccionados-----------//

// const changeNumberProducts= () => {
//   const hiddenProducts = document.querySelectorAll("product.hidden")
//   let quantity = 12 - hiddenProducts.length
//   quantityOfProducts.textContent = "Mostrando" + " " + quantity + " " + "de 12 productos"
// }
