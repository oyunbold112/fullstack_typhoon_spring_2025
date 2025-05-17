# TODO: Сумаар удирддаг квадрат
import pygame
import sys
pygame.init()
screen = pygame.display.set_mode((800, 600))
# Өнгөнүүд
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)
# Квадратын байрлал
square_x = 375
square_y = 275
square_size = 50
speed = 5
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # TODO: Гарын удирдлага нэмэх
    # pygame.key.get_pressed() ашиглан
    # UP, DOWN, LEFT, RIGHT сумууд
    screen.fill(WHITE)
    # Квадрат зурах
    pygame.draw.rect(screen, BLUE,
    (square_x, square_y, square_size, square_size))
    pygame.display.flip()
    clock.tick(60)
pygame.quit()
sys.exit()