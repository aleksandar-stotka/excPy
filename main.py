student_scores = {
    'Harry': 88,
    'Ron': 78,
    'Hermione': 95,
    'Draco': 75,
    'Neville': 60
}
student_name = input('student name ')
student_score = int(input("score is "))



student_grades = {}
for student, score in student_scores.items():
    if 91 <= score <= 100:
     student_grades[student_name,student_score] = "Outstanding"
    if 81 <= score <= 90:
         student_grades[(f"{student_name} is {student_score}")]= "Exceeds Expectations"
    if 71 <= score <= 80:
         student_grades[(f"{student_name} is {student_score}")]= "Acceptable"
    elif score <= 70:
         student_grades = "fail"
    
print(student_grades)    
        
  
       


    
    
   

