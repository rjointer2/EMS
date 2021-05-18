import { useEffect } from "react";

const usePostRequest = async (sendRequestObject) => {

    const res = await fetch(`/app/users/register`,  {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'

            },
            body: JSON.stringify(sendRequestObject)
        }
    );

    useEffect(() => {
        
    })

    const data

}