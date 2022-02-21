Feature: Nav Function
    As a user
    I want to navigate through the application
    so that i am able to access movies


    ## Demonstrating that not all test cases need visual testing
    Scenario Outline: TC001 - Verify nav contains movie & People <elementName>
        Given the user navigates to '/'
        When the field '<elements>' is visible
            | people | people | People |
            | new    | new    | New    |

    ## Demonstrating that Visual testing can be used in a Example table
    Scenario Outline: TC002 - Verify nav link navigate to the right page <elementName>
        Given the user navigates to '/'
        And the user initiates visual testing as 'TC002 <elementName>'
        When the user clicks on '<elements>'
        Then the url contains '<url>'
        And the user screenshot the page '<url>' as '<elementName>'
        Examples: elementName
            | elementName | elements | url     |
            | people      | people   | /people |
            | movie       | movie    | /       |

    ## Demonstrating that the entire page can be captured
    Scenario: TC003 - Verify user can see actor profile page
        Given the user navigates to '/'
        And the user initiates visual testing as 'TC003'
        When the user selects actor 'Bradley Cooper'
        Then the user screenshot the page '/person_bradley-cooper' as 'Bradley Cooper'

    ## Demonstrating that sections of the page can be captured
    Scenario: TC004 - Verify user can see actor profile page
        Given the user navigates to '/'
        And the user initiates visual testing as 'TC004'
        When the user clicks on 'wall-e'
        Then the user screenshot the section of the page as 'Wall-e Page' from '.header'
        And the user clicks on 'ben'
        Then the user screenshot the section of the page as 'Ben Burtt page' from '.person'

