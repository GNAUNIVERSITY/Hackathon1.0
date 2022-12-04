import phonenumbers
import opencage
import folium

from trackphone import number

from phonenumbers import geocoder

pepnumber = phonenumbers.parse(number)
location = geocoder.description_for_valid_number(pepnumber, "en")

print(location)

from phonenumbers import carrier
service_pro = phonenumbers.parse(number)
print(carrier.name_for_number(service_pro, "en"))
from opencage.geocoder import OpenCageGeocode

key = 'c9b5644fc4b542598feed6bd6add1512'

geocoder = OpenCageGeocode(key)
print(location)
query = str(location)
results = geocoder.geocode(query)
print(results)

lat = results[0]['geometry']['lat']
lng = results[0]['geometry']['lng']

print(lat,lng)

myMap = folium.Map(locaton=[lat,lng], zoom_start= 9 )
folium.Marker([lat, lng], popup=location).add_to(myMap)

myMap.save("mylocation.html")