import pandas as pd
from collections import Counter
from Data import Total_courses, Total_faculties

# import random

# # TO CREATE THE WHOLE DATASET OF ALL THE STUDENTS IN THE COLLEGE

# # Create lists for different columns
# student_names = ["Student" + str(i) for i in range(1, 11)]
# reg_ids = [2021000 + i for i in range(1, 11)]
# sem_numbers = [random.randint(1, 8) for _ in range(10)]
# subjects = ["Math", "Science", "Engineering", "History", "Art",
#             "Physics", "Chemistry", "Biology", "Computer Science", "Music"]
# faculty_names = ["Dr. Smith", "Prof. Brown", "Dr. Johnson", "Prof. Green", "Dr. Lee",
#                  "Prof. White", "Dr. Davis", "Prof. Black", "Dr. Martinez", "Prof. Harris"]
# preferred_faculties = faculty_names  # Assuming preferred faculties are the same as faculty names

# # Create a dictionary for the dataset
# data = {
#     "Student Name": student_names,
#     "RegID": reg_ids,
#     "Semester Number": sem_numbers,
#     "Subject": random.choices(subjects, k=10),
#     "Faculty Name": random.choices(faculty_names, k=10),
#     "Preferred Faculty": random.choices(preferred_faculties, k=10)
# }

# # Create a DataFrame
# df = pd.DataFrame(data)

# # Save DataFrame to a CSV file
# df.to_csv("Whole_Data.csv", index=False)


print("Total faculties: ", len(Total_faculties))
print("Total courses : ", len(Total_courses))


# ........................................................................................


# CREATE THE DATASET OF STUDENT STUDYING CURRENT SEMESTER

# Assuming you are in semester 2
# semester_number = 2
# n = int(input("Enter the number of subjects for semester 2: "))
# subjects_and_faculties = []
# sem2_fac = []
# for i in range(n):
#     subject = input(f"Enter the name of subject {i + 1}: ")
#     faculty = input(f"Enter the name of faculty for {subject}: ")
#     subjects_and_faculties.append({"Subject": subject, "Faculty": faculty})
#     sem2_fac.append(faculty)
# print()
# print(sem2_fac)
# print()


# Faculty in Sem 2
sem2_fac = ['Dr. Manisha Kumar', 'Dr. Tanvi Desai', 'Prof. Arjun Verma', 'Prof. Manoj Kumar', 'Prof. Varsha Mehta']


# ........................................................................................


# TEACHER MAPING SEM2 TO ALL SEMS
# Here I am finding out all the student's regIDs those who once had those teachers that are mentioned in list sem2_fac

df = pd.read_csv('Whole_Data.csv')
SEM3_SUB1 = ["Prof. Rahul Kapoor", "Prof. Tanvi Kapoor", "Prof. Arjun Verma", "Prof. Manoj Kumar", "Prof. Varsha Mehta"] 
SEM3_SUB2 = ["Prof. Rajat Kumar","Dr. Shweta Sharma","Prof. Vivek Sharma","Dr. Snehal Desai"]
SEM3_SUB3 = ["Dr. Deepak Sharma","Prof. Pooja Verma"]
SEM3_SUB4 = ["Prof. Neha Verma","Dr. Arjun Mehta","Prof. Ritu Khanna"]
SEM3_SUB5 = ["Prof. Rishi Patel","Dr. Anjali Kapoor"]
NET_SEM3 =  SEM3_SUB1 + SEM3_SUB2 + SEM3_SUB3 + SEM3_SUB4 + SEM3_SUB5
print("Net Sem3 Faculties : ", NET_SEM3)
print()
filtered_data = df[df['Faculty Name'].isin(sem2_fac)]
student_regids = filtered_data['RegID'].tolist()
print("Chosen RegIDs : ", student_regids)
print()


# ........................................................................................

# .............SUM 1...........
print("SUM1")
filtered_students = df[df['RegID'].isin(student_regids)]
preferred_faculties = filtered_students.iloc[:, 6].tolist()
print("From RegID --> Preffered Faculties")
print(preferred_faculties)
print("Total : ", len(preferred_faculties))
print()
print("Preffered Faculties --> Filtered Preffered Faculties")
filtered_list_preferred_faculties1 = [x for x in preferred_faculties if x in NET_SEM3]
print(filtered_list_preferred_faculties1)
print(len(filtered_list_preferred_faculties1))
print()
faculty_frequency1 = Counter(filtered_list_preferred_faculties1)
print("Preffered Faculties Frequency based on Student Choosen")
for faculty, count in faculty_frequency1.items():
    print(f'Faculty: {faculty}, Frequency: {count}')
print(faculty_frequency1)
print()


# .............SUM 2...........
print("SUM2")
all_preferred_faculties = df.iloc[:, 6].dropna().tolist()
print("All Preferred Faculties")
print(all_preferred_faculties)
print("Total : ", len(all_preferred_faculties))
print()
print("All Preffered Faculties --> Filtered Preffered Faculties")
filtered_list_preferred_faculties2 = [y for y in all_preferred_faculties if y in NET_SEM3]
print(filtered_list_preferred_faculties2)
print(len(filtered_list_preferred_faculties2))
print()
faculty_frequency2 = Counter(filtered_list_preferred_faculties2)
print("Preffered Faculties Frequency based on Student Choosen")
for faculty, count in faculty_frequency2.items():
    print(f'Faculty: {faculty}, Frequency: {count}')
print(faculty_frequency2)
print()


# .............SUM 3...........
print("SUM3")
filtered_df = df[df['Faculty Name'].isin(NET_SEM3)]
print(filtered_df)
faculty_ratings_sum = filtered_df.groupby('Faculty Name')['Rating_Faculty'].sum().reset_index()
faculty_frequency3 = dict(zip(faculty_ratings_sum['Faculty Name'], faculty_ratings_sum['Rating_Faculty']))
print(faculty_frequency3)
print()
print()

# ........................................................................................


combined_counts = {}
for faculty, count in faculty_frequency1.items():
    combined_counts[faculty] = combined_counts.get(faculty, 0) + count
for faculty, count in faculty_frequency2.items():
    combined_counts[faculty] = combined_counts.get(faculty, 0) + count
for faculty, count in faculty_frequency3.items():
    combined_counts[faculty] = combined_counts.get(faculty, 0) + count
print("Combined count :-")
print(combined_counts)
print()
for faculty, count in combined_counts.items():
    print(f'Faculty: {faculty}, Frequency: {count}')


# ........................................................................................


print()
print()
print("Final sorted list of teacher :-")
print()
sorted_subjects = sorted([SEM3_SUB1, SEM3_SUB2, SEM3_SUB3, SEM3_SUB4, SEM3_SUB5],
key=lambda subjects: sum(combined_counts[teacher] for teacher in subjects),
reverse=True)
for subjects in sorted_subjects:
    print(subjects)


# subjects = [
#     (SEM3_SUB1 ,["Prof. Rahul Kapoor", "Prof. Tanvi Kapoor", "Prof. Arjun Verma", "Prof. Manoj Kumar", "Prof. Varsha Mehta"]),
#     (SEM3_SUB2 ,["Prof. Rajat Kumar","Dr. Shweta Sharma","Prof. Vivek Sharma","Dr. Snehal Desai"]),
#     (SEM3_SUB3 ,["Dr. Deepak Sharma","Prof. Pooja Verma"]),
#     (SEM3_SUB4 ,["Prof. Neha Verma","Dr. Arjun Mehta","Prof. Ritu Khanna"]),
#     (SEM3_SUB5 ,["Prof. Rishi Patel","Dr. Anjali Kapoor"])
# ]
# sorted_subjects = sorted(subjects,
#                           key=lambda x: sum(combined_counts[teacher] for teacher in x[1]),
#                           reverse=True)

# for subject, teachers in sorted_subjects:
#     print(f"{subject} = {teachers}")

