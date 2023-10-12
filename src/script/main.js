document.getElementById('countdown').innerText = 5
const countdown = () => {
    if (parseInt(document.getElementById('countdown').innerText) == 0) {
        window.location.href = 'https://bloomyindev.me'
        document.getElementById('countdown').innerText = 'now'
    } else {
        console.log(parseInt(document.getElementById('countdown').innerText))
        document.getElementById('countdown').innerText =
            parseInt(document.getElementById('countdown').innerText) - 1
    }
}
setInterval(countdown, 1000)
