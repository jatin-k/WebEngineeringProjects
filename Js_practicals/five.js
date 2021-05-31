
var n = prompt('Enter a number')

var num = parseInt(n)

document.write("First " + num + " fibonacci numbers : ")

function fib(number) {
	var a = 0, b = 1, c = 0;
	document.write("0 1 ")
	for(var i = 2; i <= number; i++){
		document.write(a+b + " ");
		c = a+b;
		a = b;
		b = c;
	}
}

fib(num)

document.write("<br><br> Table of " + num + " : ")

function table(number){
	for(var i = 1; i <= 10; i++){
		document.write(i*number + " ")
	}
}

table(num)