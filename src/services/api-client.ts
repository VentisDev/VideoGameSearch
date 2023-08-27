import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e926fb4440e54748b63d4a37187a9ef0'
    }
})