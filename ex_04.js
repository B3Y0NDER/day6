function updateLicensePlates(agent) {
    if (!agent.car || typeof agent.car !== 'object') {
console.error('Something is missing bro');
return null;
}    
agent.car.licensePlates = [
'LU 6789',
'4711-EA-62',
'BMT 216A'
    ];    
return agent; 
}
function showLicensePlates(agent) {
if (!agent.car || !agent.car.licensePlates) {
console.error('Something is missign buddy');
return;
    }
const ul = document.createElement('ul');
    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li'); 
li.textContent = plate; 
ul.appendChild(li); 
    });
document.body.appendChild(ul);
}
const agent = {
name: 'James Bond',
car: {
brand: 'Aston Martin'
}
};
const updatedAgent = updateLicensePlates(agent);
