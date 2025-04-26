from assigment.file_utils import read_file, write_file,append_file,count_lines,count_words,search_text

print(read_file('mongolia.txt'))
print(write_file('new_mongolia.txt', 'Mongol uls'))
print(append_file('mongolia.txt', 'Монгол Улс нь 1,564,116 км2 талбай нутаг дэвсгэртэй, 2022 оны байдлаар 3.398 сая гаруй хүн амтай байна\n Нийт хүн амын 95 хувийг монгол үндэстэн, 4 гаруй хувийг Казах үндэстэн эзэлдэг'))
print(count_lines('mongolia.txt'))
print(count_words('mongolia.txt'))
print(search_text('mongolia.txt', 'Монгол'))