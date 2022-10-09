var horas = document.querySelector('#hora')
var minutos = document.querySelector('#min')
var segundos = document.querySelector('#sec')

var dia = document.querySelector('#dia')
var mes = document.querySelector('#mes')
var ano = document.querySelector('#ano')

var relogio = setInterval(function time(){
    let date_today = new Date()

    let hrs = date_today.getHours()
    let min = date_today.getMinutes()
    let sec = date_today.getSeconds()

    let d = date_today.getDate()
    let m = date_today.getMonth() 
    let a = date_today.getFullYear()

    let mes_atual = m + 1 

    if (hrs < 10) hrs = '0' + hrs

    if (min < 10) min = '0' + min

    if (sec < 10) sec = '0' + sec

    if (d < 10) d = '0' + d;

    if (m < 10) m = '0' + m;

    horas.textContent = hrs
    minutos.textContent = min
    segundos.textContent = sec

    dia.textContent = d
    mes.textContent = mes_atual
    ano.textContent = a
})
