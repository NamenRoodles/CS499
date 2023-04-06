# Takes a list of json items and using a given regex or fliter method
# Turns it to a different, filtered list.
import json
import re





#include param decides whether or not to exclude by filter match or only include by filter match: 1 is to include, 0 excludes
#should return a json file, this might be expensive in terms of storage, so maybe lets just do one
class Filter():
    def filterThis(filename, filterUsed, include):
        pattern = re.compile(filterUsed)
        with open(filename, 'r') as f:
            itemsList = json.loads(f.read())
        def helpFilter(jsonitem, regy):
            #returns  a match of an item "regex" if it is found, otherwise returns none
            jsonitem["Description"]