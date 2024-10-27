calculate_of_units = 24 
name_of_units = "hours"



def days_of_units(number_of_days):
      return f"{number_of_days} need {number_of_days * calculate_of_units} {name_of_units}"


user_input = input ("hey user enter number of days and will be convert to  hours \n")
user_input_number = int(user_input)


calculate_value = days_of_units(user_input_number)

print(calculate_value)