console.log('hello world');


let form = document.querySelector('#form');
let search = document.querySelector("#search");
let messageOne = document.querySelector('#message-1');
let messageTwo = document.querySelector('#message-2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(search.value);


    messageOne.textContent = "loadding";
    messageTwo.textContent = '';

    let url = 'https://jsonplaceholder.typicode.com/posts/'+search.value;
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            messageOne.textContent = data.title;
            messageTwo.textContent = data.body;
        }).catch((error)=>{
            messageOne.textContent ='Post is Not Found';
    
        })
    }).catch(()=>{
        messageOne.textContent = 'Post is not found';
    });


});