# TODO: Pygame ашиглан гурвалжин зурах
import pygame
import sys

pygame.init()
screen = pygame.display.set_mode((800, 600))

# Өнгөнүүд
WHITE = (255, 255, 255)
RED = (255, 0, 0)
running = True

while running:
    for event in pygame.event.get():    
        if event.type == pygame.QUIT:
            running = False
    screen.fill(WHITE)  
    # TODO: polygon функц ашиглан улаан гурвалжин зурах
    # Цэгүүд: (400, 200), (300, 400), (500, 400)
    pygame.draw.polygon(screen, RED, [(400,200), (300,400), (500,400)])
    pygame.display.flip()
pygame.quit()
sys.exit()