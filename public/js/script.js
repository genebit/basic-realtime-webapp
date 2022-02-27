var socket = io()

var textCounter = document.getElementsByClassName('counter')[0]
var button = document.getElementsByClassName('btn')[0]

var value = 0
textCounter.textContent = value
button.onclick = function() {
    value++
    socket.emit('event counter', value)
}

socket.on('event counter', function (val) {
    value = val
    textCounter.textContent = val
})