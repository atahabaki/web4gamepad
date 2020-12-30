window.addEventListener("gamepadconnected", (e) => {
	console.log("Connected",e)
})

window.addEventListener("gamepaddisconnected", (e) => {
	console.log("Disconnected",e)
})

window.addEventListener("keypress", e => console.log(e))

function pressKey(element) {
	element.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
}

let testInput = document.getElementById("test-input")
testInput.addEventListener("focus", e => {
	console.log(e)
	pressKey(document.activeElement)
})


