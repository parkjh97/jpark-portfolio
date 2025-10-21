from bs4 import BeautifulSoup
with open('cdg-formatted.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'lxml')
hero = soup.find('div', class_='Masthead_content__cIWqE')
if hero:
    print('HERO TEXT:')
    for child in hero.find_all(['h1','h2','button'], recursive=False):
        print(child.get_text('\n', strip=True))
