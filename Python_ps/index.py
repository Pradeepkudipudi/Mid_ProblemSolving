


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



