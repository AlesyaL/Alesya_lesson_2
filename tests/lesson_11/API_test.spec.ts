import { test,expect } from "@playwright/test"


test.describe ("API",()=>{

    test("GET",async ({request})=>{
        let result = await request.get("https://reqres.in/api/users?page=2")
        let data = await result.json()
        console.log(data)
        expect(result.ok()).toBeTruthy()
})
    test("GET_not_found",async ({request})=>{
        let result = await request.get("https://reqres.in/api/users/23")
        let data = await result.json()
        console.log(data)
        console.log(result)
})
    test("POST",async ({request})=>{
        let result = await request.post("https://reqres.in/api/users",
        {
           data:{ name: "morpheus", job: "leader"}
        })
        let data = await result.json()
        console.log(data)
        console.log(result)
})
    test("DELETE",async ({request})=>{
    let result = await request.delete("https://reqres.in/api/users/2")
    console.log(result)
    expect(result.ok()).toBeTruthy();
})
    test("PUT",async ({request})=>{
    let result = await request.put("https://reqres.in/api/users/2",
    {
       data:{ name: "morpheus", job: "zion resident"}
    })
    let data = await result.json()
    console.log(data)
    console.log(result)
})
})
