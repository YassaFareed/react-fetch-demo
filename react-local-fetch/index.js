

//fetch("url")
//fetch('https://jsonplaceholder.typicode.com/todos/1')//returning data response in json
  //.then(response => response.json()) 
  //.then(json => console.log(json))
async function getData(){
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log("response =" ,response);//we can see using inspect that promise is returned

    const data=await response.json();
    console.log("data =",data);
}
//source of code =https://jsonplaceholder.typicode.com/guide.html
async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'my info',
      body: 'data ',
      userId: 4
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  console.log( "response=",response);

    const data=await response.json();
    console.log("data =",data);
}
// get for pulling the data
//post to submit data
//we can use postman and just click get after giving link, it will return info in json format
//when we post we got the id returned by object in the place it is sent
getData();
postData();