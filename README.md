###TITLE OF APP

######Created by Jimmy Davis and Tom Metzger
This application was created by Jimmy Davis and Tom Metzger as their final project for the Web Development Immersive program at General Assembly -- WDI 8 , Sept 2013  - Dec 2013

For more information about the developers:

Jimmy Davis:

- <http://www.>	
- <http://github.com/jimmydavis>

Tom Metzger

- <http://www.tmtezger.com>
- <http://github.com/SleepDeprived>


###Key Changes


###TODO

**Productivity section to-dos **

1. Authentication token not being passed with GitHub API call, causes request limit breach and then requests fail and app breaks
	- also figure this out:
	- Access Tokens
		- Access tokens allow your application to communicate with Harvest on behalf of your users. Each user in Harvest is granted a token that expires after 18 hours. Users also have refresh tokens that can be used to request new access tokens for up to 30 days.
		- https://github.com/harvesthq/api/blob/master/Authentication/OAuth%202.0.md
2. Figure out what GitHub request will provide the data we need to be able to manipulate to produce the outputs we need
3. Create methods in ruby model to process github response to a format that highcharts can use
4. Create 3 backbone routes, collections, and views for different data summaries (commites by day over a week, month, and year)
5. Add highcharts functions to create data vis 
	- all should be bar graphs (maybe a line graph for the year, but not continuous data so not precise use of line chart)
6. Finish Timer



Join table of location ID , User ID

	- has and belongs to many

**Location**

Location Page

1. detect user location
	- mvp on button click
	- production - automatic
2. CRUD view for locations
	- new page show all, add location, update location, delete button
	- use geocoder to get lat and long of location based off of address submitted
3. determine how many locations are X distance away from user's current location
4. display those locations
	- list or google map
5. Update # of people at each location (this refers to current sittings info)


Sitting need location info


1. Get user's location and put in database as **sitting in sittings table**
	- figure out location authorization (simply trying to grab and store location should trigger authorization request from browser)
	- button on dashboard (Start Working)
2. live ping client to see who is still working at each location (Redis database)
	
------	
	
2. Get locations & decide how to serve them on the page 
	- start by listing "nearest locations" to location of user
	- determine how to figure out nearest
3. Count the number of users at a location & show list of locations with:
	- location name
	- location address
	- number of people (or just start by listing the people at that location)
4. figure out how to dynamically update users at a location without requiring page reload
	- use redis


**Styling**

1. style all pages
2. location page should be mobile responsive




