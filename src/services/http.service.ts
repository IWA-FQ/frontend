import axios from 'axios';

export const get = () => {
    return axios.get("http://jsonplaceholder.typicode.com/todos")
}