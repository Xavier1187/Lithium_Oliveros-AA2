let num = 1;
let text = "";
while(num < 52) {
	if(num < 51)	{
	text += num + ", ";
	num = num + 2;
	} else {
		text += num;
	num = num + 2;
	}
}
document.getElementById("loop").innerHTML = text;