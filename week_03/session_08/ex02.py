# random number buyu duriin utga

import random

roll_dice = random.randint(1,6)
print(roll_dice)

is_heads = random.choice([True,False])
print("You flipped heads: " + str(is_heads))

# 4 shirheg hoolnii tsugluulga list uusgeed tuuniigee randomoor hewlej
# haruulna uu

dorwon_hool = ['tsuivan', 'budaatai huurga', 'shol', 'burger']
randomtoo = random.randint(0, 3)
print(dorwon_hool[randomtoo])