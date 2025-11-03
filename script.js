//your JS code here. If required.
let btn = document.querySelector('#incrementBtn');
let val = document.querySelector('#counter');

btn.addEventListener("click" , ()=>{
	let currValue = parseInt(val.textContent);
	alert(currValue);
	val.innerText = currValue + 1;
})