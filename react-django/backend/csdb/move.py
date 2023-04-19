from csdb.models import Cities, Events, Users
import json

def movethis():

    with open('./events.json', "r") as fileopen:
        events = json.load(fileopen)

    #add functionality later to query or get the fk of cities, for now hardcoded
    springs = Cities(city_id=1, city="Colorado Springs")

    for event in events:
        taglist = event["Tags"].split(",")
        newEvent = Events(event= event["EventName"], date=event["Date"], time=event["Time"],
                        description=event["Description"], city_fk=springs, venue= event["Venue"],
                            hash=event["hash"], tags=taglist)
        newEvent.save()

#json format
    #   {
    #     "EventName": "Wolfgang",
    #     "Date": "2023-04-12",
    #     "Time": "4:30 pm",
    #     "Description": "",
    #     "City": "Colorado Springs, CO",
    #     "Venue": "",
    #     "hash": 8567565638966680411,
    #     "Tags": ""
    # }

