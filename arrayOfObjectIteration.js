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

function displayProps(obj, indent = '') {
    for (const prop in obj) {
        const propValue = obj[prop];
        const propType = Array.isArray(propValue) ? 'Array' : typeof propValue;

        if (propType === 'object') {
            console.log(`${indent}${prop}:`);
            displayProps(propValue, indent + '    ');
        } else {
            console.log(`${indent}${prop} (${propType}): ${propValue}`);
        }
    }
}

const individuals = [];

for (let i = 1; i <= 5; i++) {
    individuals.push(new Individual(`person_${i}`, 20 + i, `street_${i}`, `city_${i}`, `state_${i}`, `country_${i}`));
}

console.log('Array of Individuals:');
displayProps(individuals);
console.log('--------------------------------------------');
