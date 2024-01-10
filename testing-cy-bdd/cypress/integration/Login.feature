Feature: My Account Panel
    Scenario Outline: Access My Account Panel
        Given I visit EBAC Store
        When I log in with user "<user>" and pass "<pass>!"
        Then the user dashboard page should be visible

        Examples:
            | user                      | pass            |
            | teste_aluno_cbs@teste.com | NYFtpQy3V7Qyg5@ |