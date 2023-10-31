iter_permutations = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 4, 0, 0, 0],
    [1, 2, 0, 3, 0, 0, 0],
    [1, 3, 0, 2, 0, 0, 0],
    [1, 4, 0, 1, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0, 0],
    [2, 2, 0, 0, 0, 0, 0],
    [2, 3, 0, 0, 0, 0, 0],
    [2, 4, 0, 0, 0, 0, 0],
    [3, 0, 0, 4, 0, 0, 0],
    [3, 1, 0, 2, 0, 0, 0],
    [3, 2, 0, 0, 0, 0, 0],
    [3, 3, 0, 0, 0, 0, 0],
    [3, 4, 0, 0, 0, 0, 0],
    [4, 0, 0, 3, 0, 0, 0],
    [4, 1, 0, 0, 0, 0, 0],
    [4, 2, 0, 0, 0, 0, 0],
    [4, 3, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0],
    [5, 1, 0, 0, 0, 0, 0],
    [5, 2, 0, 0, 0, 0, 0],
    [5, 3, 0, 0, 0, 0, 0],
    [5, 4, 0, 0, 0, 0, 0]
]


def frequency_of_max(sequence):
    max_value = max(sequence)
    return sequence.count(max_value)

results = []

# Generate combinations for subjects
for subject_values in iter_permutations:
    # print(subject_values)
    sum_value = sum(subject_values)
    max_value = max(subject_values)
    freq_max_value = frequency_of_max(subject_values)
    results.append((subject_values, sum_value, max_value, freq_max_value))

def custom_sort(item):
    subject_values, sum_value, max_value, freq_max_value = item
    return sum_value, max_value, freq_max_value

sorted_results = sorted(results, key=custom_sort)

prev_sum = None
prev_max = None
matrix = [[]]

# print(product)
for result in sorted_results:
    subject_values, sum_value, max_value, freq_max_value = result
    if prev_sum is not None and sum_value != prev_sum:
        matrix[-1].sort(key=lambda x: (x[2], x[3]))
        matrix.append([])
    matrix[-1].append((subject_values, sum_value, max_value, freq_max_value))
    prev_sum = sum_value
    prev_max = max_value

matrix[-1].sort(key=lambda x: (x[2], x[3]))

final_matrix=[]

# Print the matrix
for row in matrix:
    for item in row:
        final_matrix.append(item[0])

for row in final_matrix:
    print(row)
