function llamada_manzana () {
	
}
function llamada_inicio () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(cesta, 4)
}
function llamada_final () {
    basic.clearScreen()
    basic.showNumber(puntos)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    puntos = 0
    espera = 500
    cesta = 2
    llamada_inicio()
    juega = true
    basic.pause(20000)
    juega = false
    llamada_final()
})
let espera = 0
let puntos = 0
let cesta = 0
let juega = false
juega = false
basic.forever(function () {
    if (juega) {
        let x = 0
        llamada_manzana()
        if (x == cesta) {
            puntos = puntos + 1
            espera = espera - 25
        }
    }
})
