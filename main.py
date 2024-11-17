import random

"""
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

"""

words = ["tapan", "kuka", "majka"]

random_word = random.choice(words)


print(random_word)
          
display = "_"
display_letter = []

guess_letter = input("guess the letter ")


for letter in random_word:
    letter == display
    if letter == guess_letter:
        display_letter.append(letter)
     
    print(display_letter)
