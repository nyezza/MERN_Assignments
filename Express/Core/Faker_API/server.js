const express= require("express")
const {faker} = require('@faker-js/faker')
const app=express();
const port=4000;

const createUser = () => ({
        _id:faker.string.uuid(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName
    
    
})
const createCompany = () => ({
        _id:faker.string.uuid(),    
        name : faker.company.name(),
        address:{
            street:faker.location.streetAddress(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
})

app.get("/api/users/new" , (req,res)=>{
    const user1 = createUser();
    res.json(user1);
    console.log(user1);
});

app.get('/api/companies/new',(req,res)=>{
    const company1 = createCompany();
    console.log(company1);
    res.json(company1)
})

app.get('/api/user/company', (req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const resultObject ={
        user: newUser,
        company: newCompany
    }
    res.json(resultObject)
})


app.listen(port,()=>console.log(`listen on port : ${port}`))