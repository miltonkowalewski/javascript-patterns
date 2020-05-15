class Address 
{
    constructor(zip, street)
    {
        this.zip = zip
        this.street = street
    }
}

class User 
{
    constructor({ name, age, phone, address })
    {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User({ name: "Bob", age: 10, phone: "55 99191919", address: "My street"})

console.log(user)