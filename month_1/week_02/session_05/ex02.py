import sys 
import io

print("Aldaanii message", file=sys.stderr)

# standart garald (stdout)
sys.stdout.write("Ene bol standart garalt \n")

# standart aldaa (stderr)
sys.stderr.write("Ene bol aldaanii messeg \n")

#standart orold (stdin)
print("Ymar negen zuil bicheed enter darna uu:")
user_input = sys.stdin.readline().strip()
print(f"Ta bichsen: {user_input}")

# stdout-g tur chigluuleh
original_stdout = sys.stdout
string_io = io.StringIO()
sys.stdout = string_io

print("Ene barigdsan")
print("Ene bas")

sys.stdout = original_stdout
captured_output = string_io.getvalue()
print(f"Barigdsan: {captured_output}")