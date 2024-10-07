function displayAgentInfo(agent) {
const text = `My name is ${agent.lastName}, ${agent.firstName} ${agent.lastName}! I'm the agent ${agent.code} and I'm ${agent.age} years old.`;
let p = document.querySelector('#container p');
p.innerHTML = text   
}

var agent = {
firstName: "James",
lastName: "Bond",
code: "007",
age: 57
};

document.addEventListener('DOMContentLoaded', function() {
    displayAgentInfo (agent);
});

