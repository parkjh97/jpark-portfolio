from bs4 import BeautifulSoup
with open('cdg-formatted.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'lxml')
career = soup.find('section', id='career')
if career:
    print(career.prettify())
