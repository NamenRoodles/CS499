
import requests
from bs4 import BeautifulSoup
import json

# send a GET request to the website's URL
url = "https://www.springsguide.com/events/"
response = requests.get(url)

# create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(response.content, "html.parser")

events = soup.find_all("div", class_ = "col-xs-12 col-sm-6 col-md-4 mgdisplaylistinghome")
data = []
for index, event in enumerate(events):
    title = event.find("div", class_ = "listingtitle").text
    date_time = event.find("span", id = f"FeatListHome_Listings_Listings_EventDateTime_{index}").text
    new_date_time = date_time.rstrip("Recurring Event")
    org_name = event.find("span", id=f"FeatListHome_Listings_Listings_OrgName_{index}").text
    location = event.find("span", id=f"FeatListHome_Listings_Listings_Location_{index}").text
    event_data = {
    "title": title,
    "date_time": new_date_time,
    "org_name": org_name,
    "location": location
    }
    
    data.append(event_data)

with open("events.json", "w") as outfile:
    json.dump(data, outfile, indent=2)
