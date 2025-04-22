# utga butsaah
def square(x):
    """
    toonii kwadratiig ol
    args: 
    x (int/float: kwadratiig oloh too)
    returns:
    int/float: toonii kwadratiig
    """
    return x**2

# funktsiig duudah
result = square(4)
print(result) #16

def numbers_stats(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    max_num = max(numbers)
    min_num = min(numbers)
    return total, average, max_num, min_num

# funktsiig duudah
numbers = [5, 10, 15, 20, 25]
total, average, max_num, min_num = numbers_stats(numbers)

print(f"Niilber: {total}")
print(f"Dundaj: {average}")
print(f"Hamgiin ih: {max_num}")
print(f"Hamgiin baga: {min_num}")