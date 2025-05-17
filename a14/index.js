fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>
 res.json().then((data)=>console.log(data))
);

/**fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>
res.json().then((data)=>{
    data.map((value=>console.log(value.userId)));
}));**/