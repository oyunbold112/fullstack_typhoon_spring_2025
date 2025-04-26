import math
import math_utils
from math_utils import Pi, square

print(math.sin(90))
print(math_utils.square(4)) # 16
print(math_utils.cube(4)) # 64

print(square(4))
print(Pi)

import package_01.module01
from package_01.module01 import function1
print(package_01.module01.function1())
print(function1())
