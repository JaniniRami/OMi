import re
import requests
from bs4 import BeautifulSoup


# Below are a series of functions that will scrape wikipedia.
# wikiScrape is the main function that will automatically run the other functions, grabbing the URL of a wiki site
# the first paragraph, and the text in the infobox.

# grabURL gets the url of wikipedia site based on the inputted searchTerm

# grabInfoBoxAll will grab all the text in the info box of a wikipedia site

# grabSummary will grab the first paragraph of the wikipedia site.


def wikiScrape(search_term):
  URL = grabURL(search_term)

  info = grabInfoBoxAll(URL)
  summary = grabSummary(URL)

  return (URL, info, summary)

# Driver code for wikiScrape:
# wikiScrape('cancer')

def grabURL(disease_name):

  try:
    S = requests.Session()

    API = "https://en.wikipedia.org/w/api.php"

    PARAMS = {
      "action": "opensearch",
      "namespace": "0",
      "search": disease_name,
      "limit": "1",
      "format": "json"
    }

    R = S.get(url=API, params=PARAMS)
    DATA = R.json()

    DATA = DATA[-1]
    DATA = DATA[0]

    return(DATA)

  except:
    return("No wiki site found") # Can be made as none if needed (so it throws an error)

# Driver code for grabURL
# grabURL("hypercholesterolemia")

def grabInfoBoxAll(disease_name):

  current_position = 0
  final_position = 0
  url = f'https://en.wikipedia.org/wiki/{disease_name}'
  website_url = requests.get(url).text
  soup = BeautifulSoup(website_url,"lxml")

  table = soup.find("table",{"class":"infobox"}) # Wikipedia keeps information in infobox under table, class infobox

  info_row = table.findAll('tr')

  infobox = []
  current_row = {}
  for html in info_row:
    if 'th' in str(html):
      try:
        title = html.find('th')
        title = title.get_text()
        #print(title)
      except:
        continue

      try:
        row_description = html.find('td')
        row_description = row_description.get_text()
        row_description = re.sub("[\(\[].*?[\)\]]", "", row_description)
      except:
        continue
      current_row[title] = row_description

  return(current_row)

#Driver code for grabInfoBoxAll

# site_url = "https://en.wikipedia.org/wiki/Influenza"
# search_word = "Medication"

def grabSummary(disease_name):
  split = disease_name.split('/')
  keyword = split[-1]

  summary_url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + disease_name
  r = requests.get(summary_url)
  page = r.json()

  return (page["extract"])

# Driver code for grabSummary:
# grabSummary('https://en.wikipedia.org/wiki/Hypercholesterolemia')
