import random

words = ["tabla", "zanaet", "kuka"]


random_words = random.choice(words)

print(random_words)

placeholder = ""
display = ""


guess = input("guess words ").lower()

len_random_letter = len(random_words)

for position in range(len_random_letter):
        placeholder += '_'
        print(placeholder)

for letter in words:
    if guess == letter:
       display += letter
    else: display += '_'   

print(display)