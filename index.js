//1
// Write a program that takes a string, string should be of even length. Divide the string into two equals parts, 
//check the number of vowels in both the parts of the string.
//If both parts of string have same number of vowels then return true otherwise return false.

// Testcase1	:  rebels
// Output     	:  true
// Explanation 	:  Given sring rebels divided into two parts, reb and els. In both parts vowels count is same that is 1(e is presented in both the parts) so it returns true.

// Testcase2	:  apples
// Output     	:  true

// Testcase1	:  mars
// Output     	:  false





let str = "aeiouaeiou"
vowels= "aeiou"
let part1 = ""
let part2 = ""

if(str.length%2==0){
  mid = Math.floor(str.length/2)
for(k=0;k<mid;k++){
  if(vowels.includes(str[k])&&str[k]!==" ")
  //console.log(str[k])
  part1+=str[k]
}
for(j=str.length;j>=mid;j--){
   if(vowels.includes(str[j])&&str[j]!==" "){
    // console.log(str[j])
    part2+=str[j]
   }
}
  
  if(part1.length==part2.length){
  console.log(true)
}else{
  console.log(false)
}

}else{
  console.log("take even length")
}

//python
// strr = "aeiouaeiou"
// vowels = "aeiou"
// part1 = ""
// part2 = ""

// if len(strr) % 2 == 0:
//     mid = len(strr) // 2

//     for k in range(mid):
//         if strr[k] in vowels and strr[k] != " ":
//             part1 += strr[k]

//     for j in range(len(strr) - 1, mid - 1, -1):
//         if strr[j] in vowels and strr[j] != " ":
//             part2 += strr[j]

//     if len(part1) == len(part2):
//         print(True)
//     else:
//         print(False)
// else:
//     print("take even length")





//2


// Write a program that takes array of numbers as input, among the numbers in array,
//print the numbers which forms a prime number by adding one to it.
//Print such numbers in the given array separated b spaces.

// Testcase1	:  [ 7, 4, 7, 23, 10 ]
// Output     	:  4 10
// Explanation : In the given array of number [ 7, 4, 7, 23, 10 ] the numbers 4 and 10 by adding one to these numbers, they formed prime number 5 and 11. So the output is 4 10.




let arr = [ 7, 4, 7, 23, 10 ,12,16]
emp=""

for(i of arr){
 fact=0
 for(j=2;j<i;j++){
   
   if((i+1)%j==0){
     fact++
   }
 }
 if(fact==0){
 
 emp+=i+" "
 
 }

 
}

console.log(emp)

//python
//     arr = [7, 4, 7, 23, 10, 12, 16]
// emp = ""

// for i in arr:
//     fact = 0
//     for j in range(2, i):
//         if (i + 1) % j == 0:
//             fact += 1

//     if fact == 0:
//         emp += str(i) + " "

// print(emp)



//3

// Write a program that takes array of numbers as input and a number as second input.
//Check the position of the factorial of the second input number in the given array. 
//Print the position of it. If the factorial of given second input number is not presented 
//in the array then print factorial of  the number is not presented.

// Testcase1	:  [ 61, 4, 6, 7, 120 , 10 ]
// Input :  5
// Output     	: 4
// Explanation : In the given array of numbers[ 61, 4, 6, 7, 120 , 10 ], the factorial of second input number 5 
//is 120, it is presented at 4th position. So output is 5.


let Factorial = function(num){
  factvar=1
    co=0
  for(i=num;i>0;i--){
    factvar*=i
  }
  
  
  
  let frr = [ 61, 4, 6, 7, 120 , 10 ]

  for(j of frr){
 
    if(factvar==j){
      break
  
    }
       co++
  }
if(frr.includes(factvar)){

  return `it is present in ${co} position`
  }else{
    return "factorial of  the number is not presented"
  }

  
}


console.log(Factorial(3))
   






//4
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1
// 1 2
// 1 2 3
// 1 2 3 4


rows= 4

for(i=1;i<=rows;i++){
  s=""
  
  for(j=1;j<=i;j++){
    s+= j+" "
  }
  console.log(s)
}


//5
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 4 3 2 1
// 4 3 2
// 4 3
// 4



rows= 4

for(i=1;i<=rows;i++){
  s=""
  
  for(j=rows;j>=i;j--){
    s+= j+" "
  }
  console.log(s)
}


//6
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1 1
// 1 2 3
// 1 2 3 6
// 1 2 3 4 10


rowss = 4 
for(i=1;i<=rowss;i++){
  
  s=""
  sum=0
  for(j=1;j<i+1;j++){
    s+= j  +  " "
    sum+=j
  }
  s+= sum
  console.log(s)
}


//7
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 3
// Output     	: 

//     1
//   1    2
//1    2   3

r= 4
for(i=1;i<=rowss;i++){
  s=""
  
  for(sp=0;sp<r-i;sp++){
    s+= " "+" "
  }
  for(j=1;j<=i+2;j++){
    if(j==1||j==r-i||i==r){
      s+="*"+"  "
    }else{ 
      s+= " "+"  "
    }
  }console.log(s)
}


//8

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1+
// 12++
// 123+++
// 1234++++


rows= 4

for(i=1;i<=rows;i++){
  s=""
  
  for(j=1;j<=i;j++){
    s+= j
  }
 for(k=1;k<=i;k++){
   s+="+"
 }
  console.log(s)
}


//9


// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// +1
// ++2
// +++3
// ++++4



r=5
for(i=1;i<=r;i++){
  s=""
  for(sp=0;sp<i;sp++){
    s+="+"
  }
  
  for(j=1;j<2;j++){
    s+= i
  }
  console.log(s)
}

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// +1
// ++12
// +++123
// ++++1234





r=5
for(i=0;i<r;i++){
  s=""
  for(sp=1;sp<=i;sp++){
    s+="+"
  }
  
  for(j=1;j<=i;j++){
    s+= j 
  }
  console.log(s)
}
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A 
// AB
// ABC
// ABCD



r=5


for(i=0;i<r;i++){
  s=""
  c=65

  
  for(j=1;j<=i;j++){
      code = String.fromCharCode(c)
    s+= code
    c++
      
  }
    
  console.log(s)

}



// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 3
// Output     	: 

//   A
// A  B
// A  B  C

// let rs = 3;

// for (let i = 1; i <= rs; i++) {
//   let s = "";
//   let c = 65; // ASCII for 'A'

//   // Adding leading spaces
//   for (let sp = rs - i; sp > 0; sp--) {
//     s += "  "; // Two spaces for alignment
//   }

//   // Adding alphabets
//   for (let j = 0; j < i; j++) {
//     s += String.fromCharCode(c) + "  ";
//     c++;
//   }

//   console.log(s.trim()); // Trim to remove trailing spaces
// }

//or 

r=3


for(i=1;i<=r;i++){
  s=""
  c=65

for(sp=r-i;sp>0;sp--){
  s+= " "+" "
}
  
  for(j=0;j<i;j++){
      code = String.fromCharCode(c)
    s+= code +"  "
    c++
      
  }
    
  console.log(s)

}





// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A1
// AB12
// ABC123
// ABCD1234

r=5


for(i=0;i<r;i++){
  s=""
  c=65

  
  for(j=1;j<=i;j++){
      code = String.fromCharCode(c)
    s+= code
    c++
      
  }
  
    for(k=1;k<=i;k++){
    s+=k
  }
    
  console.log(s)

}

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A
// ab
// ABC
// abcd

r=5


for(i=0;i<r;i++){
  s=""
  

if(i%2==1){
    c=65
  for(j=1;j<=i;j++){
      code = String.fromCharCode(c)
    s+= code
    c++
      
  }
}else{
    c=97
  for(j=1;j<=i;j++){
      code = String.fromCharCode(c)
    s+= code
    c++
      
  }
  
}
    
  console.log(s)

}



// arrays


// Rotate an Array

// Problem: Write a function that rotates an array to the right by a given number of steps.
// Testcase 1:
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

// arr=[1,2,3,4,5]
// rote=2
function Rotate(arr,rote){
  c=[]
  for(i=arr.length-rote ;i<arr.length;i++){
    
    c.push(arr[i])
    
  }
  for(j=0;j<arr.length-rote;j++){
    c.push(arr[j])
  }
  console.log(c)
  
  
}


Rotate( [1, 2, 3, 4, 5], 2)


// Intersection of Two Arrays

// Problem: Write a function that returns the common elements between two arrays.
// Testcase 1:
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]

function Common(arr1,arr2){
  Commonarr= []
  for(i of arr1){
    for(j of arr2){
      if(i==j){
        Commonarr.push(i)
      }
    }
  }
  return Commonarr
}

console.log(Common([1, 2, 4, 3, 6], [2, 3, 4]))









// Find the Maximum Product of Two Elements

// Problem: Write a function to find the maximum product of two elements in an array.
// Testcase 1:
// Input: [3, 5, -2, 8, 11]
// Output: 8 * 11 → 88

let Max= (arr)=>{
  max=[]
  for( i of arr){
    for(j of arr){
      max.push(i*j)
    }
  }
  // max.sort((a,b)=>{return b-a
     maxvalue=0
    for( i of max){
      if(i>maxvalue){
        maxvalue=i
      }
    }
   

  return maxvalue
  
}

console.log(Max([3, 5, -2, 8, 11]))




// Move Zeros to End

// Problem: Write a function that moves all zeros in an array to the end while maintaining the order of other elements.
// Testcase 1:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
let moveZerosToEnd = (arr) => {
  let nonZeroArr = [];
  let zeroArr = [];


  for (let i of arr) {
    if (i !== 0) {
      nonZeroArr.push(i);
    } else {
      zeroArr.push(i);
    }
  }
  nonZeroArr.sort((a,b)=>{return a-b})


  return [...nonZeroArr,...zeroArr];
};


console.log(moveZerosToEnd([0, 1, 0, 5,3, 12]));






// Find Missing Number

// Problem: Given an array of consecutive numbers with one missing, find the missing number.
// Testcase 1:
// Input: [1, 2, 4, 5]
// Output: [3]
let ars=[112,116 ,120, 124, 125]
emp=[]
ars.sort()

for(i=ars[0];i<=ars[ars.length-1];i++){
  emp.push(i)
}
console.log(emp)






// Find the Longest Word

// Problem: Write a function to find the longest word in a string.
// Testcase 1:
// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"



str= " i am nagasai"

max=""
  char=0
for(i=0;i<str.length;i++){

  if( str[i]!==undefined && str[i]!==" " ){
    char+= str[i]
  }else{
    
    if(char.length> max.length){
      max = char
      
    }
    char=""
  }
}

if (char.length > max.length) {
  max = char;
}
console.log(max)



// Problem: Write a function to find all permutations of a given string.
// Testcase 1:
// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]


str="abc"
ar=[]
for(i of str){
  for( j of str){
    if(i==j){
      
    }else{
      ar.push(i+j) 
    }
  }
}

let arrr=[]

for(i of str){
  
 for(j of ar){
   if(!j.includes(i)){
     arrr.push(i+j)
   }
 }
}


console.log(arrr)




// Convert Roman Numerals to Integer

// Problem: Write a function to convert a Roman numeral string to an integer.
// Testcase 1:
// Input: "MCMXCIV"
// Output: 1994

const Roman = (str)=>{
  
  obj= {
    "M":1000,
    "C": 100,
    "D" : 500,
    "X" : 10,
    "I": 1,
    "V": 5
  }
  result=0

  
  
  for(i=0;i<str.length;i++){
    
   let  current = obj[str[i]]
  let  next = obj[str[i+1]]
    
    if(next>current){
      result+= next - current
      i++;
    }else{
      result+= current
    }
    
    
  }
  return result
}


console.log(Roman("MCMXCIV"))









// String Compression
// `
// Problem: Write a function to perform basic string compression using the counts of repeated characters.
// Testcase 1:
// Input: "aabcccccaaa"
// Output: "a2b1c5a3"




let strr = "aabcccccaaa"
s=""
  count=1
for(i=0;i<strr.length;i++){

  
  if(strr[i]===strr[i+1]){
    
  count++
  
    
  
  }else{
    s += strr[i] + count;
    count = 1;
  }
  

}
  console.log(s)



















