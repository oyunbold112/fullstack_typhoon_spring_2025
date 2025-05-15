import pygame
import sys

# initialize pygame
pygame.init()

# setup the display
WIDTH = 800
HEIGHT = 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My Pygame Window")

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

#Game loop / Togloomiin dawtalt

clock = pygame.time.Clock()
running = True

while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # FILL the screen
    screen.fill(WHITE)
    # Draw here 
    pygame.draw.circle(screen, RED, (400,300), 50)

    #Update the display
    pygame.display.flip()
    clock.tick(60) # 60 fps

# Quit
pygame.quit()
sys.exit()