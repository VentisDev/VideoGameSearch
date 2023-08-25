import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4f87a8e4975449299502d4775ace9dff'
    }
})