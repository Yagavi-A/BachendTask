function Individual(firstName, lastName, age, residence, languages) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.residence = residence;
    this.languages = languages;
}

function displayProps(space, obj) {
    if (obj instanceof Array) {
        for (let item of obj) {
            if (typeof item === 'object') {
                displayProps(space + "     ", item);
            } else console.log(space + "* " + item);
        }
    } else {
        for (let prop in obj) {
            if (typeof obj[prop] === 'object') {
                console.log(space + prop + ":");
                displayProps(space + "     ", obj[prop]);
            } else console.log(space + prop + ": " + obj[prop]);
        }
    }
}

var individuals = [];
for (let i = 1; i <= 3; i++) {
    var languages = {
        language1: {
            proficiency: ['read', 'speak']
        },
        language2: {
            proficiency: ['speak', 'write']
        }
    };

    var residence = {
        street: `street_${i}`,
        city: `city_${i}`,
        state: `state_${i}`,
        country: `country_${i}`
    };

    individuals.push(new Individual(`First_${i}`, `Last_${i}`, 20 + i, residence, languages));
}

for (let individual of individuals) {
    displayProps("", individual);
    console.log("--------------------------------------------");
}
