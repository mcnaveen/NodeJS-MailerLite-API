var request = require('request');
require('dotenv').config();

//Set UserVariables(Custom UserAttributes)
var user_name = event.user.customAttributes.first_name;
var user_email = event.user.customAttributes.user_email;

//Setting Custom Header and API KEY
var headers = {
    'Content-Type': 'application/json',
    'X-MailerLite-ApiKey': process.env.MAILERLITEAPIKEY
};

//Actual Data to be Sent
var dataString = '{"email": "' + user_email + '", "name": "' + user_name + '", "type": "active"}';
var group_id = process.env.GROUPID

var options = {
    url: 'https://api.mailerlite.com/api/v2/groups/' + group_id + '/subscribers',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
