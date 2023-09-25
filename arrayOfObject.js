function Individual(name, age, street, city, state, country) {
    this.name = name;
    this.age = age;
    this.address = {
        street: street,
        city: city,
        state: state,
        country: country
    };
}

function displayProps(obj) {
    if (typeof obj !== 'object') {
        return;
    }

    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            console.log(`${prop}:`);
            displayProps(obj[prop]);
        } else {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

const individuals = [];

for (let i = 1; i <= 5; i++) {
    individuals.push(new Individual(`person_${i}`, 20 + i, `street_${i}`, `city_${i}`, `state_${i}`, `country_${i}`));
}

for (let individual of individuals) {
    console.log('Individual:');
    displayProps(individual);
    console.log("--------------------------------------------");
}
