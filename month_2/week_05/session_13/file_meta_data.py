# File Meta Data
import os

if os.path.exists('advanced.txt'):
    size = os.path.getsize('advanced.txt')
    print(size)
    # get modification time
    mod_time = os.path.getmtime("advanced.txt")

    os.rename('advanced.txt', 'new_advanced.txt')
    os.remove('new_advanced.txt')
    print('removed')

