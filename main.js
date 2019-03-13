const spn = document.querySelector(".clock span");



const timer = () => {

    //let miliSec = new Date().getMilliseconds() < 100 ? `0${new Date().getMilliseconds()}` : `${new Date().getMilliseconds()}`;
    let sec = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : `${new Date().getSeconds()}`;
    let min = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : `${new Date().getMinutes()}`;
    let hou = new Date().getHours() < 10 ? `0${new Date().getHours()}` : `${new Date().getHours()}`
    spn.textContent = `${hou}:${min}:${sec}`;
    return timer
}


const time = timer()
setInterval(time, 100)