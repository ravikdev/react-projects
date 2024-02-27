// Define an object named 'prev' with initial properties
const prev = { firstName: "John", lastName: "Doe" };

// Define variables 'name' and 'value'
const name = "age";
const value = 30;

// Create a new object named 'updatedObject' by merging properties from 'prev' and adding a new property
const updatedObject = { ...prev, [name]: value };

// -----------------output---------------
// {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
//   }