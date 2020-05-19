const initState = {
    profiles:[
        {
            id: 1,
            Name:'okobioko',
            DoB:276778,
            reg_no: 2016354030,
            mode_of_admission: 'jamb'
        },
        {
            id:2,
            Name:'okoko',
            DoB:34378,
            reg_no: 2016354032,
            mode_of_admission: 'jamb'
        }
    ]
 }
 
const profileReducer = (state = initState, action) => {
    return state 

}

export default profileReducer;