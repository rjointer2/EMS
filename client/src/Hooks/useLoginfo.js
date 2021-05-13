

// action is a arg to define the hooks request
// if the action is a string 'login' then the request is login
// if the action is a string 'change' then the request is to change the login's information

// data is the fetched Object called form the API 
/* THIS IS A HARD CODED OBJECT TAKEN FOR RIGHT NOW */

import { useEffect } from "react";

const useLoginInfo = (action, data) => {

    // sets the state of the form's 
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    /* function here to handle if the request fails to change */
    const [ labelFirstName, setlabelFirstName ] = useState('First Name');
    const [ labelLastName, setlabelLastName ] = useState('Last Name');

    const [ link, setLink ] = useState('/forgotlogin')

    const requestChangePassword = (state1, state2, fetchedData ) => {

        const linkDispatch = undefined

        if(action === 'login') {
            linkDispatch = '/login'
        }

        if(action === 'change') {
            linkDispatch = '/changepassword'
        }

        // if the the fetchedData is null || undefined then return no user found

        if(!fetchedData) return 'Not Found User'

        // if the state !== fetchedData then output incorrect input

        state1 !== fetchedData.firstName ? setlabelFirstName('Please Try Again') : setlabelFirstName('First Name');
        state2 !== fetchedData.lastName ? setlabelLastName('Please Try Again') : setlabelLastName('Last Name');

        setLink(linkDispatch);

    }

    requestChangePassword(firstName, lastName, data)

    useEffect(() => {
        /* RIGHT NOW NO DEPENDENICES BUT WHEN THE FETCH AND REDUX IS IMPLEMENTED, A URL WILL BE INCLUDED */
    }, [])

}