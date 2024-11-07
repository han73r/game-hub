import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api/',
    params: {
    
    key: '6b8efa0d603c4847bd9a9c0cc30c2752'
}
})
