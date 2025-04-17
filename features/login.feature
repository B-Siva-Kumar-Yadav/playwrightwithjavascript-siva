Feature: Login page test 

    This test suite will consists of the test cases related to login page 

    Scenario: check the login is working as expected with valid credentials
    Given I am on the login page 
    When I entered username as "kumarsivab22@gmail.com " and as password "siva12345"
    Then I should see the dadhboard page 
