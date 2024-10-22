import random
words = ['tabla', "zanaet", "kuka"]


random_words = random.choice(words)

print(random_words)

placeholder = ""

guess = input("guess words ").lower()

if random_words == guess:
    print('win')
else: print("no")    


