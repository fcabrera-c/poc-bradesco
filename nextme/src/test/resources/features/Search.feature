Feature: Search in Ajuda-Dúvidas

  Background: 
    Given we access on the page again

  Scenario: Search something in the option "Dúvidas"
    And we select option "AJUDA" in the bar menu
    And we click the option "Dúvidas"
    And we select the search bar and type something
    And we confirm the searching
