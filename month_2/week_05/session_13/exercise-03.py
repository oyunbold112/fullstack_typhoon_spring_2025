"""
Дасгал 8: Үг Тоологч

Зааварчилгаа:
1. Хэд хэдэн догол мөртэй текст бүхий 'sample_text.txt' нэртэй файл үүсгэнэ үү
2. Файлыг уншиж үг бүр хэдэн удаа гарч ирснийг тоолох функцийг гүйцээнэ үү
3. Үр дүнг давтамжаар нь эрэмбэлж хэвлэнэ үү (хамгийн их давтагдсан үгүүд эхэндээ)
4. Том, жижиг үсгийг ялгахгүй ('Word' ба 'word'-г ижил үг гэж үзнэ)
5. Үндсэн цэг, таслалуудыг арилгана уу

Сурах зорилтууд:
- Текст файл уншиx
- Текст боловсруулах
- Тоолоход толь бичиг (dictionary) ашиглах
- Үр дүнг эрэмбэлэх
"""

def count_words(filename):
    """
    Текст файл доторх үг бүрийн давтамжийг тоолно.
    
    Args:
        filename (str): Шинжлэх файлын нэр
        
    Returns:
        dict: Үгсийг түлхүүр, тоог утга болгосон толь бичиг
    """
    # Таны код энд
    word_counts = {}
    content = ''
    
    # Файлыг уншина
    with open('sample_text.txt', 'r') as file:
        content = file.read()
        file.close()
    
    # Үгсийг тоолно
    content_splited = content.split(" ")
    for i in content_splited:
        i = i.lower()
        for char in '.,?!;:()[]{}""' "":
            i = i.replace(char, "")
        if i in word_counts.keys():
            word_counts[i] += 1
        else:
            word_counts[i] = 1
    
    # Үгийн тооллогын толь бичгийг буцаана
    return word_counts


def print_word_frequencies(word_counts, top_n=None):
    """
    Үгс болон тэдгээрийн давтамжийг давтамжаар нь эрэмбэлж хэвлэнэ.
    
    Args:
        word_counts (dict): Үгсийг түлхүүр, тоог утга болгосон толь бичиг
        top_n (int, optional): Өгөгдсөн бол, зөвхөн хамгийн их давтамжтай N үгийг хэвлэнэ
    """
    # Таны код энд
    
    # Үгийн тоолуурыг давтамжаар эрэмбэлнэ (их нь эхэндээ)
    

    sorted_dict_values = dict(sorted(word_counts.items(), key=lambda item: item[1], reverse=True))

    
    # Үр дүнг хэвлэнэ
    count = 0
    top_dicts = []
    for key, value in sorted_dict_values.items():
        if count < top_n:
            print(f"{key}: {value}")
        else:
            break
        count += 1


# Програмыг ажиллуулна
try:
    word_counts = count_words('sample_text.txt')
    print("Үгийн давтамжууд:")
    print_word_frequencies(word_counts, top_n=10)  # Хамгийн их давтамжтай 10 үгийг хэвлэнэ
except FileNotFoundError:
    print("Алдаа: 'sample_text.txt' файл олдсонгүй.")
    print("Энэ програмыг ажиллуулахын өмнө текст агуулсан энэ файлыг үүсгэнэ үү.")
"""
Жишээ гаралт (таны sample_text.txt агуулгаас хамаарч өөр байж болно):
Үгийн давтамжууд:
нь: 15
ба: 12
руу: 10
-ийн: 9
нэг: 8
дотор: 7
юм: 6
тэр: 5
тулд: 4
энэ: 4
"""