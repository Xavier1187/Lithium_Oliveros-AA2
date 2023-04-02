let num1 = 2;
let text1 = "";

do {
	if (num1 < 49) {
	text1 += num1 + ", ";
	num1 = num1 + 2;
	} else {
	text1 += num1;
	num1 = num1 + 2;
	}
}
while(num1 < 51);
document.getElementById("loop2").innerHTML = text1;	