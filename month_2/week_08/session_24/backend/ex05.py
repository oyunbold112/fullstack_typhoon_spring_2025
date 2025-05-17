# TODO: Олон өнгөт тойргууд зурах
import pygame
import sys

pygame.init()

screen = pygame.display.set_mode((800, 600))

# Өнгөнүүд
COLORS = [
(255, 0, 0), # Улаан
(255, 127, 0), # Улбар шар
(255, 255, 0), # Шар
(0, 255, 0), # Ногоон
(0, 0, 255), # Цэнхэр
(139, 0, 255), # Ягаан
]

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill((255, 255, 255))
    # TODO: 6 өнгөт тойрог тойрог хэлбэрээр зурах
    # Төв: (400, 300), радиус: 150
    # Тойрог бүр өөр өнгөтэй байх
    pygame.draw.circle(screen, COLORS[0], (400, 150), 150)
    pygame.draw.circle(screen, COLORS[1], (550, 225), 150)
    pygame.draw.circle(screen, COLORS[2], (550, 375), 150)
    pygame.draw.circle(screen, COLORS[3], (400, 450), 150)
    pygame.draw.circle(screen, COLORS[4], (250, 225), 150)
    pygame.draw.circle(screen, COLORS[5], (250, 375), 150)
    pygame.display.flip()
pygame.quit()
sys.exit()