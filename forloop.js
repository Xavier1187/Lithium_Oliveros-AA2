a = 1;
display = "";
for (var i = 1; i < 4200 ; a--) {
	if (i < 4108) {
	display += i + ", ";
	i = i * 2 + a;
	} else {
	display += i
	i = i * 2 + a;
	}
}
document.getElementById("loop3").innerHTML = display;	