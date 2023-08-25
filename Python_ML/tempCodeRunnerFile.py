
# print()
# with open('public\\new.js', 'r') as js_file:
#     js_data = js_file.read()

# js_data = js_data.replace("id:", "\"id\":")
# js_data = js_data.replace("name:", "\"name\":")
# js_data = js_data.replace("prof:", "\"prof\":")

# data = json.loads(js_data)
# converted_data = {}

# for subject in data['subjects']:
#     subject_name = subject['name']
#     teachers = [prof['name'] for prof in subject['prof']]
#     converted_data[subject_name] = teachers

# print(converted_data)