const alertBox = document.querySelector(".js-alert");
console.log(alertBox)

setTimeout(() => {
	alertBox.classList.remove('not-shown');
}, 2000)
