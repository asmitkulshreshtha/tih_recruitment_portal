function calculateAge(dob, appliedDate = new Date()){
    const birthDate = new Date(dob);
    let age = appliedDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = appliedDate.getMonth() - birthDate.getMonth();

    if(monthDifference < 0 || (monthDifference === 0 && appliedDate.getDate() < birthDate.getDate())){
        age--;
    }

    return age;
}

module.exports =  {calculateAge};