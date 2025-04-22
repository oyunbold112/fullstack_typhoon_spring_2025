# Recapture
# tuple ashiglaad create_point gedeg funkts uusgene uu
# enehuu funkts ni x, y gedeg parametraar tuple butsaana

import math

def create_point(x, y):
    return (x, y)

# calculate_distance gedeg funkts todorhoilood point1, point2 gedeg
# tuple parametraar awaad kartesian produkt oldog bolgooroi

def calculate_distance(point1, point2):
    return math.sqrt((point1[0] + point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)

# ASHIGLAH JISHEE
print(calculate_distance((1,3), (1,6)))
# Python sets

# husnegt haaltaar olonlog uusgeh

# dawtagdsan elemntuud awtomataar arilna
set2 = {1,2,2,3,4,4,5}
print(set2)

# set() funktseer olonog uusgeh
set3 = set([1,2,3,4,5])

# Hooson olonlog
empty_set = set([1,2,3,4,5])

#Temdegt mornoos olonlog uusgeh
letters = set("hello")
print(letters) # {'h', 'e', 'l', 'o'}

# Olonlogiin undsen uildluud
# Olonlog uusgeh
fruits = {"alim", "banana", "jurj"}

# Element nemeh
fruits.add("usan uzem")
print(fruits)

# Olon element nemeh
fruits.update(["mango", "kiwi"])
print(fruits) # {'alim', 'banana', 'jurj', 'usan uzem'}

# Element hasah
fruits.remove("banana")
print(fruits)
fruits.discard("liir")

# suuliin elementiig hasah
popped = fruits.pop()
print(popped)
print(fruits)

# Buh elementiig ustgah
fruits.clear()
print(fruits)

# Olonlogiin logic uildluud
a = {1,2,3,4,5}
b = {4,5,6,7,8}

# Negdel (Union) - hoyr olonlogiin buh elementuud
print(a|b) # {1,2,3,4,5,6,7,8}
print(a.union(b)) # {1,2,3,4,5,6,7,8}

# ogtloltsol (intersection) - hoyr olonlogt baigaa niitleg elementuud
print(a & b) # {4, 5}
print(a.intersection(b))

# ylgawar difference - neg olonlogt baigaa, nogood baihgui elementuud
print(a - b)
print(a.difference(b))

# simmetrik ylgawar (simmetrik difference) - ale neg olonlogt baigaa,
# hoyuland baihgui elementuud
print(a ^ b)
print(a.symmetric_difference(b))

# Olonlogiin shalgah uildluud
a = {1,2,3,4,5}
b = {1,2,3}
c = {6,7,8}

# Ded olonlog mon esehiig shalgah 
print(b.issubset(a))
print(a.issubset(b))

# ogtloltsolgui esehiig shalgah
print(a.isdisjoint(c))

# tentsuu esehiig shalgah
d = {1,2,3,4,5}
print(a == d)

# Olonlogiin hereglee
# Dawhardliig arilgah : jagsaaltiin dawhardsan elementuudiig arilgahad
numbers = [1,2,2,3,4,4,5]
unique_numbers = list(set(numbers))
print(unique_numbers)

# gishuunchleliig shalgah; element olnlogt baigaa esehiig hurdan shalgahad
fruits = {"alim", "banana", "jurj"}
print("alim" in fruits)

# Matematik uildluud; negdel, ogtloltsol, ylgawar zereg uildluuded
# hoyr texted baigaaniitleg ugsuudiig oloh

text1 = 'hello'
tet2 = 'world'
common_letters = set(text1) & set(tet2)
print(common_letters)
#ogogdiig shuuh: dawtagdashgui utguudiig olohod
# hoyr jagsaaltiin niitleg elementuudiig oloh
list1 = [1,2,3,4,5]
list2 = [4,5,6,7,8]
common_elements = list(set(list1) & set(list2))
print(common_elements)

# frozen set uusgeh
frozen = frozenset([1,2,3,4,5])

# logic uildluud hiih bolomjtoi
a = frozenset([1,2,3,4,5])
b = frozenset([4,5,6,7,8])
print(a|b)

# Element nemeh bolomjgui
# frozen.add(6) # attributeerror: 'frozenset' object has no attribute add

# dictionary tulguur bolgon ashiglah bolomjtoi

data = {frozen: "Frozen set tulhuur"}
print(data[frozen])

# exercise 01 enehuu funkts ni ogogdson textiin ugnuudiig toolood
# tegeed heden shirheg usegnuud dawtagdahgui hereglegdej baigaag butsaadag baina.

def count_unique_words(text):
    print(text.split(" "))
    return len(set(text.split(" ")))

text = "bi Python hel surch baina. Python bol mash sonirholtoi hel."
print(f'Dawtagdashgui ugsiin too: {count_unique_words(text)}')

# dawtagdashgui usgiin too: 9