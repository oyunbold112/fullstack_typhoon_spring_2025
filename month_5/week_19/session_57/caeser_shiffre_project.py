def caeser_cipher(uildel, text, too):
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    result = ''
    if uildel == 'tailah':
        too = -too
    for i in text:
        if i.isdigit(): 
            result += str(int(i) + too) 
            continue
        elif i in '!@#$%^&*()_->+=[./,;:] ':
            result += i
            continue
        usgiin_bairlal = alphabet.index(i)
        if usgiin_bairlal + too > len(alphabet):
            result += alphabet[(usgiin_bairlal + too) % 25 - 1]
        else:
            result += alphabet[usgiin_bairlal + too]
    print(result)

def caeser_shiffre():
    while True:
        print('Caeser shiffre programd tawtai moril!')
        uildel = input('Shifrleh bol shifrleh, Tailah bol tailah gej bichne uu: ')
        text = input('bolowsruulah textee oruulna uu: ')
        too = int(input('shiljuuleh toogoo oruulna uu: '))
        caeser_cipher(uildel, text, too)
        no = input('dahin ajillah uu?')
        if no == 'no':
            break
if __name__ == "__main__":
    caeser_shiffre()