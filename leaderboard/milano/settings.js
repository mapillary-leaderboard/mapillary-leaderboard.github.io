var high = [];
var med = [];
var low = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var maxdate = Date.now(); //don't change this
var mindate = (1506808800000); //set to show epoch milliseconds of the start date
var mindate2 = new Date(mindate).toISOString();

var partnerLogo = 'https://www.facebook.com/maptimemi/';
var partnerLink = 'http://maptime.io/milan/img/maptimemiLogo.png'

var challengeTitle = 'Milano Challenge'; //text in the slider
var challengeDate = 'Ottobre 1 - Ottobre 22, 2017'
var docTitle = 'Complete the Map: Milano - Mapillary'; //text next to favicon on browser window

var challengeLng = 9.221838645386566; //center of the map
var challengeLat = 45.47959226728197; //center of the map
var challengeZoom = 13; //zoom for desktop browser
var mobileZoom = 11; //should be challengeZoom minus 2 usually

var facebookShare = 'http://www.facebook.com/sharer.php?u=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fmilano%2F&p[title]=Complete%20the%20Map%20Milano%20challenge%3A%20'; //link for facebook sharing
var twitterShare = 'https://twitter.com/intent/tweet?text=Complete%20the%20Map%20Milano%20challenge%3A%20&url=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fmilano%2F'; //link for twitter sharing
var emailShare = 'mailto:someone@example.com?Subject=Complete%20the%20Map%20Milano%20challenge%3A%20&body=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fmilano%2F'; //link for email sharing
