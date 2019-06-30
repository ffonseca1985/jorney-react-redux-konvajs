
import axios from 'axios'
import urlApi from '../../../../utils/enviroment' 

class UserService {

    constructor(){
        this.url = urlApi + "user/profile"
    } 
    create = (profile) => {
        return axios.post(this.url, profile)
    }

    get = () => {
        return axios.get(this.url)
    }

    get = (userId) => {
        return axios.get(this.url + userId)
    }

    put = (userId, roles) => {
        return axios.put(this.url + userId, roles)
    }
}

export default UserService