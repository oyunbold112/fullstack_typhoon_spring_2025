first = input('enter first string: ')
second = input('enter second string: ')

def remove_all_from_string(first, second):
    """BANANAS
    BANAS
    BAS"""
    while second in first:
        for i in range(len(first)):
            if i == first.find(second):
                first = first[:i] + first[i + len(second):]
                break
    return first
            
print(remove_all_from_string(first, second))