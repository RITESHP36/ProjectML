# previously:
# 1.single time table generated in 2x2 format
# 2.responsive time table from the initial list,needed to add 
#   morning evening clash,and all the slots
# 3.not considering the empty slot 

# to be done
# 1.display using html

# functions
# binary slot converter
def normal_to_bin(initial):
    normaltobinary = {
        "A1": "00",
        "F1": "01",
        "D1": "02",
        "TB1": "03",
        "TG1": "04",
        "B1": "10",
        "G1": "11",
        "E1": "12",
        "TC1": "13",
        "TAA1": "14",
        "C1": "20",
        "A1": "21",
        "F1": "22",
        "TD1": "23",
        "TBB1": "24",
        "D1": "30",
        "B1": "31",
        "G1": "32",
        "TE1": "33",
        "TCC1": "34",
        "E1": "40",
        "C1": "41",
        "TA1": "42",
        "TF1": "43",
        "TDD1": "44",
        "L31": "100",
        "L32": "101",
        "L33": "102",
        "L34": "103",
        "L35": "104",
        "L36": "105",
        "L37": "110",
        "L38": "111",
        "L39": "112",
        "L40": "113",
        "L41": "114",
        "L42": "115",
        "L43": "120",
        "L44": "121",
        "L45": "122",
        "L46": "123",
        "L47": "124",
        "L48": "125",
        "L49": "130",
        "L50": "131",
        "L51": "132",
        "L52": "133",
        "L53": "134",
        "L54": "135",
        "L55": "140",
        "L56": "141",
        "L57": "142",
        "L58": "143",
        "L59": "144",
        "L60": "145",
    }
    binslots = []
    for i in range(len_inital):
        sub=initial[i][0]
        d = initial[i][1]
        newd = {}
        for key, value in d.items():
            v = value
            for j in range(len(v)):
                v[j] = normaltobinary[v[j]]
            newd[key] = v
        newL = []
        newL.append(sub)
        newL.append(newd)
        binslots.append(newL)
    # print("BIN: ",binslots)
    return binslots


# bin to normal converter
binarytonormal = {
    "00": "A1",
    "01": "F1",
    "02": "D1",
    "03": "TB1",
    "04": "TG1",
    "10": "B1",
    "11": "G1",
    "12": "E1",
    "13": "TC1",
    "14": "TAA1",
    "20": "C1",
    "21": "A1",
    "22": "F1",
    "23": "TD1",
    "24": "TBB1",
    "30": "D1",
    "31": "B1",
    "32": "G1",
    "33": "TE1",
    "34": "TCC1",
    "40": "E1",
    "41": "C1",
    "42": "TA1",
    "43": "TF1",
    "44": "TDD1",
    "100": "L31",
    "101": "L32",
    "102": "L33",
    "103": "L34",
    "104": "L35",
    "105": "L36",
    "110": "L37",
    "111": "L38",
    "112": "L39",
    "113": "L40",
    "114": "L41",
    "115": "L42",
    "120": "L43",
    "121": "L44",
    "122": "L45",
    "123": "L46",
    "124": "L47",
    "125": "L48",
    "130": "L49",
    "131": "L50",
    "132": "L51",
    "133": "L52",
    "134": "L53",
    "135": "L54",
    "140": "L55",
    "141": "L56",
    "142": "L57",
    "143": "L58",
    "144": "L59",
    "145": "L60",
}



def bin_to_normal(tt):
    normal = {}
    for k, v in tt.items():
        normal[binarytonormal[k]] = v
    return normal

def minimum_slots():
    c=0
    for i in range(len(initial)):
        c+=len(list(initial[i][1].values())[0])
    return c

# values
initial = [
    # BMAT205L
    ["BMAT205L",{  
        "JAYAGOPAL R": ["D1", "TD1","TDD1"],
        "SUMANTHI S": ["D1", "TD1","TDD1"],
        "ANITHA G": ["D1", "TD1","TDD1"],
    }],
    # JAVA
    ["JAVA",{
        "JENILA": ["TCC1", "L37", "L38", "L55", "L56"],
        "KANIMOZHI": ["TCC1", "L31", "L32", "L49", "L50"],
        "DINAKARAN": ["TCC1", "L39", "L40", "L51", "L52"],
    }],
    # DSA
    ["DSA",{
        "UMAMAHESHWARI": ["A1","TA1"],
        "KARTHIKEYAN": ["A1","TA1"],
    }],
    # MPMC
    ["MPMC",{
        "SELEVENDRAN": ["E1","TE1"],
        "SAURABH PAUL": ["E1","TE1"],
    }],
    # TOC
    ["TOC",{
        "BENIL": ["G1","TG1"],
        "RATHNA": ["G1","TG1"],
    }],
    # CN
    ["TOC",{
        "DR.KUMAR": ["F1","TF1"],
        "REKHA": ["F1","TF1"],
    }],
    # STS
    ["STS",{
        "FACE": ["C1","TC1"],
    }]
]
minimumslots=minimum_slots()

len_inital = len(initial)

possible = []

binslots = normal_to_bin(initial)


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
    return all(x in sequence_set for x in subseq)


# making all possible iterator list

# initializing iterlist from initial
def iterlist_generator(initial):
    iterlist = []
    for i in range(len_inital):
        len_dict = len(initial[i][1])
        iterlist.append(len_dict - 1)
    # print("ITERLIST : ",iterlist)
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
    # print(result)
    return result


iterlist = iterlist_generator(initial)
iter_permutations = generate_permutations(iterlist)

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
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "20": "",
            "21": "",
            "22": "",
            "23": "",
            "24": "",
            "30": "",
            "31": "",
            "32": "",
            "33": "",
            "34": "",
            "40": "",
            "41": "",
            "42": "",
            "43": "",
            "44": "",
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
        }
        for i in range(len_inital):
            ttsubject=binslots[i][0]
            sublist = list(binslots[i][1].items())[iter_permutations[n][i]]
            k = list((sublist[0],ttsubject))
            v = sublist[1]
            result = is_subsequence(v, emptyslots(tt))
            # print(k,v,result)
            if result==False:
                break
            if result:
                for j in range(len(v)):
                    tt[v[j]] = k
        if notempty(tt):
            timetables.append(tt)
    return timetables

print()
bin_timetables = generate_timetable()
print(bin_timetables)
# bin timetables for time table display,we now need to display the list of prof 