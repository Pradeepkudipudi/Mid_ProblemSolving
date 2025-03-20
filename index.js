
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

