export const selectUser = (user) =>{
    console.log(user.first);
    return{
        type:"USER_SELECTED",
        payloads:user
    }

};


 