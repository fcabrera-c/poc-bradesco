Given(/^we access on the page$/, function() {
  browser.get("https://next.me");
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(1, timeUnits.SECONDS);
  browser.configure().window().maximize();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#__next > div > div.styles_cookie-message__1yCe2 > div > div > button").click();
});

Given(/^we validate the fisrt section of home page$/, function() {
  $("#home-cover > div > div > div.styles_home-cover__image__rSg87.ngi--1-1-1-10-10--24-24-24-24-24--1-1--1-2 > div").checkForExistence("#home-cover > div > div > div.styles_home-cover__image__rSg87.ngi--1-1-1-10-10--24-24-24-24-24--1-1--1-2 > div > picture > img");
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(1) > div > div > div > div.styles-module_nav-item__container__SsGye.styles-module_nav-item__container--header__1c0hi")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(2) > div > div > div > div.styles-module_nav-item__container__SsGye.styles-module_nav-item__container--header__1c0hi > div > span")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(3) > div > div > a > div > span")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(4) > div > div > a > div > span")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(5) > div > div > a > div > span")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(6) > div > div > div > div.styles-module_nav-item__container__SsGye.styles-module_nav-item__container--header__1c0hi")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.ngi--6--15-16--1- > div > nav > ul > li:nth-child(7) > div > div > a > div > span")).to.exist();
  expect($("#__next > div > header > div.ng-24.styles-module_ng__r3HCi > div.styles_header__cta__3CPRO.ngi--19--21--1-")).to.have.text("Quero ser next");
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the CONTA section$/, function() {
  $("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article").scrollIntoView();
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > h2")).to.have.text("Tem tudo o que você procura em um banco digital");
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > ul > li:nth-child(1) > div.styles-module_next-list-item__content__1udMH > span")).to.have.text("Transferências gratuitas e ilimitadas para todos os bancos.");
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > ul > li:nth-child(3) > div.styles-module_next-list-item__content__1udMH > span")).to.have.text("Saques gratuitos e ilimitados nos caixas eletrônicos Bradesco e Rede Banco24Horas.");
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > ul > li:nth-child(5) > div.styles-module_next-list-item__content__1udMH > span")).to.have.text("Investimentos exclusivos para o seu dinheiro render.");
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > ul > li:nth-child(7) > div.styles-module_next-list-item__content__1udMH > span")).to.have.text("Mimos em forma de benefícios exclusivos pra quem é next.");
  expect($("#home-cover > div > div > div.styles_home-cover__box__2N3fD.ngi--2-4--23-22-18--3-2--3 > div > div > article > div.next-box.next-box__display-flex.next-box__flexDirection-column.next-box--xs__alignSelf-center.next-box--md__alignSelf-flex-start > a > button")).to.have.text("Quero a conta next");
  
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  
});

Given(/^we validate the MIMOS section$/, function() {
  $("#home-mimos__item__background-green").scrollIntoView();
  expect($("#home-mimos__box__text > span")).to.have.text("mimos");
  expect($("#home-mimos__box__text > h2")).to.have.text("Traz Mimos insuperáveis pra você");
  expect($("#home-mimos__box__text > p")).to.have.text("Fala sério, é bom ser mimado né? Por isso o next te patrocina com benefícios e vantagens que tem tudo a ver com o seu mundo.");
  expect($("#home-mimos__item__image")).to.exist();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#home-mimos__item__display-mimos > div").scrollIntoView();
  expect($("#home-mimos__item__image > picture")).to.exist();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#home-mimos__black-box").scrollIntoView();
  //$("#home-mimos__box__cashback").scrollIntoView();
  expect($("#home-mimos__box__cashback")).to.exist();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the TEM NO NEXT section$/, function() {
  $("#home-tem-no-next > div > div > div.styles_home-tem-no-next__path-container__3AFHq.ngi--2-1--24--1-2--2-1").scrollIntoView();
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__text__uDhTi.ngi--4--12--1- > div.next-box.next-box__display-flex.next-box__flexDirection-column.styles_home-tem-no-next__text__box1__38gaU > span")).to.have.text("Tem no next");
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__text__uDhTi.ngi--4--12--1- > div.next-box.next-box__display-flex.next-box__flexDirection-column.styles_home-tem-no-next__text__box2__3BYtN > h2:nth-child(1)")).to.have.text("Aqui tem tudo");
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__text__uDhTi.ngi--4--12--1- > div.next-box.next-box__display-flex.next-box__flexDirection-column.styles_home-tem-no-next__text__box2__3BYtN > h2:nth-child(2)")).to.have.text("para fazer acontecer");
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-one__3TGVV > div > div > div:nth-child(1)")).to.exist();
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-one__3TGVV > div > div > div:nth-child(2)")).to.exist();
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-one__3TGVV > div > div > div:nth-child(3)")).to.exist();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-two__3mLE7 > div > div > div:nth-child(2)").scrollIntoView();
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-two__3mLE7 > div > div > div:nth-child(1)")).to.exist();
  expect($("#home-tem-no-next > div > div > div.col-xs-22.styles_home-tem-no-next__card__pRPv3.ngi--3---2- > div.next-box.next-box__display-flex.styles_home-tem-no-next__card-two__3mLE7 > div > div > div:nth-child(2)")).to.exist();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the Second CONTA section$/, function() {
  $("#home-conta > div > div > div").scrollIntoView();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-16-11-10--1- > div > span")).to.exist();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-16-11-10--1- > div > h2")).to.have.text("Um app que dá aquela força no dia a dia");
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__navigation__13i9C.styles-module_next-tabs__navigation--horizontal__2BK6A > span:nth-child(1) > span")).to.exist();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > h2")).to.have.text("A Vaquinha da galera agora é online.");
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > div > p")).to.have.text("Você pode escolher um valor, uma data limite e compartilhar direto com os seus contatos.");
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > a > span > span")).to.exist(); 
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__navigation__13i9C.styles-module_next-tabs__navigation--horizontal__2BK6A > span:nth-child(2)").click();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > h2")).to.have.text("O Flow organiza os seus gastos.");
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > div > p")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__navigation__13i9C.styles-module_next-tabs__navigation--horizontal__2BK6A > span:nth-child(3) > span").click();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > h2")).to.have.text("É onde os seus planos acontecem.");
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > div > p")).to.exist();
  expect($("#home-conta > div > div > div > div > div.ngi--3--22-24-- > div > div.styles-module_next-tabs__content__3yO2X > div > div.styles_home-tabs__text__2G4TS.ngi--2-2-3--23-10-7-6--2-1- > div > div > a > span")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the WHAT'S NEXT section$/, function() {
  $("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div").scrollIntoView();
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--5--20-- > article > span")).to.have.text("WHAT'S NEXT");
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--5--20-- > article > div > h2")).to.have.text("A central de novidades do next");
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--5--20-- > article > p")).to.have.text("Aqui você fica por dentro de tudo o que acontece no next e encontra dicas para fazer acontecer!");
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--3--22-- > div.next-box.next-box__display-flex.styles_home-whatsnext__container-card__3_xO6 > div:nth-child(1)")).to.exist();
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--3--22-- > div.next-box.next-box__display-flex.styles_home-whatsnext__container-card__3_xO6 > div:nth-child(2) > a > div > div")).to.exist();
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--3--22-- > div.next-box.next-box__display-flex.styles_home-whatsnext__container-card__3_xO6 > div:nth-child(3) > a > div")).to.exist();
  expect($("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--3--22-- > div.next-box.mt-xs-8.mt-md-16.next-box__display-flex.next-box__justifyContent-center > a > button")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#home-whats-on-next > div > div > div.styles_half-green__container__G-6KN.undefined.ngi--2-4--23-21--1--2 > div > div > div.ngi--3--22-- > div.next-box.next-box__display-flex.styles_home-whatsnext__container-card__3_xO6").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we validate the AJUDA section$/, function() {
  $("#faq-display__header").scrollIntoView();
  expect($("#faq-display__header > div > div > article > span")).to.have.text("Ajuda");
  expect($("#faq-display__header > div > div > article > div > h2")).to.have.text("Ficou alguma dúvida?");
  expect($("#faq-display__header > div > div > article > p")).to.have.text("Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!");
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#faq-display__header > div > div > article > p").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  //$("#faq-display__header > div > div > div.next-box.mt-20.mb-16.next-box__display-flex.next-box__flexDirection-column > div:nth-child(1)").moveTo();
  $("#faq-display__header > div > div > div.next-box.mt-20.mb-16.next-box__display-flex.next-box__flexDirection-column > div:nth-child(1)").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#accordionNextMe-1 > span").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#accordionNextMe-2 > span").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#accordionNextMe-3 > span").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#__next > div > div.style_footerGroup__2KIy0 > section > div > div > div > div.ngi--2-7-6--23-14--1--2 > div").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  
});

Given(/^we validate the Footer section$/, function() {
  $("#__next > div > div.style_footerGroup__2KIy0 > footer").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#__next > div > div.style_footerGroup__2KIy0 > footer > div > div.ngi--4-4--21-12--8-3-").scrollIntoView();
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
  $("#lead-drawer > i").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
});

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
