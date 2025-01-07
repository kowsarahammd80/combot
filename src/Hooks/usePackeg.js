import { useEffect, useState } from 'react';

const usePackeg = () => {
    const [packegs, setPackegs] = useState([])
    useEffect(()=> {
        fetch("packeg.json")
        .then(res => res.json())
        .then(data => setPackegs(data))
    },[])
    return[packegs]
};

export default usePackeg;