# previously:
# 1.single time table generated in 2x2 format
# 2.responsive time table from the initial list,needed to add
#   morning evening clash,and all the slots
# 3.not considering the empty slot

# to be done
# 1.adding new slots

# MORNING Normal to binary table
M_and_E_normal_to_binary={
    "A1": ["00", "21"],
    "A2": ["100", "121"],
    "TA1":["42"],
    "TA2":["142"],
    "TAA1":["14"],
    "TAA2":["114"],
    "B1": ["10", "31"],
    "B2": ["110", "131"],
    "TB1":["03"],
    "TB2":["103"],
    "TBB1":["24"],
    "TBB2":["124"],
    "C1": ["20", "41"],
    "C2": ["120", "141"],
    "TC1":["13"],
    "TC2":["113"],
    "TCC1":["34"],
    "TCC2":["134"],
    "D1": ["02", "30"],
    "D2": ["102", "130"],
    "TD1":["23"],
    "TD2":["123"],
    "TDD1":["44"],
    "TDD2":["144"],
    "E1": ["12", "40"],
    "E2": ["112", "140"],
    "TE1":["33"],
    "TE2":["133"],    
    "F1": ["01", "22"],
    "F2": ["101", "122"],
    "TF1":["43"],
    "TF2":["143"],
    "G1": ["11", "32"],
    "G2": ["111", "132"],
    "TG1":["04"],
    "TG2":["104"],
    "S1": ["115"],
    "S2": ["135"],
    "S3": ["105"],
    "S4": ["125"],
    "S11": ["05"],
    "S15": ["45"],
    "-":["15","25","35","145"],
    "L1":["L00"],
    "L2":["L01"],
    "L3":["L02"],
    "L4":["L03"],
    "L5":["L04"],
    "L6":["L05"],
    "L7":["L10"],
    "L8":["L11"],
    "L9":["L12"],
    "L10":["L13"],
    "L11":["L14"],
    "L12":["L15"],
    "L13":["L20"],
    "L14":["L21"],
    "L15":["L22"],
    "L16":["L23"],
    "L17":["L24"],
    "L18":["L25"],
    "L19":["L30"],
    "L20":["L31"],
    "L21":["L32"],
    "L22":["L33"],
    "L23":["L34"],
    "L24":["L35"],
    "L25":["L40"],
    "L26":["L41"],
    "L27":["L42"],
    "L28":["L43"],
    "L29":["L44"],
    "L30":["L45"],
    "L31":["L100"],
    "L32":["L101"],
    "L33":["L102"],
    "L34":["L103"],
    "L35":["L104"],
    "L36":["L105"],
    "L37":["L110"],
    "L38":["L111"],
    "L39":["L112"],
    "L40":["L113"],
    "L41":["L114"],
    "L42":["L115"],
    "L43":["L120"],
    "L44":["L121"],
    "L45":["L122"],
    "L46":["L123"],
    "L47":["L124"],
    "L48":["L125"],
    "L49":["L130"],
    "L50":["L131"],
    "L51":["L132"],
    "L52":["L133"],
    "L53":["L134"],
    "L54":["L135"],
    "L55":["L140"],
    "L56":["L141"],
    "L57":["L142"],
    "L58":["L143"],
    "L59":["L144"],
    "L60":["L145"],
    }

M_E_binary_to_normal={
    "00": "A1",
    "01": "F1",
    "02": "D1",
    "03": "TB1",
    "04": "TG1",
    "05":"S11",
    "10": "B1",
    "11": "G1",
    "12": "E1",
    "13": "TC1",
    "14": "TAA1",
    "15":"-",
    "20": "C1",
    "21": "A1",
    "22": "F1",
    "23": "TD1",
    "24": "TBB1",
    "25":"-",
    "30": "D1",
    "31": "B1",
    "32": "G1",
    "33": "TE1",
    "34": "TCC1",
    "35":"-",
    "40": "E1",
    "41": "C1",
    "42": "TA1",
    "43": "TF1",
    "44": "TDD1",
    "45":"S15",
    "L100": "L31",
    "L101": "L32",
    "L102": "L33",
    "L103": "L34",
    "L104": "L35",
    "L105": "L36",
    "L110": "L37",
    "L111": "L38",
    "L112": "L39",
    "L113": "L40",
    "L114": "L41",
    "L115": "L42",
    "L120": "L43",
    "L121": "L44",
    "L122": "L45",
    "L123": "L46",
    "L124": "L47",
    "L125": "L48",
    "L130": "L49",
    "L131": "L50",
    "L132": "L51",
    "L133": "L52",
    "L134": "L53",
    "L135": "L54",
    "L140": "L55",
    "L141": "L56",
    "L142": "L57",
    "L143": "L58",
    "L144": "L59",
    "L145": "L60",
    "L00": "L1",
    "L01": "L2",
    "L02": "L3",
    "L03": "L4",
    "L04": "L5",
    "L05": "L6",
    "L10": "L7",
    "L11": "L8",
    "L12": "L9",
    "L13": "L10",
    "L14": "L11",
    "L15": "L12",
    "L20": "L13",
    "L21": "L14",
    "L22": "L15",
    "L23": "L16",
    "L24": "L17",
    "L25": "L18",
    "L30": "L19",
    "L31": "L20",
    "L32": "L21",
    "L33": "L22",
    "L34": "L23",
    "L35": "L24",
    "L40": "L25",
    "L41": "L26",
    "L42": "L27",
    "L43": "L28",
    "L44": "L29",
    "L45": "L30",
    "100": "A2",
    "101": "F2",
    "102": "D2",
    "103": "TB2",
    "104": "TG2",
    "105":"S3",
    "110": "B2",
    "111": "G2",
    "112": "E2",
    "113": "TC2",
    "114": "TAA2",
    "115":"S1",
    "120": "C2",
    "121": "A2",
    "122": "F2",
    "123": "TD2",
    "124": "TBB2",
    "125": "S4",
    "130": "D2",
    "131": "B2",
    "132": "G2",
    "133": "TE2",
    "134": "TCC2",
    "135":"S2",
    "140":"E2",
    "141":"C2",
    "142": "TA2",
    "143": "TF2",
    "144": "TDD2",
    "145":"-",
    }


# functions
# binary slot converter
def normal_to_bin(initial):
    normaltobinary = M_and_E_normal_to_binary
    binslots = []
    for i in range(len_inital):
        d = initial[i][0]
        newd = {}
        for key, value in d.items():
            v = value
            v1=[]
            for j in range(len(v)):
                # v[j] = normaltobinary[v[j]]
                for k in range(len(normaltobinary[v[j]])):
                    v1.append(normaltobinary[v[j]][k])
            newd[key] = v1
        newl = []
        newl.append(newd)
        binslots.append(newl)
    return binslots


# bin to normal converter
binarytonormal = M_E_binary_to_normal


def bin_to_normal(tt):
    normal = {}
    for k, v in tt.items():
        normal[binarytonormal[k]] = v
    return normal

def minimum_slots():
    c=0
    for i in range(len(binslots)):
        c+=len(list(binslots[i][0].values())[0])
    return c

# values
initial = [
    # WebProg
    [{
        "Dhavakumar.P": ["TG2", "L7","L8","L23","L24"],
        "U.Vignesh": ["TG2","L11","L12","L19","L20"],
        "Rama Parvathy L": ["TG2", "L21","L22","L29","L30"],
        "M.Marimuthu": ["TG2", "L7","L8","L23","L24"],
        "S.Prabu": ["TG2", "L9","L10","L25","L26"],
        "A.B.Ahadit": ["TG2", "L3","L4","L27","L28"],
    }],
    # dATABASE
    [{
        "Muralidhar": ["D2","TD2","L1","L2"],
        "Jani Anbarasi L": ["D2","TD2","L19","L20"],
        "Abishi Chowdhury": ["D2","TD2","L25","L26"],
        "Leninisha Shanmugam": ["D2","TD2","L27","L28"],
        "L.M. Jenila Livingston": ["D2","TD2","L9","L10"],
    }],
    # CAO
    [{
        "Menaka Pushpa": ["F2","TF2"],
        # "R.Renuka Devi": ["F2","TF2"],
        # "K M MONICA": ["F2","TF2"],
        # "Vaidehi Vijayakumar": ["F2","TF2"],
        # "Deepa Nivethika": ["F2","TF2"],
        # "Manjula V": ["F2","TF2"],
    }],
    # ML
    [{
        "SAJIDHA S A": ["C2","TC2","L21","L22"],
        # "Priyadarshini.J": ["C2","TC2","L21","L22"],
    }],
    # CMPLX VARIABLE AND LINEAR ALGEBRA
    [{
        "COMPLEX": ["A2","TA2","TAA2"],
    }],
    # OS
    [{
        "OS": ["E2","TE2","L3","L4"],
    }],
    # STS
    [{
        "FACE": ["B2","TB2"],
    }]
]

len_inital = len(initial)

possible = []

binslots = normal_to_bin(initial)
minimumslots=minimum_slots()

# print(binslots)
# print(initial)


# looping through the slots
def notempty(tt):
    c=0
    for k, v in tt.items():
        if v != "":
            c+=1
    if (c==minimumslots):
        return True
    return False


def emptyslots(tt):
    l = []
    for k, v in tt.items():
        if v == "":
            l.append(k)
    return l


def is_subsequence(subseq, sequence):
    sequence_set = set(sequence)
    for x in subseq:
        if x in sequence_set or ("L" + x) in sequence_set:
            continue
        else:
            return False
    return True


# making all possible iterator list

# initializing iterlist from initial
def iterlist_generator(initial):
    iterlist = []
    for i in range(len_inital):
        len_dict = len(initial[i][0])
        iterlist.append(len_dict - 1)
    return iterlist


def generate_permutations(iterlist):
    def backtrack(index):
        if index == len(iterlist):
            result.append(iterlist.copy())
            return

        for i in range(max_value[index] + 1):
            iterlist[index] = i
            backtrack(index + 1)

    result = []
    max_value = iterlist.copy()
    backtrack(0)
    return result


iterlist = iterlist_generator(initial)
iter_permutations = generate_permutations(iterlist)

# printing iter_permutations
# for(i) in range(len(iter_permutations)):
#     print(iter_permutations[i])

def sort_matrix(matrix):
    # create a list of tuples containing the sum of each row and the row itself
    row_sums = [(sum(row), row) for row in matrix]
    # sort the list of tuples in descending order by the sum of each row
    row_sums.sort(reverse=True)
    # create a new matrix with the sorted rows
    sorted_matrix = [row for _, row in row_sums]
    sorted_matrix.reverse()
    return sorted_matrix

sorted_matrix = sort_matrix(iter_permutations)
for row in sorted_matrix:
    print(row)

# generating timetables
def generate_timetable():
    timetables = []
    for n in range(len(iter_permutations)):
        tt = {
            "00": "",
            "01": "",
            "02": "",
            "03": "",
            "04": "",
            "05": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "20": "",
            "21": "",
            "22": "",
            "23": "",
            "24": "",
            "25": "",
            "30": "",
            "31": "",
            "32": "",
            "33": "",
            "34": "",
            "35": "",
            "40": "",
            "41": "",
            "42": "",
            "43": "",
            "44": "",
            "45": "",
            "100": "",
            "101": "",
            "102": "",
            "103": "",
            "104": "",
            "105": "",
            "110": "",
            "111": "",
            "112": "",
            "113": "",
            "114": "",
            "115": "",
            "120": "",
            "121": "",
            "122": "",
            "123": "",
            "124": "",
            "125": "",
            "130": "",
            "131": "",
            "132": "",
            "133": "",
            "134": "",
            "135": "",
            "140": "",
            "141": "",
            "142": "",
            "143": "",
            "144": "",
            "145": "",
            "L00": "",
            "L01": "",
            "L02": "",
            "L03": "",
            "L04": "",
            "L05": "",
            "L10": "",
            "L11": "",
            "L12": "",
            "L13": "",
            "L14": "",
            "L15": "",
            "L20": "",
            "L21": "",
            "L22": "",
            "L23": "",
            "L24": "",
            "L25": "",
            "L30": "",
            "L31": "",
            "L32": "",
            "L33": "",
            "L34": "",
            "L35": "",
            "L40": "",
            "L41": "",
            "L42": "",
            "L43": "",
            "L44": "",
            "L45": "",
            "L100": "",
            "L101": "",
            "L102": "",
            "L103": "",
            "L104": "",
            "L105": "",
            "L110": "",
            "L111": "",
            "L112": "",
            "L113": "",
            "L114": "",
            "L115": "",
            "L120": "",
            "L121": "",
            "L122": "",
            "L123": "",
            "L124": "",
            "L125": "",
            "L130": "",
            "L131": "",
            "L132": "",
            "L133": "",
            "L134": "",
            "L135": "",
            "L140": "",
            "L141": "",
            "L142": "",
            "L143": "",
            "L144": "",
            "L145": "",
        }
        for i in range(len_inital):
            sublist = list(binslots[i][0].items())[iter_permutations[n][i]]
            k = sublist[0]
            v = sublist[1]
            result = is_subsequence(v, emptyslots(tt))
            # print(v,emptyslots(tt))
            # print(k,v,result)
            if result==False:
                break

            if result:
                for j in range(len(v)):
                    tt[v[j]] = k
        if notempty(tt):
            timetables.append(tt)
    return timetables


bin_timetables = generate_timetable()
# print(bin_timetables)
# print(len(bin_timetables))

# displaying time table
# for i in range(len(bin_timetables)):
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "0" or k[:-1] == "10"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "L0" or k[:-1] == "L10"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "1" or k[:-1] == "11"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "L1" or k[:-1] == "L11"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "2" or k[:-1] == "12"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "L2" or k[:-1] == "L12"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "3" or k[:-1] == "13"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "L3" or k[:-1] == "L13"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "4" or k[:-1] == "14"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print()
#     for key, v in bin_timetables[i].items():
#         k = key
#         if (k[:-1] == "L4" or k[:-1] == "L14"):
#             print(format(binarytonormal[key], "<5"), v, end=" || ")
#     print("\n")


# to get the slot teacher aand subject data


# to form js file
import json

def combine_dicts_to_js(bin_timetables, js_file_path):
   
    # Write the JSON data to a JavaScript file
    with open(js_file_path, 'w') as js_file:
        js_file.write(f'const alldata = {bin_timetables}')
        js_file.write('\nexport default alldata;')

    print(f'Data has been written to {js_file_path}')


# Specify the JavaScript file path
js_file_path = r'C:\Users\RITESH PRADHAN\Documents\GitHub\ProjectML\ffcs-helper\vite-project\src\data\output.js'

# Call the function to combine dictionaries and create the JavaScript file
combine_dicts_to_js(bin_timetables, js_file_path)