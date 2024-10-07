function addCarToAgent(agent){
if (typeof agent.name !=="string"){
console.warn("there is some keys missing or uncorrectly typed");
return null
}
agent.car = "Aston Martin"
shareThatBeauty(agent)
return agent
}
function shareThatBeauty(agent){
console.log("Agent partagé sur Instagram :",agent)
}
let agent= { name : "James Bond"}
addCarToAgent(agent)
