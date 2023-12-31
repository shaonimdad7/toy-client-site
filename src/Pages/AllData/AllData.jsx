import React, { useEffect, useState } from 'react';
import './Alldata.css'
import Alldatashow from '../AlldataShow/allDataShow';


const AllData = () => {
    const [allDatas, setAllDatas] = useState([]);
    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items')
            .then(res => res.json())
            .then(data => setAllDatas(data));
    }, [])
    return (
        <div>
            <h1 className='text-center toys_custom'>Here you will find all the Toys of Our side easily, Those will make you feel happy to see you dauther while giving this to her</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {
                    allDatas.map(alldata => <Alldatashow
                        key={alldata._id}
                        alldata={alldata}
                    ></Alldatashow>)
                }

            </div>
        </div>
    );
};

export default AllData;