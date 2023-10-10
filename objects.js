const students = [
    {
        firstName: "Bernese",
        lastName: "Lie",
        graduated: false;
        DOB: 1800,
        siblings: ["Ceedy"], 
        age: function () {
                return year - this.DOB;
            }, 
        },
    
        {
            firstName: "Joannie",
            lastName: "O'Chen",
            graduated: false;
            DOB: 2003,
            siblings: ["Peeka"], 
            age: function () {
                    return year - this.DOB;
                }, 
            },
    ];
    
    numbers.forEach((number, index) => console.log(number, index));
    students.forEach((student)=> console.log(student.firstName));
    
    const current = students.filter((student) => student.graduated !=== true) 
    
    const students = [1, 2, 3, 4, 5];