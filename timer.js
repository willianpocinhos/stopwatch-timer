//MAPEAMENTOS
let hh = document.querySelector('#hh')
let mm = document.querySelector('#mm')
let ss = document.querySelector('#ss')

const message = document.querySelector('#message')
const numbers = document.querySelector('#numbers')
const legend = document.querySelector('#legend')
const startBtn = document.querySelector('#start')
const pausetBtn = document.querySelector('#pause')


let timer = 0 //VARIÁVEL PARA RECEBER O setInterval()
const audio = new Audio('assets/mixkit-vintage-warning-alarm-990.wav') //VARIÁVEL PARA RECEBER O ÁUDIO


function pause() { 
    startBtn.disabled = false

    clearInterval(timer)
}

function start() {

    if ((hh.value != 0 || mm.value != 0 || ss.value != 0)) { //CASO VALORES ESTEJAM ZERADOS, NÃO PERMITE INICIALIZAR O TIMER 
        startBtn.disabled = true

        timer = setInterval(() => { // INÍCIO DA FUNÇÃO DO TIMER
            ss.value--

            if (ss.value < 0) {
                ss.value = 59
                mm.value--
            }
            if (mm.value < 0) {
                mm.value = 59
                hh.value--
            }
            if (hh.value == 0 && mm.value == 0 && ss.value == 0) { //VERIFICA SE TODOS OS VALORES ESTÃO ZERADOS
                clearInterval(timer)
                numbers.style.display = 'none'
                legend.style.display = 'none'
                message.style.display = 'block' // MOSTRA A MENSAGEM 'TIME OVER'
                audio.play(); // TOCA O ALARME
                pausetBtn.disabled = true
            }

            //FORMATAÇÃO NUMÉRICA PARA 2 DÍGITOS
            ss.value < 10 ? ss.value = '0' + ss.value : ss.value
            mm.value < 10 ? mm.value = '0' + mm.value++ : mm.value
            hh.value < 10 ? hh.value = '0' + hh.value++ : hh.value


        }, 1000);
    } else{
        alert('Insira algum valor!') // MENSAGEM EXIBIDA CASO O TIMER SEJA INICIALIZADO SEM NENHUM VALOR
    }
}

function reset() {
    startBtn.disabled = false

    clearInterval(timer)
    location.reload()
}