/* Quotes API */

/* Tweet share */

/****jQuery example code *****/

/*
//jQuery Trigger Events
$(document).ready() //This fxn runs all of the code once page has finished loading

//Click handler
$("#getMessage").onClick("click", function(){}); //#getMessage is the ID element

//Change text with click Events
$(".message").html("Here is the message"); // .message is the class element; "Here is th.." = string

// Get JSON w/jQuery getJSON method
$.getJSON ("/json/cats.json", function(json) {
    $(".message").html(JSON.stringify(json)); //message = class element; .stringify() = fxn method;
});

//Convert JSON Data to HTML
    // Past code + HTML conversion code
    $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Only change code below this line.



        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });

/*** From API documentation */
/* getQuote Method
Selects a random quote using passed numeric key, if the key is not specified the server generates a random key. The key influences the choice of quotation. Request parameters:

    method=getQuote — method name to invoke
    format=<format> — one of the server supported response formats
    key=<integer> — numeric key, which influences the choice of quotation, the maximum length is 6 characters
    lang=<string> — response language ("ru" or "en")
    jsonp=<string> — callback function name, used for jsonp format only (usage example)

Query example:
POST:
method=getQuote&key=457653&format=xml&lang=en

response:
<forismatic>
<quote>
<quoteText>Brevity — the soul of wit</quoteText>
<quoteAuthor></quoteAuthor>
<senderName>name or nickname of the quote sender</senderName>
<senderLink>email or website address of the quote sender</senderLink>
</quote>
</forismatic> */

/******************************************/
$(document).ready(function(){
  var Qf="";
  //quoted text field
  var Af="";
  //author text field
   getQuote();
   $("#newQuote").on("click", function(){
    getQuote();
  });

 function getQuote(){
     var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){

     Qf=data.quoteText;
     //quoted text field = quoteText
     Af=data.quoteAuthor;
     //author text field = authorText
   $(".quote").html('"' + Qf + '"');

   $(".author").html('-' + Af );
    });
 };
  $("#tweet").on("click", tweet);
  function tweet(){
    var tweetQf= Qf;
    var tweetAf=Af;
    var url="https://twitter.com/intent/tweet?text="+ tweetQf + " - "+ tweetAf;
      window.open(url, "_blank");
   };



  $("#newQuote").on("click", function(){
    getQuote();
  });
});