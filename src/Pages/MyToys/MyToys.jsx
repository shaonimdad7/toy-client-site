import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [allDatas, setAllDatas] = useState([]);

    useEffect(() => {
        // fetch(http://localhost:5000/mytoys/${user?.email})
        fetch(`http://localhost:5000/items/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAllDatas(data);
                console.log(data);
            });
    }, [user]);

    return (
        <div>
            <h3>the lenth of: {allDatas.email}</h3>
        </div>
    );
};

export default MyToys;