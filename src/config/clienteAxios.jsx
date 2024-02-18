import axios from "axios";


const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URI}/api`
})

export default clienteAxios