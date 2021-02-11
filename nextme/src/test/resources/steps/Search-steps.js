Given(/^we select option "([^"]*)" in the bar menu$/, function(arg1) {
  $("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.styles_logo-container__12fJG.ngi--2-4--6-5--1- > a > div").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").moveTo();
  
});
Given(/^we click the option "([^"]*)"$/, function(arg1) {
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").moveTo();
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click();
  
});

Given(/^we select the search bar and type something$/, function() {
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("p");
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("a");
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("g");
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("o");
  $(":root").waitTime(1, timeUnits.SECONDS);
 
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we confirm the searching$/, function() {
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__questions-accordion__1DV2G > div:nth-child(3)").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  
  $(":root").waitTime(1, timeUnits.SECONDS);
});
