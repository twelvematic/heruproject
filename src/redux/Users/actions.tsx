import USERS_TYPES from './types';

function getUsers(){
    return {
        type: USERS_TYPES.GET_USERS,
    };
}
function setUsers(data: any){
    return {
        type: USERS_TYPES.SET_USERS,
        payload: {data},
    };
}

const usersActions = {
    getUsers,
    setUsers,
};

export default usersActions;
