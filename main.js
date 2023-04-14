function TocaSom (Somdatecla) {   
     document.querySelector(Somdatecla).play()
    }
const ListaDeTeclas = document.querySelectorAll('.tecla')

var contador = 0

while (contador < ListaDeTeclas.length) {

    const teclas = ListaDeTeclas[contador]

    const instrumento = teclas.classList[1]

    contador = contador + 1

    console.log(instrumento)

    const audio = `#som_${instrumento}`

    teclas.onclick = function (){
        TocaSom(audio)
        console.log(audio)
    }
}
