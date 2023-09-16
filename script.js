const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];

  // 1. Print Developers
  function printDeveloper() {
    console.log("all developers: ");
    const printDev = (element) => {
        if(element.profession == "developer") console.log(`name: ${element.name}, age: ${element.age}`);
    }
    data.forEach(printDev);
  }
  
  // 2. Add Data
  function addData() {    
    const newPerson={
      name: prompt("Enter name: "),
      age: parseInt(prompt("Enter age: ")),
      profession: prompt("Enter profession: ")
    }
    if (newPerson.name == undefined || newPerson.age == undefined || newPerson.profession ==undefined || newPerson.name.length == 0 || newPerson.profession.length == 0 ) {
      alert("Please enter all details.");
      return;
    }
    else if(isNaN(newPerson.age) || newPerson.age <= 0){
      alert("Please enter correct age.");
      return;
    }
    data.push(newPerson);
    alert("data added successfully !!!!");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filterData = (element) => {
      if (element.profession == "admin") {
        return false;
      }
      return true;
    }
    const newData = data.filter(filterData);
    data.splice(0,data.length,...newData);
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummy_data = [
      { name: "abc", age: 21, profession: "developer" },
      { name: "xyz", age: 24, profession: "manager" }
    ];

    //append dummy_data in original data;
    data.splice(data.length,0,...dummy_data);
    console.log(data);

    //creating new array;
    // const concat_data = [...data , ...dummy_data];
    // console.log(concat_data);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge=0;
    for (const person of data) {
      totalAge+=person.age;
    }
    console.log("average age: "+ (totalAge/data.length));
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    console.log("At least one person with age > 25: ");
    for (const person of data) {
      if (person.age>25) {
        console.log(true);
        return;
      }
    }
    console.log(false);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = {};
    data.forEach((element)=>{
      professions[element.profession]=1;
    });
    console.log("All professions: ")
    for (const profession in professions) {
      console.log(profession);
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    con=false;
    for (const person of data) {
      if (person.name == "john") {
        person.profession = "manager";
        con=true;
      }
    }
    if(con) console.log("updated successfully.");
    else console.log("John not found.");
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count=0;
    for (const person of data) {
      if (person.profession == "developer" || person.profession == "admin") {
        count++;
      }
    }
    console.log(`total count of developers and admins: ${count}`);
  }