javascript:(function(){var userInput=prompt("Enter the new value to replace in the /wiki/ links:");if(userInput){document.querySelectorAll('a[href^="/wiki/"]').forEach(function(link){link.href="/wiki/"+userInput;});}})();

//(Don't copy this part) This is just something for cheating on The Wiki Game.
