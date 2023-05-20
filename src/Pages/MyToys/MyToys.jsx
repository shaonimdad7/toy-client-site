import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    const url = `http://localhost:5000/items?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    // useEffect(() => {
    // fetch(http://localhost:5000/mytoys/${user?.email})
    //     fetch(`http://localhost:5000/items/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setAllDatas(data);
    //             console.log(data);
    //         });
    // }, [user]);

    return (
        <div>
            <h3>the lenth of: {mytoys.length} </h3>
        </div>
    );
};

export default MyToys;