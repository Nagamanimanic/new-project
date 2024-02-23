Feature: verify addemployee funtionality
 Feature Description description:

  Scenario:verify addemployee with mandatory details
    Given user launch the application
    When user enter the username "Admin" and password "admin123"
    When user clicks on login button
    And user should navigared to dashboardpage
    And user clicks on pim menu
    And user clicks on addemployee submenu
    And user enters the first name "mani" and lastname "radha"
    And user clicks on save button
    And user should gets successfully saved message