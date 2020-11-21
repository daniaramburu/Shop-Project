Querida Dani, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes son en general adecuados y utilizas bien las etiquetas aria. 

Tu barra de navegación no tiene el contraste adecuado. Honestamente me sorprendió este resultado, pero chequeé igual por las dudas y lo comprobé. Podes ver si tus colores tienen un contraste correcto en este link: https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=FF8E6E. El requisito del contraste es muy dificil de notar para quienes no tenemos problemas de visión, por lo que es importante siempre confirmar que sea correcto aunque creamos estar seguras. 

Tus imagenes ocasionalmente tienen el atributo alt correcto. Otras veces quedó vacío: entiendo que el tiempono fue tu aliado para cumplir este requisito. 

Falta aclarar el "lang" del documento HTML, que es algo muy util para que el lector automatico sepa en que idioma leer la web. 

La decisión que no entiendo fue la de eliminar el outline de tus botones. Esto hace que tu web sea practicamente imposible de navegar con teclado, ya que es imposible saber en qué producto hemos hecho foco. Nunca debemos eliminar el outline que viene por defecto en botones, links o elementos de formulario, a menos que lo reemplacemos con otra cosa que reaccione al foco del usuario: no podemos insistir lo suficiente en este punto. 

### Filtros y búsqueda

Tus filtros funcionan correctamente uno a uno, pero no podemos hacer mas de una busqueda a la vez. Esto ocurre porque tu input, tu filtro de categorias y tu filtro por estrellas tienen tres funciones diferentes asociadas: categoryFilter, inputFilter y starsFilter. Cuando hago click en una categoria, se produce el filtro por categorias correctamente. Pero cuando luego hago click en una estrella, se hace el filtro por estrellas y tu codigo no tiene manera de darse cuenta de que yo esperaba filtrar por categorias y estrellas a la vez. 
Esto se soluciona haciendo que las tres cosas, input, categorias y estrellas, tengan la misma funcion asociada. Creo que comenzaste a encararlo de esa manera con la funcion runAllFilters, que esta declarada pero no se usa en ningun lugar de tu codigo. En la clase 32, identificamos esta funcion general como filtrarTarjetas, y es el nombre que usaré de ejemplo aca. 

```js
inputSearch.oninput = () => {
    filtrarTarjetas()
}


for (let checkboxCategory of categoryFilters) {
  checkboxCategory.oninput = () => {
      filtrarTarjetas()
  }
}

for (let starsCheckbox of starsFilters) {
  starsCheckbox.oninput = () => {
      filtrarTarjetas()
  }
}
```

Asi, en lugar de llamar cada filtro a una funcion distinta (si apretamos los checkbox se llama a la funcion que revisa los checkbox y nada mas), lo que hacemos es llamar a la misma funcion toda vez que se hace click en un filtro, o se escribe algo en el input. Hacemos esto para que esa funcion, filtrarTarjetas, pueda revisar *todos* los filtros: si esta activo el filtro de 3 estrellas pero ademas el filtro por la categoria "budines", solo se mostraran los budines de tres estrellas. 

En la clase 32 vimos esto en mas profundidad, asi que quiza quieras repasarla. Pero te dejo como podriamos encarar el codigo: 

```js
const filtrarTarjetas = () => {
  for (let product of products) {
    if (runAllFilters(product)) {
      show(product)
    }
    else {
      hide(product)
    }
  }
}
```

Tu funcion runAllFilters tiene dos problemas:
- La funcion que se llama en el medio tiene el nombre incorrecto 
- Las funciones llamadas no devuelven true o false, sino hide y show. Y a pesar de que reciben un producto como parametro, vuelven a hacer el for, que es innecesario. 

Corrijamos ambos errores. Primero en runAllFilters:

```js
const runAllFilters = (product) => {
  if (starsFilter(product) && categoryFilter(product) && inputFilter(product)) {
    return true
  }
  else {
    return false
  }
}
```

Y luego en cada una de las funciones:

```js
const starsFilter = (product) => {
  if (runStarsFilter(product)){
    return true
  }
  else {
    return false
  }
}

const categoryFilter = () => {
  if (runCategoryFilter(product)) {
    return true
  }
  else {
    return false
  }
};

const inputFilter = () => {
    if (runInputFilter(product)){
    return true
  }
  else {
    return false
  }
};
```

Con esos cambios, ya deberia estar funcionando los filtros todos a la vez. 

Otro problema es que la cantidad señalada no se actualiza con los filtros. Veo que es algo que intentaste hacer. Tu unico problema era que te faltaba un punto antes de "product":

```js
const hiddenProducts = document.querySelectorAll(".product.hidden")
```

Con ese cambio, ya podes llamar a la funcion en cada oninput, y vas a ver que la cantidad se actualiza correctamente. 

### Carrito

Tu carrito funciona muy bien! A nivel estetico, quiza creo que haria falta prestarle mas atencion al diseño original y respetar mejor distancias, padding, etc, pero salvo ese detalle veo todo funcionando correctamente. Resolviste muy bien los modales!

Un detalle que quiza ayudaria a tu web es cambiar la barra de navegacion para que diga que el carrito tiene 2 productos en lugar de 0. 

### Checkout

Si apenas inicio el checkout marco "Tarjeta de credito" veo un NaN en el subtotal. Eso es porque al momento de calcular el precio a mostrarse, usamos estas cuatro variables: subtotalPrice, shippingPrice, surchargePrice, discountPrice. "shippingPrice" esta declarada sin darle valor, por lo que es "undefined". Al momento de sumar las 4, como shippingPrice es "undefined", la suma es NaN. Siempre que trabajamos con numeros, iniciamos las variables en 0, no undefined, para evitar esos errores. 

Nota que tu boton de envio dice "Submit". Ese es el valor por defecto, pero podes cambiarlo. En tu HTML podes ponerle el value que quieras, por ejemplo, "Enviar":

```js
<input type="submit" value="Enviar" aria-label="finalizar la compra" class="finish-btn"></input>
```

### Misc 

Tu HTML esta muy bien en general. Tendes a resumir mucho los nombres de clase ("car" por "carrito") y quiza eso dificulta saber que es cada cosa. Tu indentado es algo desprolijo, y te recomendaria recordar usar el identado automatico de Visual Studio para mejorarlo un poco, ya que muchas veces se dificulta entender el arbol de nodos por un indentado incorrecto. Otra cosa es que olvidaste cerrar la etiqueta footer: cuidado con eso, ya que puede traer bugs muy dificiles de encontrar. Mas alla de eso, usas muy bien las etiquetas semanticas y se nota que ya te moves con mucha confianza en tu HTML. 

Con respecto al aspecto visual de tu web, creo que hay muchos momentos donde faltan paddings / margenes para que las cosas no se vean tan pegoteadas entre si. Son detalles, pero van a sumar mucho a la visualizacion de tu web. 

Otro detalle, pero en el que valdria la pena invertir, es que habria apreciado mas efectos de hover en botones e iconos, para mostrarle al usuario que habia mas opcion de acciones. Un cambio de color en el hover de un boton le comunica muy rapidamente al usuario que ahi hay una accion que vale la pena tomar. 

No es mi idea enfocarme en el responsive, aunque debo comentar que en general lo que resolviste lo hiciste muy bien. En todas tus resoluciones tu web se comporta correctamente. El unico detalle que si o si arreglaria es que en resoluciones intermedias, cuando tus tarjetas estan en columna se ven de la mitad de la pantalla en lugar de ocuparla toda. Eso es por el width que tenes en la media query de 1200. Yo lo cambiaria por width: 100%

```css
@media (max-width: 1200px)
.product {
    width: 100%;
}
```

En la barra de navegacion, titulo y logo estan desalineados. Se arregla muy rapido agregandole "align-items: center".  

Menciono la calidad de tu css, prolijo, claro, bien indentado. Se nota muchisimo tu avance y aprendizaje aqui. Lo mismo ocurre con tu Javascript: mas alla de los detalles que te menciono, lo veo muy bien hecho, ordenado, prolijo, con poquisimos errores y con un evidente esfuerzo involucrado. 
Lo que si te menciono a nivel general del JS es que la cantidad de comentarios y console log dificultan la lectura. Obviamente yo como docente no tengo problema, pero tene en cuenta que para trabajos entregados se espera que no haya ningun comentario a menos que realmente sirva al lector (por ejemplo, para aclarar de que seccion es el codigo o para aclarar el proposito de alguna funcion compleja), pero todos los demas comentarios que fuiste dejando para vos misma se deben borrar. Lo mismo los console.log. Estos detalles suman mucho a la hora de presentar codigo para entrevistas, asi que vale la pena invertir desde ahora en eso. 

Tenes relativamente pocos commits, por lo que se me dificulta reconstruir como fuiste aumentando tu codigo. Siempre es buena idea hacer muchos commits, para poder volver atras en caso de que te arrepientas y tambien para mostrar como tu codigo fue aumentando. Se que es dificil hacerlo, especialmente al principio cuando no estas muy segura de lo que podes hacer, pero es una practica que esta bueno tener incorporada. 

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✅ Respeta el funcionamiento.
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✔️ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✔️ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✔️ Reutilización de estilos.
✅ Funciones pequeñas.
✔️ Commits con mensajes adecuados.
❌ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 8




