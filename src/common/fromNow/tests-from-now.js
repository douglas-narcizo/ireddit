/* 
 * Test suite copied from moment.js on 11/13/17 to validate method against.
 * Requires `moment` to run the test (used to construct the dates).
 * See tests here: https://github.com/moment/moment/blob/ed1fc742b179708d0a987a639979178616309f93/src/test/moment/relative_time.js#L7-L41
 * 
 * @license
 *
 * Copyright 2023 David Leonard
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var moment = require('moment');
var assert = require('assert');

var a = moment();

// Seconds to minutes threshold
a.subtract(44, 'seconds');
assert.equal(timeSince( a.toDate() ), 'a few seconds ago', 'Below default seconds to minutes threshold');
a.subtract(1, 'seconds');
assert.equal(timeSince( a.toDate() ), 'a minute ago', 'Above default seconds to minutes threshold');

// Minutes to hours threshold
a = moment();
a.subtract(44, 'minutes');
assert.equal(timeSince( a.toDate() ), '44 minutes ago', 'Below default minute to hour threshold');
a.subtract(1, 'minutes');
assert.equal(timeSince( a.toDate() ), 'an hour ago', 'Above default minute to hour threshold');

// Hours to days threshold
a = moment();
a.subtract(21, 'hours');
assert.equal(timeSince( a.toDate() ), '21 hours ago', 'Below default hours to day threshold');
a.subtract(1, 'hours');
assert.equal(timeSince( a.toDate() ), 'a day ago', 'Above default hours to day threshold');

// Days to month threshold
a = moment();
a.subtract(25, 'days');
assert.equal(timeSince( a.toDate() ), '25 days ago', 'Below default days to month (singular) threshold');
a.subtract(1, 'days');
assert.equal(timeSince( a.toDate() ), 'a month ago', 'Above default days to month (singular) threshold');

// months to year threshold
a = moment();
a.subtract(10, 'months');
assert.equal(timeSince( a.toDate() ), '10 months ago', 'Below default days to years threshold');
a.subtract(1, 'month');
assert.equal(timeSince( a.toDate() ), 'a year ago', 'Above default days to years threshold');