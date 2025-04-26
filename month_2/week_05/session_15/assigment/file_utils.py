def read_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except Exception as e:
        print(str(e))

def write_file(filename, content):
    try:
        with open(filename, 'w') as file:
            file.write(content)
    except Exception as e:
        print(str(e))

def append_file(filename, content):
    try:
        with open(filename, 'a') as file:
            file.write(content)
    except Exception as e:
        print(str(e))
def count_lines(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
        return len(lines)
    except Exception as e:
        print(str(e))
def count_words(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return len(content)
    except Exception as e:
        print(str(e))
def search_text(filename, search_term):
    try:
        with open(filename, 'r') as file:
            content = file.readlines()
            lines = []
            for i in content:
                if search_term.lower() in i.lower():
                    lines.append(i)
            return lines
    except Exception as e:
        print(str(e))