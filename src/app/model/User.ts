export class User {
  id: number | undefined
  name: string
  email: string
  password: string
  age?: number
  mobileNumber?: string
  address?: string
  city?: string
  zip?: number
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
