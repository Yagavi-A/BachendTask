const fs = require('fs');
const dataPath = 'data.json';

const readData = () => {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    return jsonData ? JSON.parse(jsonData) : { users: [] };
};


const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

const getUsers = () => readData().users;

const addUser = (user) => { 
    const data = readData(); 
    data.users.push(user); 
    writeData(data); 
};

const updateUser = (userId, updatedUser) => {
    const data = readData();
    data.users = data.users.map((user) => (user.id === userId ? updatedUser : user)); 
    writeData(data); 
};

const deleteUser = (userId) => { 
    const data = readData(); 
    data.users = data.users.filter((user) => user.id !== userId); 
    writeData(data); 
};

const user1 = { id: 1, name: 'lily' };
const user2 = { id: 2, name: 'Kavi' };

addUser(user1);
addUser(user2);

console.log('Users:', getUsers());

updateUser(1, { id: 1, name: 'lily' });
console.log('Updated users:', getUsers());

deleteUser(2);
console.log('After deletion:', getUsers());
