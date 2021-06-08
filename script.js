const container = document.getElementById('container')
let info = document.getElementById('info')

let totalTime = 9500
let breathTime = (totalTime/5)*2
let hold = totalTime/5

breath()

function breath(){
    info.innerText = 'Breath in!'
    container.className = 'container grow'
    setTimeout(()=>{
        info.innerText = 'Hold'
        setTimeout(()=>{
            info.innerText = 'Breath out!'
            container.className = 'container shrink'
        },hold)
    },breathTime)
}

setInterval(breath,totalTime);

