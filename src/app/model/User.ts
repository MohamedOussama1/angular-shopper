export class User {
  username: string
  name: string
  pronoun: string
  email: string
  age: number
  password: string
  address: string
  city: string
  zip: number
  constructor(username: string, name: string, pronoun: string, email: string, age: number, password: string, address: string, city: string, zip: number) {
    this.username = username;
    this.name = name;
    this.pronoun = pronoun;
    this.email = email;
    this.age = age;
    this.password = password;
    this.address = address;
    this.city = city;
    this.zip = zip;
  }
}
