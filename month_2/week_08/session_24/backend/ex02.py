import pygame
import sys

pygame.init()

screen = pygame.display.set_mode((800, 600))

pygame.display.set_caption("Дүрс зурах")

# Өнгөнүүд тодорхойлох
WHITE = (255, 255, 255)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
GREEN = (0, 255, 0)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill(WHITE)
    # TODO: Дараах дүрсүүдийг зурах
    # 1. Улаан тойрог (x=400, y=300, radius=50)
    pygame.draw.circle(screen, RED, (400, 300), 50)
    # 2. Цэнхэр тэгш өнцөгт (x=200, y=200, width=100, height=100)
    pygame.draw.rect(screen, BLUE, (200,200,100,100))
    # 3. Ногоон шугам (x1=100, y1=100, x2=700, y2=500)
    pygame.draw.line(screen, GREEN, (100,100), (700,500))
    pygame.display.flip()
pygame.quit()
sys.exit()