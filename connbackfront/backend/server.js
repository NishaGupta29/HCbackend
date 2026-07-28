import express from 'express';//module js eroor deta hai
const app=express();

// app.get('/' , (req,res)=>{
//     res.send('server is ready')
// })

//get a list of 5 jokes
app.get('/api/jokes' ,(req,res)=>{
    const jokes=[
        {
        id: 1,
        title:' a joke',
        content:'joke 1'
    },
    {
         id: 2,
        title:' 2 joke',
        content:'joke 2'
    }
];
res.send(jokes)
})

const port=process.env.PORT|| 3000;

app.listen(port , ()=>{
    console.log(`server at http://localhost:${port}`)
});