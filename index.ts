import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id : string;
    title : string;
    completed : boolean;
}
axios.get(url).then((res)=>{
    const {id, title, completed} = res.data as Todo
    console.log(id, title, completed);
})