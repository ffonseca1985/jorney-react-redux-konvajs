
import UserService from '../services/userService'

const getUser = function(){

    return (dispatch) => {
    
        UserService.get()
            .then((response) => {
                  dispatch(response)  
            })
    }
}

getAction = (users) => ({
    type: "add",
    users: users
})