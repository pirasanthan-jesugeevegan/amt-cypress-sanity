Feature: Nav Function

    As a user
    I want to navigate through the application
    so that i am able to access movies

    Scenario Outline: TC001 - Verify nav contains movie & People <elementName>
        Given the user navigates to '/'
        When the field '<elements>' is visible
        Then the field '<elements>' contains '<value>'
        Examples: elementName
            | elementName | elements | value  |
            | movie       | movie    | Movie  |
            | people      | people   | People |

    Scenario Outline: TC002 - Verify nav link navigate to the right page <elementName>
        Given the user navigates to '/'
        When the user clicks on '<elements>'
        Then the url contains '<url>'
        Examples: elementName
            | elementName | elements | url     |
            | people      | people   | /people |
            | movie       | movie    | /       |
