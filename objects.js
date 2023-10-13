const students = [
    {
        firstName: "Bernese",
        lastName: "Lie",
        failing: true,
        DOB: 1800,
        siblings: ["Rose"], 
        age: function () {
                return year - this.DOB;
            }, 
            num: [1, 2, 3]
        },
    
        {
            firstName: "Joannie",
            lastName: "O'Chen",
            failing: false,
            DOB: 2003,
            siblings: ["Peeka"], 
            age: function () {
                    return year - this.DOB;
                }, 
                num: [4, 5, 6]
            },

            {
                firstName: "Jujuboob",
                lastName: "Huang",
                failing: false,
                DOB: 2005,
                siblings: ["King Andrew"],
                age: function () {
                    return year - this.DOB;
                },
                num: [7, 8, 9]
            },
    ];
    
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //console.log(num(num.length - 1));
    //foreach is a for loop

    //num.forEach(num, index) => console.log(num, index);
    numbers.forEach((number, index) => console.log(number, index));
    students.forEach((student)=> console.log(student.firstName));
    
    const current = students.filter((student) => student.graduated !=== true) 
    
    const students = [1, 2, 3, 4, 5];