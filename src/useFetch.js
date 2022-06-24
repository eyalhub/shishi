import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


            fetch(url, { signal: abortCont.signal, redirect: 'follow',})
            .then(res => {
                console.log(res);
                if (res.status === 302) {
                    window.location.href = res.url;
                }
                //if(!res.ok) throw Error('could not fetch the data for that resource');
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                SetError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted")
                }
                else {
                    SetError(err.message);
                    setIsPending(false);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error};
}

export default useFetch;
