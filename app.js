// Question # 01
var Arr= ['Hello']
var Arr5= ['Happy']
var Arr7= ['World']
var combine= [Arr, Arr5, Arr7]

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

// // Question # 04
var inpNum= +prompt("Enter Any Number");
var takeNum= +prompt('Enter a range: ');

for (i=1; i<=takeNum; i++){
    document.write(inpNum + " * " + i + " = " + i*inpNum + "<br>")
}

// Question # 05
var fruits = ['apple' , 'banana' , 'mango', 'orange', 'strawberry']

document.write(`${fruits} <br> Element at index 0 is ${fruits[0]} <br> Element at index 1 is ${fruits[1]} <br> Element at index 2 is ${fruits[2]} <br> Element at index 3 is ${fruits[3]} <br> Element at index 4 is ${fruits[4]} <br>`)

//Question 06
document.write("<h2>Counting</h2>")
for (var i=1; i<=15; i++){
    document.write(i + "<br>")
}

document.write("<h2>Reverse Counting</h2>")

for (var i=10; i>=1; i--){
    document.write(i + "<br>")
}

document.write("<h2>Even Number</h2>")

for (let i = 0; i <= 20; i+= 2){
    document.write(i + "<br>")
}

document.write("<h2>Odd Number</h2>")

for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      document.write(i + "</br>")
    }
  }

  document.write("<h2>Series Number</h2>")

  for (let i = 2; i <= 20; i+= 2){
      document.write(i + "k" + "<br>")
  }

  //Question # 07
  var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
  var userInput= prompt("Enter Bakery Item")

//   //Question # 08
document.write("<h2>Find Largest Number</h2>")

var arr = [3, 6, 2, 56, 32, 5, 89, 32, 212];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
document.write(`Array Items ${arr} <br> The Largest Number is ${largest}`);


//Question # 09
document.write("<h2>Find Lowest Number</h2>")
var arr = [3, 6, 2, 56, 32, 5, 89, 32, 212];
var smallest= arr[0];

for (var i= 0; i>arr.length; i++){
    if (arr[i] < smallest){
        smallest = arr[i];
    }
}
document.write(`Array Items ${arr} <br> The Smallest Number is ${smallest} <br>`)

// Question # 10
document.write("<h2>print multiples of 5 ranging 1 to 100.</h2>")
for (i=5; i<=100; i=i+5){
    document.write(i + "<br>")
}


  