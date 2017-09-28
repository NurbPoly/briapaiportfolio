

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