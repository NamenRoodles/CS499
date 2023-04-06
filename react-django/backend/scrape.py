import requests
from bs4 import BeautifulSoup
import json

# send a GET request to the website's URL
url = "https://www.coloradocollege.edu/"
response = requests.get(url)

content = response.content
# create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(content, "lxml")

with open ("text.html", "w") as f:
    f.write(str(soup))