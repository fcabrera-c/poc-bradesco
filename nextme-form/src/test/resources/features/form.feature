# language: en
# ------------------------------------------------------------------------------
Feature: Fill the form

  Scenario: Fill the form QUERO SER NEXT
    Given we access on the page
    And we go to the form below of section "Ajuda"
    And we fill the form
    And we up the page and click the boton "QUERO SER NEXT"
    And we fill the form again
