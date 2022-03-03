const app=require("./app")

const port = 3002;

app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})