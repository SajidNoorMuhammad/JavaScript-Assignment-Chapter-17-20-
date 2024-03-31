// Question # 01
// var Arr= [[hello][Hi][Bye]];

// Question # 02
var arrNum= ['0'+123]
var arrNum1= [1012]
var arrNum3= [2101]
var arr= [arrNum.join(), arrNum1.join(), arrNum3.join()]
document.write(`<h1>${arrNum} <br> ${arrNum1} <br> ${arrNum3}</h1>`)

// Question # 03
for (var i=1; i<=10; i++){
    document.write(i + "</br>")
}

// Question # 04
var inpNum= +prompt("Enter Any Number");
var takeNum= +prompt('Enter a range: ');

for (i=1; i<=takeNum; i++){
    document.write(inpNum + " * " + i + " = " + i*inpNum + "<br>")
}

