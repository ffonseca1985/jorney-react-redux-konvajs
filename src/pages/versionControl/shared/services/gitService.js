
import axios from 'axios' 
import urlApi from '../../../../utils/enviroment' 
import OuthService from '../../../login/services/outhService'

class GitService {

    constructor() {
        this.url = urlApi + "versionControl/"
        this.currentUserId = OuthService.getCurrentUser()
    } 
    createBranch = (branch) => {
        return axios.post(this.url, branch)
    }

    get = (userId) => {
        return axios.get(this.url + this.currentUserId + '/userId' + userId)
    }

    get = (projectId) => {
        return axios.get(this.url + this.this.idCurrentUser + '/projectId' + projectId)
    }

    put = (userId, projectId) => {
        return axios.put(this.url + this.currentUserId + '/userId' + userId + '/projectId' + projectId)
    }
}

export default GitService