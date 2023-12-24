//DECLARAÇÃO DE VARIÁVEIS
let hh = 0
let mm = 0
let ss = 0
let cc = 0
let chron = 0

//MAPEAMENTOS
let hmsMobile = document.querySelector('#hms-mobile')
let centMobile = document.querySelector('#cent-mobile')
let hms = document.querySelector('#hms')
let cent = document.querySelector('#cent')
const startBtn = document.querySelector('#start')



function start() {
    startBtn.disabled = true

    chron = setInterval(() => {
        cc++

        if (cc == 100) {
            cc = 0
            ss++
        }
        if (ss == 60) {
            ss = 0
            mm++
        }
        if (mm == 60) {
            mm = 0
            hh++
        }
        //FUNCIONAMENTO EM MOBILE (MOSTRA MINUTOS, SEGUNDOS E CENTÉSIMOS)
        centMobile.innerHTML = (cc < 10 ? ('.0' + cc) : '.' + cc)
        hmsMobile.innerHTML = (mm < 10 ? ('0' + mm) : mm) + ':' + (ss < 10 ? ('0' + ss) : ss)

        //FUNCIONAMENTO EM DESKTOP (MOSTRA HORAS, MINUTOS, SEGUNDOS E CENTÉSIMOS)
        cent.innerHTML = (cc < 10 ? ('.0' + cc) : '.' + cc)
        hms.innerHTML = (hh < 10 ? ('0' + hh) : hh) + ':' + (mm < 10 ? ('0' + mm) : mm) + ':' + (ss < 10 ? ('0' + ss) : ss)
    }, 10);
}


function pause() {
    clearInterval(chron)

    startBtn.disabled = false //DESABILITA O USO DO BOTÃO START
}

function stop() {
    clearInterval(chron)
    hh = 0
    mm = 0
    ss = 0
    cc = 0

    //ZERA MOBILE
    hmsMobile.innerText = '00:00'
    centMobile.innerText = '.00'

    //ZERA DESKTOP
    hms.innerText = '00:00:00'
    cent.innerText = '.00'

    startBtn.disabled = false //DESABILITA O USO DO BOTÃO START
}






