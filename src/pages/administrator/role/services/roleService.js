
import axios from {axios}
import urlApi from '../../../../utils/enviroment' 

class RoleService {

    constructor(){
        this.url = urlApi + "role/"
    } 
    create = (role) => {
        return axios.post(this.url, user)
    }

    get = () => {
        return axios.get(this.url)
    }

    get = (id) => {
        return axios.get(this.url + id)
    }

    put = (role) => {
        return axios.put(this.url, role)
    }
}

export default RoleService