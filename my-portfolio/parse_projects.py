from bs4 import BeautifulSoup
with open('cdg-formatted.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'lxml')
projects_section = soup.find('section', id='projects')
projects = []
if projects_section:
    for detail in projects_section.select('.ProjectDetails_project-detail__o0Bz4'):
        name = detail.select_one('.ProjectDetails_name__uVpPQ')
        period = detail.select_one('.ProjectDetails_period__WX0wl')
        summary_title = detail.select_one('.ProjectDetails_title__P7s2M')
        detail_items = [li.get_text(strip=True) for li in detail.select('.ProjectDetails_details__EkriJ li')]
        url = None
        url_el = detail.select_one('.ProjectDetails_url__wmzCj a')
        if url_el:
            url = url_el.get('href') or url_el.get_text(strip=True)
        tech = detail.select_one('.ProjectDetails_tech-stacks__M36PN')
        projects.append({
            'name': name.get_text(strip=True) if name else None,
            'period': period.get_text(strip=True) if period else None,
            'summary': summary_title.get_text(strip=True) if summary_title else None,
            'details': detail_items,
            'url': url,
            'tech': tech.get_text(strip=True) if tech else None,
        })
for proj in projects:
    print(proj)
