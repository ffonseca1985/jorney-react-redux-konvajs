
import axios from 'axios'
import urlApi from '../../../../utils/enviroment' 

class userService {

    constructor(){
        this.url = urlApi + "user/"
    } 
    create = (user) => {
        return axios.post(this.url, user)
    }

    get = () => {
        return axios.get(this.url)
    }

    get = (id) => {
        return axios.get(this.url + id)
    }

    put = (user) => {
        return axios.put(this.url + user.id, user)
    }
}

export default userService