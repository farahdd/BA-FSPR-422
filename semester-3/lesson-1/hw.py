import requests
from bs4 import BeautifulSoup
from pprint import pprint

def parse_vox():
    results = []
    for page in range(1, 4):
        url = f"https://www.vox.com/technology/archives/{page}"
        res = requests.get(url)
        soup = BeautifulSoup(res.text, "html.parser")
        titles = soup.find_all(class_="c-entry-box--compact__title")
        author = soup.find_all

        for title in titles:
            results.append(
                {
                "title": title.a.string,
                "link": title.a["href"],

                }
            )
    
    return results

res = parse_vox()
pprint(res)