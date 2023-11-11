import type User from './interfaces/User'

console.log("Hello, world!");

let employee: User = {
  id: '123',
  firstName: "Emil",
  lastName: "Andersson",
  name(): string {
    return this.firstName + " " + this.lastName;
  }
}

console.log(employee.name(), employee)