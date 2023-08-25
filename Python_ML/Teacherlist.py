import execjs

with open('Python_ML\Other.js', 'r') as js_file:
    js_code = js_file.read()

ctx = execjs.compile(js_code)
data = ctx.eval('maindata')  
# print(data)

# Teachers list
subjects_and_professors = {}

for item in data:
    stream = item['stream']
    for semester in stream:
        for subject_data in semester['sem'][1]['subjects']:
            subject = subject_data['id']
            professors_list = [prof['name'] for prof in subject_data['prof']]
            subjects_and_professors[subject] = professors_list

# print(subjects_and_professors)
# for subject_code, professors in subjects_and_professors.items():
#     print(subject_code, ":", professors)
    
