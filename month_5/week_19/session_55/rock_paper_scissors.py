import random

rock = """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
"""

paper = """
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
"""

scissors = """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
game_images = [rock, paper, scissors]
print(game_images[1])

user_input = int(input("What do you choose? Type 0 for Rock, 1 for Paper, or 2 for Scissors."))
if user_input < 2 or user_input > 0:
    print('You typed an invalid number. You lose.')
computer = random.randint(0,2)
game = []
game.append(user_input)
game.append(computer)

print(game_images[user_input])
print(game_images[computer])


if game == [0,1]:
    print('You lose!')
elif game == [1,1]:
    print("It's a draw!")
elif game == [2,1]:
    print('You win!')
elif game == [1,0]:
    print('You win!')
elif game == [2,0]:
    print('You lose!')
elif game == [0,0]:
    print("It's a draw!")
elif game == [1,2]:
    print('You lose!')
elif game == [2,2]:
    print("It's a draw!")
elif game == [0,2]:
     print('You win!')