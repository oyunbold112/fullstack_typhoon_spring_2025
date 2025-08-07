import random

def get_word():
    words = ['mongolia', 'hangman', 'clock', 'screen', 'studio', 'standoff']
    return words[random.randint(0,len(words))]

def display_word(word, guessed_letters):
    if len(guessed_letters) == 0:
        return '-' * len(word)
    else:
        current_word = ''
        for i in word:
            if i in guessed_letters:
                current_word+=i
            else:
                current_word+='_'
        return current_word

def hangman():
    word_to_guess = get_word()
    guessed_letters = []
    attempts = 6
    print("Тавтай морилно уу, Үг Таах Тоглоомд!")
    print("Үгийг таана уу. Та 6 оролдлоготой.")

    while attempts > 0:
        if attempts == 0:
            print('ta hojigloo!')
        else:
            taamag = input('useg eswel ug oruulna uu: ')
            attempts = attempts - 1
            if len(taamag) == 1:
                guessed_letters.append(taamag)
            else:
                if taamag == word_to_guess:
                    print('zuw baina ci ylla!')
                    break
                else:
                    print('buruu baina. ')
            
            odoogiin_ug = display_word(word_to_guess, guessed_letters)
            print('odoogiin ug: ' + odoogiin_ug)
            if odoogiin_ug == word_to_guess:
                print('nice ci yllaa!')
            print("Үгийг таана уу. Та " + str(attempts) + " оролдлоготой.")
        

if __name__ == "__main__":
# Энд hangman функцыг дуудаж тоглоомыг эхлүүлнэ.
    hangman()