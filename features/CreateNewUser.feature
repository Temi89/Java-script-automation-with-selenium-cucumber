Feature: As a user I want to create a new account for mendeley

  Background:
    Given I am on the mendeley home page
    When I click on the "Create account" button

  @wip
  Scenario: New user registration form
    Then I can see a join form with the following fields
      | Fields        |
      | Email address |
      | First name    |
      | Last name     |
      | Password      |

  @wip
  Scenario: Join form field validation
    When I click on continue
    Then the following fields are mandatory
      | Fields        | validation_message       |
      | Email address | Email is required.       |
      | First name    | First name  is required. |
      | Last name     | Last name  is required.  |
      | Password      | Password  is required.   |


  @CreateUser
  Scenario Outline: Create new account
    And I enter my personal details
    When I click on continue
    And I enter my <Field_study> and my <Academic_status>
    And I submit the join form
    Then a profile is created with my personal details from the previous step


    Examples:
      | Field_study      | Academic_status |
      | Computer Science | Other           |

