let userName = prompt("Adınız Nedir?")
document.getElementById("myName").innerHTML = userName

// Showing Date Time
function saatiGoster() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const days = ["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"]
    const g = new Date();
    let day = days[g.getDate()];
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + day
    document.getElementById('myClock').innerHTML = time;
}
setInterval(saatiGoster, 1000);