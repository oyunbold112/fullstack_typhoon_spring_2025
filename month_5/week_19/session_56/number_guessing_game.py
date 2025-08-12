import random
def play_game():
    """Тоо таах тоглоомыг ажиллуулах үндсэн функц."""
    # --- 1. Хэцүү байдлын түвшнээс хамаарч тоглоомыг тохируулах ---
    while True:
        print("Тоо таах тоглоомд тавтай морил! 🎮 ")
        difficulty = input("""Хэцүү байдлын түвшнийг сонгоно уу. 'хялбар',
        'дунд', 'хэцүү' гэж бичнэ үү: """).lower()
        # TODO
        range_end = 0
        attempts = 0
        if difficulty == 'hetsuu':
            range_end = 100
            attempts = 5
        elif difficulty == 'dund':
            range_end = 100
            attempts = 10
        elif difficulty == 'hyalbar':
            attempts = 99999
            range_end = 50
        number_to_guess = random.randint(1, range_end -1)
        print(f"\nБи 1-ээс {range_end}-ийн хооронд нэг тоо бодсон.")
        # Хэрэв та "булхайдмаар" байвал доорх мөрийг сэргээнэ үү!
        # print(f"Нууц тоо бол {number_to_guess}")
        guesses_left = attempts
        guess_count = 0
        # --- 2. Үндсэн таах давталт ---
        while guesses_left > 0:
            print(f'Tand {guesses_left} bolomj baina!')
            taasan_too = int(input('too ogno uu: '))
            if taasan_too > number_to_guess:
                print('het ondor baina!')
            elif taasan_too < number_to_guess:
                print('het baga baina!')
            elif taasan_too == number_to_guess:
                print('Zow taalaa!')
                break
            guesses_left -= 1
            # TODO
            print()
            # --- 4. Ялагдсан үеийн нөхцөл ---
        if guesses_left == 0:
            print("\nТаны таах боломж дууслаа. Та ялагдлаа. 😞 ")
            print(f"Зөв тоо нь {number_to_guess} байсан.")
            # --- Дахин тоглох боломжийг олгох үндсэн програм ---
            print("Тоо таах тоглоомд тавтай морил! 🎮 ")
            break
        else:
             break

play_game()
while True:
            play_again = input("\nДахин тоглох уу? (тийм/үгүй): ").lower()
            if play_again == "tiim":
                play_game()
            print("Тоглосонд баярлалаа. Баяртай.")
            break