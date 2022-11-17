const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')
const form = document.getElementById('form')

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event){
//     console.log({event})
//     event.preventDefault()
//     // const sumaInputs = Math.floor(input1.value)  + Math.floor(input2.value) 
//     // const sumaInputs = Number(input1.value)  + Number(input2.value) // permite sumar decimales
//     // const sumaInputs = parseInt(input1.value)  + parseInt(input2.value) // permite pero solo enteros
//     const sumaInputs = parseFloat(input1.value)  + parseFloat(input2.value) // permite sumar decimales
//     pResult.innerText = "Resultado: " + sumaInputs
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event){
    // console.log({event})
    // event.preventDefault()
    // const sumaInputs = Math.floor(input1.value)  + Math.floor(input2.value) 
    // const sumaInputs = Number(input1.value)  + Number(input2.value) // permite sumar decimales
    // const sumaInputs = parseInt(input1.value)  + parseInt(input2.value) // permite pero solo enteros
    const sumaInputs = parseFloat(input1.value)  + parseFloat(input2.value) // permite sumar decimales
    pResult.innerText = "Resultado: " + sumaInputs
}


// const input = document.querySelector('input');
// const pid = document.getElementById('pid');
// const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito');
// h1.innerText = 'Patito Feo'
// // h1.innerHTML = 'Patito <br> Feo'

// h1.getAttribute('pantala')
// h1.getAttribute('pantala')
// h1.classList.add('rojo')
// h1.classList.toggle('rojo')
// h1.classList.contains('rojo')

// console.log(h1.getAttribute("pantalla"))
// console.log(h1.getAttribute("class"))
// console.log(h1.setAttribute("class","rojo verde"))
// console.log(h1.getAttribute("class"))
// h1.classList.remove('rojo')
// console.log(h1.getAttribute("class"))

// input.value= "123"
// console.log(input.value)

// const img= document.createElement('img')
// console.log(img)
// img.setAttribute('src','https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif')
// console.log(img)
// pid.appendChild(img)
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
//     img
// })

// pid.innerHTML = img.outerHTML
// pid.replaceWith(img)

 
{/* <iframe src="https://giphy.com/embed/l3vR9O3vpOCDRo8rC" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-l3vR9O3vpOCDRo8rC">via GIPHY</a></p> */}