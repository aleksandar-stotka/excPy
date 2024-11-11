
def main():
    x = int(input("write your number "))
    if x % 2 == 0:
        print("even")
    else:
        print("odd")    
        
        
main()        


def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False
    
user_out = int(input("choose number "))

fine_score = is_even(user_out)

print(fine_score)




