import pygame
import sys
import math

pygame.init()

screen = pygame.display.set_mode((640,480))
pygame.display.set_caption("Spinning Animation")

# 
BLACK = (0,0,0)
PURPLE = (128, 0, 128)
# 
angle = 0
rect_size = 100
clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        screen.fill(BLACK)
        angle+=2
        if angle >= 360:
            angle = 0
        center_x, center_y = 320, 240
        size = rect_size

        points = [
            (
            center_x + size * math.cos(math.radians(angle)),
            center_y +size * math.sin(math.radians(angle))
            ),
            (
            center_x + size * math.cos(math.radians(angle + 90)),
            center_y +size * math.sin(math.radians(angle + 90))
            ),
            (
            center_x + size * math.cos(math.radians(angle + 180)),
            center_y +size * math.sin(math.radians(angle + 180))
            ),
            (
            center_x + size * math.cos(math.radians(angle + 270)),
            center_y + size * math.sin(math.radians(angle + 270))
            )
        ]
        pygame.draw.polygon(screen, PURPLE, points)
        pygame.display.flip()
        clock.tick(60)

pygame.quit()
sys.exit()