const findTheOldest = function(people) {
    let oldest;
    let oldestAge = 0;
    const date = new Date();
    const year = date.getFullYear();
    for (person of people) {
        if (!person['yearOfDeath']) person['yearOfDeath'] = year;
        let age = person['yearOfDeath'] - person['yearOfBirth']
        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
