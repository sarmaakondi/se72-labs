# Exercise 0: Example
#
# This is a practice exercise to help you understand how to write code "inside" a provided Python function.
#
# We'll create a function that checks a condition and prints a specific greeting message based on that condition.
#
# Requirements:
# - The function is named `print_greeting`.
# - Inside the function, declare a variable `python_is_fun` and set it to `True`.
# - Use a conditional statement to check if `python_is_fun` is `True`.
# - If `python_is_fun` is `True`, print the message "Python is fun!"


def print_greeting():
    python_is_fun = True
    if python_is_fun:
        print("Python is fun!")


# Call the function
# print_greeting()


# Exercise 1: Vowel or Consonant
#
# Write a Python function named `check_letter` that determines if a given letter
# is a vowel or a consonant.
#
# Requirements:
# - The function should prompt the user to enter a letter (a-z or A-Z) and determine its type.
# - It should handle both uppercase and lowercase letters.
# - If the letter is a vowel (a, e, i, o, u), print: "The letter x is a vowel."
# - If the letter is a consonant, print: "The letter x is a consonant."
# - Replace 'x' with the actual letter entered by the user.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Utilize the `in` operator to check for vowels.
# - Ensure to provide feedback for non-alphabetical or invalid entries.


def check_letter():
    user_input = input("Enter a letter (a-z or A-Z): ")
    vowels = ["a", "e", "i", "o", "u"]

    if len(user_input) != 1 or not user_input.isalpha():
        result = "Invalid input, try again!"
    else:
        user_input = user_input.lower()
        result = f"The letter {user_input} is a {"vowel" if user_input in vowels else "consonant"}"

    print(result)


# Call the function
# check_letter()


# Exercise 2: Old enough to vote?
#
# Write a Python function named `check_voting_eligibility` that determines if a user is old enough to vote.
# Fill in the logic to perform the eligibility check inside the function.
#
# Function Details:
# - Prompt the user to input their age: "Please enter your age: "
# - Validate the input to ensure the age is a possible value (no negative numbers).
# - Determine if the user is eligible to vote. Set a variable for the voting age.
# - Print a message indicating whether the user is eligible to vote based on the entered age.
#
# Hints:
# - Use the `input()` function to capture the user's age.
# - Use `int()` to convert the input to an integer. Ensure to handle any conversion errors gracefully.
# - Use a conditional statement to check if the age meets the minimum voting age requirement.


def check_voting_eligibility():
    try:
        user_input = int(input("Enter your age: "))
        voting_eligible_age = 18

        if voting_eligible_age <= user_input <= 99:
            print("You're eligible to vote!")
        else:
            print("You're not eligible to vote.")
    except ValueError:
        print("Please enter a valid age and try again.")


# Call the function
check_voting_eligibility()
