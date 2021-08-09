"use strict";

const addZeros = (number)=>{
	if(number.toString().length < 2){
		return "0".concat(number);
	} else {
		return number;
	}
}

const actualizarHora = ()=>{
	const time = new Date();
	let hora = addZeros(time.getHours());
	let min = addZeros(time.getMinutes());
	let seg = addZeros(time.getSeconds());
	document.querySelector(".hora").textContent = hora;
	document.querySelector(".min").textContent = min;
	document.querySelector(".seg").textContent = seg;
}

actualizarHora();

setInterval(actualizarHora, 1000)