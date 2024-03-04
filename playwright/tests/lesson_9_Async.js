let getPost = async function(url){
    let result = await fetch(url);
    return result.json()
}

let getComments = async function(url){
    let result = await fetch(url)
    return result.json()
}

const promise1 = Promise.resolve(getPost('https://jsonplaceholder.typicode.com/posts/2'));
const promise2 = Promise.resolve(getComments('https://jsonplaceholder.typicode.com/comments/1'));

Promise.all([promise1, promise2])
.then((results) => {
  console.log("Результаты", results);
})
.catch((error) =>{
    console.error("Помилка", error);
});

const promise3 = Promise.reject(getPost('https://jsonplaceholder.typicode.com/postsss/2'));
const promise4 = Promise.resolve(getComments('https://jsonplaceholder.typicode.com/comments/1'));

let func = async function(){
    let results = await Promise.allSettled([promise3, promise4])
    console.log("Result all Settled", results)
}
func()