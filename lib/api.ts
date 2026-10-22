import axios from "axios";


export type Post={
    id:string,
    title:string,
    body:string
}

const api=axios.create({baseURL:"http://localhost:3001/posts"});
const response=api.get("/")

export default api