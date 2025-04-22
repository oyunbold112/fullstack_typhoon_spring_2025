# Advanced File operations

with open('advanced.txt', 'r') as file:
    position = file.tell()
    content = file.read(5)
    file.seek(10)

    content = file.read()
    print(content)

# iterate with line numbers
with open('output.txt', 'r') as file:
    for i, line in enumerate(file, 1):
        print(f"Line: {i}: {line}")


# open binary image file

with open('phone.jpg', 'rb') as file:
    binary_data = file.read()
    print(binary_data)

# copy new image file
with open('copy.jpg', 'wb') as file:
    file.write(binary_data)

# CSV Files handling
with open('data.csv', 'r') as file:
    for line in file:
        values = line.strip().split(',')
        print(values)

with open('output.csv', 'w') as file:
    file.write('Name,Age,City\n')
    file.write('Ronaldo, 40, Arab\n')
    file.write('Messi, 38, Miami')