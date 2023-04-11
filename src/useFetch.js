import { useState, useEffect } from 'react';

const useFetch = (url) => {
    //custom hooks need to start with use
        // 2. once the data is fetched, store it in a state variable
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
    
    
        //1. fetch the data from the server when the component loads/ first renders
        useEffect(() => {
            fetch(url)
                //this returns a promise
                .then(res => { //this is the response from the server

                    if(!res.ok){
                        //if the response is not ok, throw an error (if ->throw -> catch)
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();//this returns another promise that we can use
                })
                .then((data) => { //this is the data from the server
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    //here is where we catch the error
    //                 console.log(err.message);
                    setIsLoading(false);
                    setError(err.message);
                })
                //the [] is the dependency array.  If you want to run the useEffect only once, leave it empty.  If you want to run it every time the state changes, put the state variable in the array.  If you want to run it every time the component renders, put the component in the array.
        }, [url]);
        return { data, isLoading, error };
};

export default useFetch;