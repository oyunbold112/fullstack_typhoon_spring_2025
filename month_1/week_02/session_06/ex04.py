total_purchase = float(input("Hudaldan awaltiin dun: "))
is_member = input("Ta gishuun uu? (Tiim/Ugui): ").lower() == 'tiim'

if total_purchase >= 100:
    if is_member:
        discount = 0.2 # 20% hongololt
    else:
        discount = 0.1 # 10% hongololt
elif total_purchase >= 50:
    if is_member:
        discount = 0.1 # 10% hongololt
    else:
        discount = 0.05 # 5% hongololt
else:
    if is_member:
        discount = 0.05 # 5% hongololt
    else:
        discount = 0 # hongololtgui

final_price = total_purchase * (1 - discount)
print(f"Tanii toloh dun: {final_price:.2f}")