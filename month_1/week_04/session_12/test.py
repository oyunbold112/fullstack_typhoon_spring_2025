word_char = "cat"
index = 2
letter = "l"
def new_word():
    newer = ""
    for ind, i in enumerate(word_char):
        if ind == index:
            newer+=letter
        else: 
            newer+=i
    return newer

print(new_word())