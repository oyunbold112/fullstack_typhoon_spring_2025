import random

scores = []

for i in range(50):
    scores.append(random.randint(0,100))

print(scores)
print(max(scores))