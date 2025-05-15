import json

# JSON - javascript object notation
# Python object
data = {
    'name': 'John',
    'age': 30,
    'city': 'New York',
    'languages': ["Python", "Javascript", "SQL"],
    'is_employee': True,
    'address': {"street": "123 Main St", "zip":"10001"},
}

with open("output.json", "w") as file:
    json.dump(data, file, indent=4) # indent for pretty formatting

# Converting Python object into String
json_string = json.dumps(data, indent=4)
print(json_string)

parsed_data = json.loads(json_string)
print(parsed_data["name"])