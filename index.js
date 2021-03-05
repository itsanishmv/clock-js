var myVar1;
var myVar2;

function militaryTime() {
    document.getElementById("twelve").addEventListener("click", twelveHours)
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    myVar1 = setTimeout(militaryTime, 1000)

    console.log("insisde showtime")
    document.querySelector(".clock").innerHTML = `${hours}:${minutes}:${seconds}`
    document.getElementById("military").removeEventListener("click", militaryTime)

}


function twelveHours() {

    document.getElementById("military").addEventListener("click", militaryTime)
    var d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    if (h == 0) {
        h = 12
    }
    if (h > 12) {
        h = h - 12
    }
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    console.log("inside twelvehours")
    document.querySelector(".clock").innerHTML = `${h}:${m}:${s}`
    myVar2 = setTimeout(twelveHours, 1000)
    document.getElementById("twelve").removeEventListener("click", twelveHours)
    document.getElementById("twelve").addEventListener("click", function () {
        document.getElementById("twelve").style.color = "green"
    })


}


function stopMilitary() {
    clearTimeout(myVar1)

}
function stopTwelve() {
    clearTimeout(myVar2)

}

document.getElementById("military").addEventListener("click", militaryTime)
document.getElementById("twelve").addEventListener("click", twelveHours)


