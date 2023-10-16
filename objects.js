const students = [
    {
        firstName: "Bernese",
        lastName: "Lie",
        failing: true,
        DOB: 1800,
        siblings: ["Rose"], 

        },
    
        {
            firstName: "Joannie",
            lastName: "O'Chen",
            failing: false,
            DOB: 2003,
            siblings: ["Peeka"], 
        
            },

            {
                firstName: "Jujuboob",
                lastName: "Huang",
                failing: false,
                DOB: 2005,
                siblings: ["King Andrew"],
               
            },
    ];
    

    students.forEach((student) => {
        console.log(student)
        student.siblings.forEach((siblings) => {
            console.log(siblings)
        })
    });
    
    const failing = students.filter((student) => student.failing = true);
    console.log(failing);
    