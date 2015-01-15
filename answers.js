//#1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return console.log(x);
	}

	else {
		return console.log(y);
	}
}

maxOfTwoNumbers(4,3);


//#2

function maxOfThree (x, y, z) {
	if ((x > y) && (x > z)) {
		return console.log(x)
	} 

	else if ((y > x) && (y >z)) {
		return console.log(y);
	}

	else ((z > x) && (z > y)) {
		return console.log(z);
	}
}

maxOfThree(2, 3, 4);


//#3

function vowel (letter) {
	if (letter === "a" || "e" || "i" || "o" || "u") {
		return true;
	}

	else {
		return false;
	}
}


//#4
var arry = [];

function sumArray (arry) { 
	for (var i = 0, sum = 0; i < arry.length; sum += arry [i++]) {
		return i;
	}

}

function multiplyArray (arry) { 
	for (var i = 0, multipy = 0; i < arry.length; multipy *= arry [i++]) {
		return i;
	}
}