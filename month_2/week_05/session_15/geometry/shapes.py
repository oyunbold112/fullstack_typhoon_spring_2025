"""Geometriin dursuudiig aguulsan module"""
import math
from . import utils # Haritsangui import

class Circle:
    """Toirog class."""
    
    def __init__(self, radius, x=0, y=0):
        self.radius = radius
        self.x = x
        self.y = y
    def area(self):
        """Toirgiin talbai"""
        return math.pi * self.radius**2
    def perimeter(self):
        """Toirgiin perimeter"""
        return 2 * math.pi * self.radius
    def distance_from_origin(self):
        """Toirgiin towoos coordinatiin ehlel hurelh zai"""
        return utils.distance(0,0,self.x,self.y)
    
class Rectangle:
    """Tegsh ontsogt klass"""
    def __init__(self, width, height, x=0, y=0):
        self.width = width
        self.height = height
        self.x = x
        self.y =y

    def area(self):
        """Tegsh ontsogtiin talbai"""
        return self.width * self.height
    def perimeter(self):
        """tegsh ontsogtiin perimeter"""
        return 2 * (self.width + self.height)