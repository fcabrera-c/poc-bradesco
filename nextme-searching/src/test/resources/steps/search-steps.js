Given(/^we access on the page$/, function() {
  browser.get("https://next.me");
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(1, timeUnits.SECONDS);
  browser.configure().window().maximize();
  $("#__next > div > div.styles_cookie-message__1yCe2.theme-container-dark > div > div > div > button.styles_cookie-message__button__37WbG.next-button.next-button--primary.next-button__size--medium").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
});


Given(/^we select option "([^"]*)" in the bar menu$/, function(arg1) {
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").moveTo();
  //$("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(6) > div > div > div > div.styles-module_nav-item__container__SsGye.styles-module_nav-item__container--header__1c0hi > i").click();
  //$(":root").waitTime(3, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  //$(":root").waitTime(1, timeUnits.SECONDS);
});
Given(/^we click the option "([^"]*)"$/, function(arg1) {
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").moveTo();
  $("li.undefined:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click();
});

Given(/^we select the search bar and type something$/, function() {
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("p");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("a");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("g");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div > div > input").sendKeys("o");
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we confirm the searching$/, function() {
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__search-wrapper__2Ra2e > div").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#duvidas-content > div > div > div > div.styles_duvidas-content__search-area__1uE1D.ngi--3-12--22-22-- > div.styles_duvidas-content__questions-accordion__1DV2G > div:nth-child(3)").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
});
