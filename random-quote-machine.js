
/**** Quotes Bank ***/

var rmQuotes = [
   '[shoots portal] There she is. Alright, c\'mon, Morty, let\'s go.       -   Rick',
'Full disclosure, Morty—it\'s not. Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity.     -   Rick',
'The outside world is our enemy, Morty! We\'re the only fehh-friends we got, Morty! It\'s just Rick and Morty! Ruh-ick and Morty and their adventures, Morty! Rick and Morty forever and forever...      -   Rick',
'Ricks have a very distinctive and traceable brainwave due to our genius. The best way to hide from an enemy\'s radar is to stand near someone with complementary brainwaves that make ours invisible...        -   Rick',


' I\'m better than your brother. I\'m a version of your brother you can trust when he says "Don\'t run." Nobody exists on purpose. Nobody belongs anywhere. Everybody\'s gonna die…Come watch TV?       -   Morty',
'Oh man, Rick! I\'m looking around this place and I\'m starting to work up some anxiety about this whole thing!     -   Morty',
'Holy cow, Rick! I didn\'t know hanging out with you was making me smarter!     -   Morty',
'My-my-my grandpa Rick sent me!     -   Morty',
'You know, Rick, when I first saw all those Ricks and Mortys, I thought, "Gee, that kinda devalues our bond." But then I realized it just means that our relationship must be pretty special to span over all those different timelines.        -       Morty',


' Scaring you? Tell me, Summer. If a human was born with stumpy legs, would they breed it with another deformed human and put their children on display like the Dachshund?     -   Snowball',
/* 'Rick, the only connection between your unquestionable intelligence and the sickness destroying your family is that everyone in your family, you included, use intelligence to justify sickness. You seem to alternate between viewing your own mind as an unstoppable force and as an inescapable curse. And I think it\'s because the only truly unapproachable concept for you is that it\'s your mind within your control.      -   Dr. Wong',
*/
'Rick, the only connection between your unquestionable intelligence and the sickness destroying your family is that everyone in your family, you included, use intelligence to justify sickness...      -   Dr. Wong',
'Save your anti-Rick speech for the Council of Ricks, terror-Rick.      -   Rick Officer',
'Excuse me, sir, is your Morty insured? You know, every year, hundreds of Mortys are injured.	-	Rick Insurer',


' When two people create a life together, they set aside their previous lives as individuals.       -   Beth',


'No you don\'t. You\'re the little brother. You\'re not the cause of your parents\' misery, you\'re just a symptom of it.	-   Summer',

'That\'s because losers look stuff up while the rest of us are carp\'en all them \'diems.       -   Summer',
'Morty, no offence, but a drawing of me you made when you were eight isn\'t gonna make me feel like less of an accident!        -   Summer',


' Morty, I\'m not as smart as your Grandpa Rick, but I promise never to make that your problem again.       -   Jerry',
'Okay, so let me get this straight. For the rest of your lives, no matter how much it hurts you, no matter how much it destroys our children\'s futures, we\'re gonna do whatever Rick wants, whenever he wants?      -   Jerry',

]

function genQuote() {
    var randomNum = Math.floor(Math.random() * (rmQuotes.length));
        document.getElementById('quote-box').innerHTML = rmQuotes[randomNum];
}
