

/*** Twitter API ***/
// Embedded Tweet button/ From twitter's dev resources
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));



/**** Test Quotes w/o API & w/ Vanilla JS ****/

var quotes = [
'Blah blah blahblahblahblahblah blah blah blah blah 1',
'Blah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblahblahblah blahblahblahblah blahblahblahblah 2',
'Blah blahblahblahblah blah blahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblah 3',
'Blahblahblah blahblahblahblahblahblahblahblahblah blah blah 4',
'Blahblah blahblah blahblah blahblahblahblahblahblah  blahblahblahblah  blahblah 5',
'Blah blahblahblahblahblahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblah 6'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-box').innerHTML = quotes[randomNumber];
}
/*** End of test quotes ***/
