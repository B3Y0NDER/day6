function getAgentCar (jsonString){
const obj = JSON.parse(jsonString)
const agent = obj.agent
return agent.car
}
const jsonString = '{"agent":{"name": "John" , "car":"Toyota" }}';
console.log(getAgentCar(jsonString)); 
