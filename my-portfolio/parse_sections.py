from bs4 import BeautifulSoup
with open('cdg-formatted.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'lxml')
sections = soup.find_all('section')
for sec in sections:
    sid = sec.get('id')
    print('='*80)
    print('SECTION', sid)
    text = sec.get_text('\n', strip=True)
    print(text)
