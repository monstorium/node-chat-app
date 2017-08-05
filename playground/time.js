// var date = new Date();
// var months = ['Jan', 'Feb','March','April','May','June','July','August','September','October','November','December'];
// console.log(date.getMonth());

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));