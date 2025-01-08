import { useEffect, useState } from 'react';

const useBusinessSuits = () => {
    const [businesss, setBusinesss] = useState([])
    useEffect(()=> {
        fetch('businessSuits.json')
        .then(res => res.json())
        .then(data => setBusinesss(data))
    }, [])
    return [businesss]
};

export default useBusinessSuits;