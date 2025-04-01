


# r=5

# for i in range(1,r+1,1):
#     s=""
#     for j in range(r,i,-1):
#         s+= str(i)
        
#     print(s)
    
    
# 1 1
# 1 2 3
# 1 2 3 6
# 1 2 3 4 10


# r=5

# for i in range(1,r,1):
#     s=""
#     num=0
#     for j in range(1,i+1):
#         num+=j 
#         s+=str(j) +" " 
#     s+= str(num)
#     print(s)
#   1
#  1 2
# 1 2 3


r=4

for i in range(1,r):
    s=""
    for sp in range(r-i,0,-1):
        s+= " "
    
    for j in range(1,i+1):
        s+= str(j)+" "
        
    print(s)










# Create a function that takes two numbers as arguments and returns their sum.

def add(a,b):
    print(a+b)
    
add(4,5)


# Write a function that takes an integer minutes and converts it to seconds.


def time(a):
    time = a*60
    return time , "seconds"
    
print(time(2))


# Create a function that takes a number as an argument, increments the number by +1 and returns the result.


incre = lambda x : x+1
print(incre(2))
# Create a function that takes the age in years and returns the age in days.

def age(a):
    return a*365
    
print(age(7))
    
# sbi Create a function that takes voltage and current and returns the calculated power.

def power(v,c):
    return v*c
    
print(power(4,6))


# Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.


def sume(a,b):
    if a==10 or a+b==10 or b==10 :
        return True
    else:
        return False
        
print(sume(5,5))




arr = [2,4,5,6,1]
rotate = 3
ar=[]

for j in range(rotate,len(arr),1):
    ar.append(arr[j])

for i in range(0,rotate,1):
    ar.append(arr[i])
    

    
print(ar)


str = "dog is cool" 

str= str.replace("o","O")

print(str)


#Find the missing number

mr = [1,2,5,6]
mising= []
for i in range(mr[0],max(mr)+1):
    
    mising.append(i)
    
print(mising)







details = {
  'marks': {
    "tel":65,
    'hindi':45,
    'eng': 93
  }
}

s=''
for i in details :
  for j in details[i] :
    s=  sum( details[i].values())
    

details['total'] = s

print(details)



name = 'pradeep'

res= ''
vowels = 'aeiouAEIOU'


for i in range(len(name)):
  code = ord(name[i])
  if name[i] in vowels :
        
    res+= name[i]
    
  else:
    code+=1
    res+= chr(code)

    
print(res)












# FizzBuzaz

# Problem: Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
# Testcase 1:

# Output:
# 1  
# 2  
# Fizz  
# 4  
# Buzz  
# Fizz  

# 7  
# 8  
# Fizz  
# Buzz  
# 11  
# Fizz  
# ... 
# s=''
# for i in range(1,100):
  

#   if i%3==0:
#     print('Fizz')
#   elif i%5==0 :
#     print( 'Buzz')
#   elif i%2==1 and i%5==0 :
#     print('FizzBuzz')
#   else:
#     print(i)
  








# Sum of Digits

# Problem: Write a function that takes a number and returns the sum of its digits.
# Testcase 1:
# Input: 123
# Output: 6


# def my_sum(li):
#   s=0
#   for i in range(len(li)):
#     s+=  li[i]
    
#   return s
    
# print(my_sum([1,2,3]))

def my_sum(li):
    return sum(li)

print(my_sum([1,2,3]))
  

# Check for Armstrong Number

# Problem: Write a function to check if a number is an Armstrong number (e.g., 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153).
# Testcase 1:
# Input: 1

# Output: true

# Generate Fibonacci Sequence

# Problem: Write a function that generates the first n numbers in the Fibonacci sequence.
# Testcase 1:
# Input: 5
# Output: [0, 1, 1, 2, 3]

# li=  [0, 1, 1, 2, 3]





