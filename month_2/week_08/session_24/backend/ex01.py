# TODO: Дараах зааврыг дагуу ажиллаарай
import pygame
import sys
# 1. Pygame эхлүүлэх
# Таны код энд...
pygame.init()
# 2. 800x600 хэмжээтэй цонх үүсгэх
# Таны код энд...
screen = pygame.display.set_mode((800,600))
# 3. Цонхны гарчиг "Миний анхны Pygame" болгох
# Таны код энд...
pygame.display.set_caption("Minii anhnii Pygame")
# 4. Арын өнгийг цайвар ногоон болгох
# Таны код энд...
GREEN = (0,255,0)
# 5. Тоглоомын давталт үүсгэх
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # Дэлгэц дүүргэх
    # Таны код энд...
    screen.fill(GREEN)
    # Дэлгэц шинэчлэх
    pygame.display.flip()
pygame.quit()
sys.exit()