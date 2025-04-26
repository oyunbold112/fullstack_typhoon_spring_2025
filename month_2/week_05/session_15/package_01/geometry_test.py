"""geometry packetiig turshih"""

# Packetiig importloh
import geometry
from geometry import shapes, utils

#Klassuudiig shuud ashiglah (init,py-d importloson uchir)
circle = geometry.Circle(5,3,4)
print(f"Toirgiin talbai: {circle.area():.2f}")
print(f"Toirgiin perimeter: {circle.perimeter():.2f}")
print(
    f"""Toirgiin towoos coordinatiin ehlel hurtelh zai:
{circle.distance_from_origin():.2f}    
"""
)

# Todorhoi modullas importloh

rect = shapes.Rectangle(4,6)
print(f"Tegsh ontsogtiin talbai: {rect.area}")
print(f"Tegsh ontsogtiin perimeter: {rect.perimeter}")
# funktsiig ashiglah
dist = utils.distance(0,0,3,4)
mid = utils.midpoint(0,0,6,8)
print(f"Zai: {dist}")
print(f"Dund tseg: {mid}")