const express = require('express');
const redis = require('redis');
const app = express();

//provide DNS name/IP address and port
const client = redis.createClient({
host: 'my-redis-server',
port: 6379
});

app.get('/',(req, res) => {

//Read key from the database
client.get('Visitors', (err, Visitors) => {

//Convert the value into integer
var currVisits = parseInt(Visitors);

//If visitors is not present in database then initalize 1
if(isNaN(currVisits)) {
currVisits = 1;
}

//Send the response bsck to the user
res.send('You Are My Visitor Number: ' + currVisits);

//Increment and save the new value to the database
client.set('Visitors', currVisits + 1);
 });

});

app.listen(9999, () => {
 console.log('Visitorsapp started on port 9999');
});

