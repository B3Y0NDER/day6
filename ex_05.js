const agent = {
name: 'James Bond',
car: {
brand: 'Aston Martin',
model: 'DB5',
color: 'silver'
},
isMatching: function(key, value) {
return this.car[key] === value;
}
};
function searchCars(agents, key, value) {
const matchingCars = agents
.filter(agent => agent.isMatching(key, value))
.map(agent => agent.car);
return matchingCars;
}
const agents = [
{
name: 'James Bond',
car: {
brand: 'Aston Martin',
model: 'DB5',
color: 'silver'
},
isMatching: function(key, value) {
return this.car[key] === value;
}
},
{
name: 'Ethan Hunt',
car: {
brand: 'BMW',
model: 'i8',
color: 'black'
},
isMatching: function(key, value) {
return this.car[key] === value;
}
},
{
name: 'Jason Bourne',
car: {
brand: 'Jeep',
model: 'Cherokee',
color: 'green'
},
isMatching: function(key, value) {
return this.car[key] === value;
}
}
];
const result = searchCars(agents, 'brand', 'Aston Martin');
console.log(result);
