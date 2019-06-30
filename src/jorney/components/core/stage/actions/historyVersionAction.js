
import Version from '../../../../shared/dataBase/vesions'
import { actionHistoryVersionTypeConstant} from  '../constants';
import swal from 'sweetalert'

const getAll = () => ({
    type: actionHistoryVersionTypeConstant.get_all_version,
    versions: Version.get()
})

const saveStage = (stage) => ({
    type: actionHistoryVersionTypeConstant.save_version,
    save: () => {
            Version.save(stage.toJSON())
            swal("Good job!", "You save the new version for Jorney!", "success");
    },
    versions: Version.get()   
})

export {getAll, saveStage} 