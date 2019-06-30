import moment from 'moment'

class Version {
    constructor (stage){
        this.stage = stage
        this.date = moment().format("DD/MM/YYYY HH:mm")
    }
}

export default Version