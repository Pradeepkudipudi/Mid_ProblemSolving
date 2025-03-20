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