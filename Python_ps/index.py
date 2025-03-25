


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