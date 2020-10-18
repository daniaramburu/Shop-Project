/*FUNCIONES GENERALES*/
const hide = (product) => {
  return product.classList.add("hidden");
};

const show = (product) => {
  return product.classList.remove("hidden");
};

/*GRID- LIST*/
/*selecciono*/
// const gridButton = document.querySelector('#grid-btn')
// const listButton = document.querySelector('#list-btn')
// const productsList = document.querySelector('.products-list');
// const productsDescriptions = document.querySelectorAll('.product-description');//todas las descripciones de los productos

/*pruebo si selecciona*/
// console.log(gridButton)
// console.log(listButton)
// console.log(productsList)
// console.log(productsDescriptions)

/* f(x) para mostrar en grid: **/
//   showGrid = () =>{
//     productsList.classList.remove("in-stack")
//     productsList.classList.add("grid")

//     for(let product of productsList){
//       product.classList.remove("line")
//     }

//     for(let desc of productsDescriptions){
//       hide(desc);
//     }
//   }

// showList = () =>{
//    productsList.classList.remove("grid")
//     productsList.classList.add("in-stack")

//     for(let product of productsList){
//       product.classList.add("line");
//     }
//     for(let desc of productsDescriptions){
//       show(desc);
//     }
//   }

//   gridButton.onclick = () =>{
//     showGrid();
//   }

//   listButton.onclick = () => {
//     showList();
//   }

/*/*NO ANDAN DESCRIPCIONES SFSSGSSS */

////////////////////* filtros */////////////////////
/*EJECUCION FILTROS/BOTON LIMPIAR*/
/*
Seleccionar elementos y guardarnos en const (OK)
recorrer todos los filters 
evocar f(x) si hay algun filtro onclick.
filtrar productos en consecuencia (a traves de c/ f(x))
dar resultado 

onclick clear-btn = limpiar todos los filtros (OK)(PONELE)
*/

/*selecciono*/
const inputSearch = document.querySelector("#input-search"); /*CAJA BUSQUEDA*/
const products = document.getElementsByClassName(
  "product"
); /*LISTA DE PRODUCTOS*/
const starsFilter = document.getElementsByClassName(
  "filter-review"
); /*LISTA DE STRE*/
const categoryFilter = document.getElementsByClassName(
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
console.log(starsFilter);
console.log(categoryFilter);
console.log(checkboxesFilter);
console.log(clearAllFiltersBtn);
/*ok*/


// for (let product of products){
//   console.log(product.dataset)
// }


//PRIMEROS INTENTOS DE F(X)

/*busqueda por input*/
// inputSearch.oninput = () => {
//   for (let product of products) {
//     if (product.dataset.name.includes(inputSearch.value.toLowerCase())) {
//       product.classList.remove("hidden");
//     } else {
//       product.classList.add("hidden");
//     }
//   }
// };

// /*busqueda por categoria*/
// for (let checkboxCategory of categoryFilter) {
//   checkboxCategory.oninput = () => {
//     // console.log(checkboxCategory.dataset.category)
//     for (let product of products) {
//       product.classList.add("hidden");
//       for (let checkboxCategory2 of categoryFilter) {
//         if (checkboxCategory2.checked) {
//           if (checkboxCategory2.dataset.category === product.dataset.category) {
//             product.classList.remove("hidden");
//           }
//         }
//       }
//     }
//   };
// }
// /*busqueda por estrella*/

// for (let estrella of starsFilter) {
//   estrella.oninput = () => {
//     // console.log(estrella.value)
//     // if (estrella.checked) {
//     for (let product of products) {
//       product.classList.add("hidden");
//       for (let estrella2 of starsFilter) {
//         if (estrella2.checked) {
//           if (estrella2.value === product.dataset.stars) {
//             product.classList.remove("hidden");
//           }
//         }
//       }
//     }
//   };
// }



/* f(x) Que pase todo junto:*/
//f(x) filtersMatch con parametro de cada tarjeta revisa si hay evento y retorna t/f

const checkboxCategoryChecked = () => {
  for (categoryCheckbox of categoryFilter) {
    if (categoryCheckbox.checked) {
      return true;
    }
  }
  return false
  
};

const checkboxStarsChecked = () => {
  for (starsCheckbox of starsFilter) {
    if (starsCheckbox.checked){
      return true
    }
  }
  return false
};

const somethingInInput = () => {
  if (inputSearch.value) {
  return true
  }
  return false
};



// const runFilters = () => {
//   for (product of products) {
//     if (filtersMatch(product)) {
//       hide(product);
//     } else {
//       show(product);
//     }
//   }
// };

// /* ver si hay evento */

// inputSearch.oninput = () => {
//   runFilters();
// };

// for (let checkboxCategory of categoryFilter) {
//   checkboxCategory.oninput = () => {
//     runFilters();
//   };
// }

// for (let estrella of starsFilter) {
//   estrella.oninput = () => {
//     runFilters();
//   };
// }

// const filtrarElementos = () => {
//   for (let product of products) {
//     if (pasaFiltros(element)) {
//       mostrar(element);
//     } else {
//       ocultar(element);
//     }
//   }
// };



// BUSCAR POR NOMBRE pensadondolo mejor //

// const somethingInInput = () => {
//   if (inputSearch.value) {
//   //  console.log('hay algo escrito');
//   } else {
//    // console.log('no hay nada escrito')
//   }
// };

// const compareInputProduct = (element) => {
//   if (element.dataset.name.includes(inputSearch.value.toLowerCase())){
//     return true
//   }
//   else {
//     return false
//   }
// }

// const runInputFilter =  (element)=> {
//   if (somethingInInput()){
//     if(compareInputProduct(element)){
//       return true
//     }
//     else {
//       return false
//     }
//   }
//   else {
//     return false
//   }
// }

// const inputFilter = () => {
//   for (let element of products){
//     if (runInputFilter(element) && runInputFilter(element)){
//       mostrar(element)
//     }
//     else {
//       ocultar(element)
//     }
//   }
// }

// //------------Limpiar Busqueda--------------//
// clearAllFiltersBtn.on click = () => {
//   inputSearch.value = "";
//   for (let producto of products) {
//     producto.classList.remove("hidden");
//   }
//   for (let checkbox of allCheckboxes) {
//     checkbox.checked = false;
//   }
// };
