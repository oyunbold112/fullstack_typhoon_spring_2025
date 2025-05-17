# TODO: Дэлгэц дээр текст бичих
import pygame
import sys

pygame.init()

screen = pygame.display.set_mode((800, 600))
# Өнгөнүүд
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
# TODO: Фонт үүсгэх (хэмжээ 48)
default_font = pygame.font.Font(None, 48)
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill(WHITE)
    # TODO: "Сайн байна уу!" текст бичих
    # Төвд байрлуулах (x=400, y=300)
    text = default_font.render("Сайн байна уу!", True, BLACK)
    screen.blit(text, (400,300))
    pygame.display.flip()
pygame.quit()
sys.exit()