Feature: verify login funtionality

        feature description

        Scenario: Verify login with valid credentials
                Given user launch the application
                Then user enter the username "Admin" and password "admin123"
                When user clicks on login button
                And user should navigared to dashboardpage

        Scenario: verify login with valid username and invalid password
                Given user launch the application
                Then user enter the username "Admin" and password "admin1234566"
                When user clicks on login button
                And user should get errormessage invalid credentials

        Scenario: verify login with invalid username and valid password
                Given user launch the application
                Then user enter the username "Admintuggfcf" and password "admin123"
                When user clicks on login button
                And user should get errormessage invalid credentials

        Scenario: verify login with invalid username and invalid password
                Given user launch the application
                Then user enter the username "Admintuggfcf" and password "admin1236777"
                When user clicks on login button
                And user should get errormessage invalid credentials

        Scenario Outline: verify negative tests for login
                Given user launch the application
                Then user enter the username <'username'> and password <'password'>
                When user clicks on login button
                And user should get errormessage invalid credentials

                Examples:
                        | username | password |
                        | Admin    | admin123 |
                        | Admin    | Adminert |
                        | Adminert | admin123 |
                        | Adminert | Adminert |
