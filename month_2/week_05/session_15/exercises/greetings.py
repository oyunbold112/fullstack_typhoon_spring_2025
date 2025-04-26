"""Mendchilgeenii funktsuudiig aguulsan module."""

# Togtmol utga
DEFAULT_LANGUAGE = "Mongol"

# Huwiin huwisagch (nernii omnoh dooguur zuraas ni )

_counter = 0

def  greet(name, language=DEFAULT_LANGUAGE):
    """Hereglegchid mendchilgee heleh"""
    global _counter
    _counter += 1

    if language.lower() == "mongol":
        return f"Sain baina uu, {name}!"
    elif language.lower() == "angli":
        return f"Hello, {name}!"
    else:
        return f"Mendchilgee, {name}!"
    
def get_greeting_counter():
    """Mendchilgee heden udaa helsniih butsaah"""
    return _counter


# Ene heseg zowhon failiig shuud ajillluulahad guitsetgegdene
if __name__ == "__main.py__":
    print("greetings.py failiig shuud ajilluulj baina")
    print(greet("Bat"))
    print(greet("John", "Angli"))
    print(f"Mendchilgee {get_greeting_counter()} udaa hereglegdsen")
