/*GRID- LIST */

const gridButton = document.querySelector('#grid-btn')
const listButton = document.querySelector('#list-btn')
const productsList = document.querySelector('.products-list');
const productsDescriptions = document.querySelectorAll('.product-description');//todas las descripciones de los productos

/*pruebo si selecciona*/
console.log(gridButton)
console.log(listButton)
console.log(productsList)
console.log(productsDescriptions)
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

console.log(inputSearch);
console.log(products);
console.log(starsFilters);
console.log(categoryFilters);
console.log(checkboxesFilter);
console.log(clearAllFiltersBtn);
/*ok*/


/*FUNCIONES*/ 

/* f(x) para mostrar en grid: **/
  showGrid = () =>{
    productsList.classList.remove("in-stack")
    productsList.classList.add("grid")

    for(let product of productsList){
      product.classList.remove("line")
    }

    for(let desc of productsDescriptions){
      hide(desc);
    }
  }

showList = () =>{
   productsList.classList.remove("grid")
    productsList.classList.add("in-stack")

    for(let product of productsList){
      product.classList.add("line");
    }
    for(let desc of productsDescriptions){
      show(desc);
    }
  }

  gridButton.onclick = () =>{
    showGrid();
  }

  listButton.onclick = () => {
    showList();
  }

/*/*NO ANDAN DESCRIPCIONES SFSSGSSS */

////////////////////* filtros */////////////////////
/*EJECUCION FILTROS/BOTON LIMPIAR*/
/*
Seleccionar elementos y guardarnos en const (OK)
recorrer todos los filters 
evocar f(x) si hay algun filtro onclick.
filtrar productos en consecuencia (a traves de c/ f(x))
dar resultado 

onclick clear-btn = limpiar todos los filtros (OK)
*/


/*FUNCIONES GENERALES*/

/*Para mostrar u ocultar productos:*/
const hide = (product) => {
  return product.classList.add("hidden");
};

const show = (product) => {
  return product.classList.remove("hidden");
};

// veo si datas ok: //
// for (let product of products){
//   console.log(product.dataset)
// }

/////////////////////*F(X) FILTRAR PRODUCTOS GRAL => *////////////////////////

const runAllFilters = (product) => {
  if (inputFilter(product) && categoryFilter(product)){
    return true
  }
  else {
    return false
  }
};

/*******************************FILTRO POR INPUT***********************************/

/* f(x) si hay algo escrito en el input: */
const somethingInInput = () => {
  if (inputSearch.value) {
    return true;
    // ingresa string, coercionan siempre true
  } else {
    return false;
  }
};

// /*Compara input/producto:*/
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

// /* Filtra los productos por INPUT y muestra/oculta*/
const inputFilter = () => {
  for (let product of products) {
    if (runInputFilter(product)&& runAllFilters){
      show(product)
    } 
    else {
      hide(product)
    }
  }
}


// // /***************************FILTRO CHECKBOX***************************************/

// /* f(x) si hay algún checkbox categoría checkeado:*/
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
    if (runCategoryFilter(product) && runAllFilters(product)) {
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

const RunStarsFilter = (product) => {
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

const starsFilter = () => {
  for (let product of products){
    if (checkboxStarsChecked(product)){
      show(product)
    }
    else {
      hide(product)
    }
  }
}


 /* ver si hay evento=> si lo hay, RunFilters */
inputSearch.oninput = () => {
  // console.log('hay algo escrito')
  inputFilter();
 };
for (let checkboxCategory of categoryFilters) {
  checkboxCategory.oninput = () => {
    categoryFilter();
  };
}

for (let starsCheckbox of starsFilters) {
  starsCheckbox.oninput = () => {
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
