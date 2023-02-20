let ans = document.getElementById("ans")
let inc = 0
function count(){
	inc += 1
	ans.textContent = inc
	console.log(inc)
}

let sans = document.getElementById("sans") 
let add = 0
function save(){
	let countstr = inc + " - "
	sans.textContent += countstr
	add += 1
	if(add > 2){
		add = 0
		sans.textContent = "Previous Entries : " + inc + " - "
	}
	ans.textContent = 0
	inc = 0
}

