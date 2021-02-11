Given(/^we access on the page again$/, function() {
  browser.get("https://next.me");
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(1, timeUnits.SECONDS);
  browser.configure().window().maximize();
  $("#__next > div > div.styles_cookie-message__1yCe2 > div > div > button").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we go to the form below of section "([^"]*)"$/, function(arg1) {
  $("#__next > div > div.style_footerGroup__2KIy0 > section > div > div > div > div.ngi--2-7-6--23-14--1--2 > div").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we fill the form$/, function() {
  $("#name-footer").sendKeys("Jose Ruiz");
  $("#cpf-footer").sendKeys("01908298006");
  $("#email-footer").sendKeys("jose.ruiz@gmail.com");
  $("#email_confirm-footer").sendKeys("jose.ruiz@gmail.com");
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we up the page and click the boton "([^"]*)"$/, function(arg1) {
  //$("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.styles_header__cta__3CPRO.ngi--19--21--1- > button > div").scrollIntoView();
  $("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.styles_menu__l2V37.ngi--20-17--23-18--1- > button").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.styles_header__cta__3CPRO.ngi--19--21--1- > button > div").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we fill the form again$/, function() {
  $("#namefalse").sendKeys("Jose Ruiz");
  $("#cpffalse").sendKeys("01908298006");
  $("#emailfalse").sendKeys("jose.ruiz@gmail.com");
  $("#email_confirmfalse").sendKeys("jose.ruiz@gmail.com");
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lead-drawer > i").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
});
