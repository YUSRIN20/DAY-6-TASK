//Write a “person” class to hold all the details.

class person{
    constructor(
        name,
        role,
        email,
        phone,
        technologiesknown,
        workExperience,
        languages,
        education,
        country,
        state,
        city,




        
    ){
        this.name=name;
        this.role=role;
        this.email=email;
        this.phone=phone;
        this.technologies=technologiesknown
        this.workExperience=workExperience;
        this.languages=languages;
        this.education=education;
        this.country=country;
        this.state=state;
        this.city=city;
    }
}

const person1 = new person ("Yusrin","Software Engineer","massyusrin123@gmail.com",6380102805,["Html,css,js"],"Fresher","Tamil,English",
{
    college:"Hindusthan college of Engineering and Technology",
    degree:"Bachelors of Engineering",
    batch:"2018-2022",
    department:"Mechatronics Engineering",
    cgpa:8.07
},"India","Tamilnadu","Kadayanallur")

console.log(person1)