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
# check_voting_eligibility()


# Exercise 3: Calculate Dog Years
#
# Write a Python function named `calculate_dog_years` that calculates a dog's age in dog years.
# Fill in the logic to perform the calculation inside the function.
#
# Function Details:
# - Prompt the user to enter a dog's age: "Input a dog's age: "
# - Calculate the dog's age in dog years:
#      - The first two years of the dog's life count as 10 dog years each.
#      - Each subsequent year counts as 7 dog years.
# - Print the calculated age: "The dog's age in dog years is xx."
# - Replace 'xx' with the calculated dog years.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Convert the string input to an integer using `int()`.
# - Apply conditional logic to perform the correct age calculation based on the dog's age.


def calculate_dog_years():
    try:
        user_input = int(input("Input a dog's age: "))

        if user_input <= 0:
            raise ValueError
        else:
            dog_years = (
                user_input * 10 if user_input <= 2 else (user_input - 2) * 7 + 20
            )
        print(f"The dog's age in dog years is {dog_years}")
    except ValueError:
        print("Please enter a valid age and try again.")


# Call the function
# calculate_dog_years()


# Exercise 4: Weather Advice
#
# Write a Python script named `weather_advice` that provides clothing advice based on weather conditions.
#
# Requirements:
# - The script should prompt the user to enter if it is cold (yes/no).
# - Then, ask if it is raining (yes/no).
# - Use logical operators to determine clothing advice:
#   - If it is cold AND raining, print "Wear a waterproof coat."
#   - If it is cold BUT NOT raining, print "Wear a warm coat."
#   - If it is NOT cold but raining, print "Carry an umbrella."
#   - If it is NOT cold AND NOT raining, print "Wear light clothing."
#
# Hints:
# - Use logical operators (`AND`, `OR`, `NOT`) in your if statements to handle multiple conditions.


class InvalidInputError(Exception):
    pass


def weather_advice():
    try:
        is_cold = input("Is it cold (yes/no): ").lower()
        is_raining = input("Is it raining (yes/no): ").lower()
        valid_response = ["yes", "no"]

        if is_cold not in valid_response or is_raining not in valid_response:
            raise InvalidInputError("Please input 'yes' or 'no' only")

        is_cold = is_cold == "yes"
        is_raining = is_raining == "yes"

        if is_cold and is_raining:
            print("Wear a waterproof coat.")
        elif is_cold and not is_raining:
            print("Wear a warm coat.")
        elif is_raining and not is_cold:
            print("Carry an umbrella.")
        else:
            print("Wear light clothing.")

    except InvalidInputError as error:
        print(error)
    except KeyboardInterrupt:
        print("\nProgram interrupted by user.")


# Call the function
# weather_advice()


# Exercise 5: What's the Season?
#
# Write a Python function named `determine_season` that figures out the season based on the entered date.
#
# Requirements:
# - The function should first prompt the user to enter the month (as three characters): "Enter the month of the year (Jan - Dec):"
# - Then, the function should prompt the user to enter the day of the month: "Enter the day of the month:"
# - Determine the current season based on the date:
#      - Dec 21 - Mar 19: Winter
#      - Mar 20 - Jun 20: Spring
#      - Jun 21 - Sep 21: Summer
#      - Sep 22 - Dec 20: Fall
# - Print the season for the entered date in the format: "<Mmm> <dd> is in <season>."
#
# Hints:
# - Use 'in' to check if a string is in a list or tuple.
# - Adjust the season based on the day of the month when needed.
# - Ensure to validate input formats and handle unexpected inputs gracefully.


def determine_season():
    input_month = input("Enter the month of the year (Jan - Dec): ").lower()
    input_day = input("Enter the day of the month: ")

    winter_months = ("dec", "jan", "feb", "mar")
    spring_months = ("mar", "apr", "may", "jun")
    summer_months = ("jun", "jul", "aug", "sep")
    fall_months = ("sep", "oct", "nov", "dec")
    all_months = winter_months + spring_months + summer_months + fall_months
    season = ""

    try:
        input_month = input_month.strip()
        if input_month not in all_months:
            raise InvalidInputError("Invalid month, try again.")

        if (
            not input_day.isnumeric()
            or len(input_day) > 2
            or int(input_day) <= 0
            or int(input_day) > 31
        ):
            raise InvalidInputError("Invalid day, try again.")

        input_day = int(input_day)

        if (
            (input_month == winter_months[0] and input_day >= 21)
            or (input_month == winter_months[-1] and input_day <= 19)
            or (input_month in winter_months[1:3])
        ):
            season = "Winter"
        elif (
            (input_month == spring_months[0] and input_day >= 20)
            or (input_month == spring_months[-1] and input_day <= 20)
            or (input_month in spring_months[1:3])
        ):
            season = "Spring"
        elif (
            (input_month == summer_months[0] and input_day >= 21)
            or (input_month == summer_months[-1] and input_day <= 21)
            or (input_month in summer_months[1:3])
        ):
            season = "Summer"
        elif (
            (input_month == fall_months[0] and input_day >= 22)
            or (input_month == fall_months[-1] and input_day <= 20)
            or (input_month in fall_months[1:3])
        ):
            season = "Fall"

        print(f"{input_month.capitalize()} {input_day} is in {season}")

    except InvalidInputError as error:
        print(error)


# Call the function
determine_season()
