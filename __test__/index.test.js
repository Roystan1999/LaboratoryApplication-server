const { TestWatcher } = require('jest')
const request = require('supertest')

const app=require("../app")


describe("POST /users/register", ()=>{
    test("OK, Registration is succefull", async ()=>{
        const res = await request(app)
                          .post('/users/register')
                          .send({
                            "name":"david",
                            "email":"davidd@gmail.com",
                            "password":"david123@gmail.com",
                            "role":"admin"
                          })
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },10000)
})

describe("POST/users/login",()=>{
    test("OK, Login is Succefull", async ()=>{
        const res = await request(app)
                         .post('/users/login')
                         .send({
                             "email":"d@gmail.com",
                             "password":"qwertyuiop"
                         })
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
 
    },10000)
 })

 describe("GET/samples",()=>{
     test(("success"),async()=>{
       const res= await request(app)
       .get('/users/samples')
       expect(res.statusCode).toEqual(200)
 

     },1000)
 })

 describe("GET/samples",()=>{
    test(("success"),async()=>{
      const res= await request(app)
      .get('/users/samples')
      expect(res.statusCode).toEqual(200)


    },1000)
})

describe("GET/edit",()=>{
    test(("success"),async()=>{
      const res= await request(app)
      .put('/users/edit')
      expect(res.statusCode).toEqual(200)
    },1000)
})

describe("GET/edit",()=>{
    test(("success"),async()=>{
      const res= await request(app)
      .get('/users/editData')
      expect(res.statusCode).toEqual(200)
    },1000)
})
