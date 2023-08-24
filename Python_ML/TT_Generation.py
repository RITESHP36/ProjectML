# previously:
# 1.single time table generated in 2x2 format
# 2.responsive time table from the initial list,needed to add 
#   morning evening clash,and all the slots
# 3.not considering the empty slot 

# to be done
# 1.display using html

# functions
# binary slot converter


from Data_Timtable import normaltobinary, binarytonormal, initial, tt


def normal_to_bin(initial):
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
    return binslots


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


minimumslots=minimum_slots()
len_inital = len(initial)
possible = []
binslots = normal_to_bin(initial)


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

# generating timetables
def generate_timetable():
    timetables = []
    for n in range(len(iter_permutations)):
        
        for i in range(len_inital):
            ttsubject=binslots[i][0]
            sublist = list(binslots[i][1].items())[iter_permutations[n][i]]
            k = list((sublist[0],ttsubject))
            v = sublist[1]
            result = is_subsequence(v, emptyslots(tt))
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