"""Geometriin tuslah funktsuudiig aguulsan module"""

import math

def distance(x1, x2, y1, y2):
    """Hoyr tseg hoorondiin zai."""
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

def midpoint(x1, x2, y1, y2):
    """hoyr tsegiin dund tseg"""
    return ((x1 + x2) / 2, (y1 + y2) / 2)