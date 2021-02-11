# language: en
# ------------------------------------------------------------------------------
Feature: Navigate on the Home page

  Scenario: Validate Home page
    Given we access on the page
    And we validate the fisrt section of home page
    And we validate the CONTA section
    And we validate the MIMOS section
    And we validate the TEM NO NEXT section
    And we validate the Second CONTA section
    And we validate the WHAT'S NEXT section
    And we validate the AJUDA section
    And we validate the Footer section

  Scenario: Fill the form QUERO SER NEXT
    Given we go to the form below of section "Ajuda"
    And we fill the form
    And we up the page and click the boton "QUERO SER NEXT"
    And we fill the form again

  Scenario: Search something in the option "Dúvidas"
    Given we select option "AJUDA" in the bar menu
    And we click the option "Dúvidas"
    And we select the search bar and type something
    And we confirm the searching
