breadText = function () {
    var breadTexts = new Array();
    breadTexts[0] = "Bread is Good.";
    breadTexts[1] = "BREAD bread Bread.";
    breadTexts[2] = "Good is Bread.";
    breadTexts[3] = "You should eat bread.";
    breadTexts[4] = "Bread.";
    breadTexts[5] = "Bread is 57% more nutritious than anything else.";
    breadTexts[6] = "Bread is 35% more nutritious than anything else.";
    breadTexts[7] = "Your color or clothes should be closer to the color of bread.";
    breadTexts[8] = "Bread is on a higher plane of being.";
    breadTexts[9] = "daerb";
    var breadSelector = Math.floor(Math.random()*breadTexts.length);
    document.write(breadTexts[breadSelector]);
  }
  breadText();
