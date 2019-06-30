
import version from '../../../pages/versionControl/shared/models/version'

export class Versions {

    static version = []

    static get = function(){
        return Versions.version;
    } 

    static save = function(data){
        Versions.version.push(new version(data))
    }
}

export default Versions