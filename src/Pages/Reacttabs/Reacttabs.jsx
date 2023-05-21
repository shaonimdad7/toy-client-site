import React, { useEffect, useState } from 'react';
import './Reacttabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Showtabs from '../ShowTabs/Showtabs';
import BarbieToy from '../ShowTabs/BarbieToy';
import Musictoys from './Musictoys';


const Reacttabs = () => {

    // const [toys, setToys] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/items')
    //         .then(res => res.json())
    //         .then(data => setToys(data));
    // }, [])
    const [toys, setToys] = useState([]);
    const [doctorToys, setDoctorToys] = useState([]);
    const [barbieToys, setBarbieToys] = useState([]);
    const [musicToys, setMusicToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setDoctorToys(data.filter(toy => toy.subCategory === 'doctor'));
                setBarbieToys(data.filter(toy => toy.subCategory === 'barbie doll'));
                setMusicToys(data.filter(toy => toy.subCategory === 'music'));
            });
    }, [])

    return (
        <div className='custom_margin'>
            <Tabs>
                <TabList className='tablist'>
                    <Tab className='singleTab'>Doctor Doll section</Tab>
                    <Tab className='singleTab'>Barbie Doll section</Tab>
                    <Tab className='singleTab'>Music instrument</Tab>
                </TabList>

                <div className='tabpanellist'>
                    <TabPanel>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {
                                doctorToys.map(doctorToy => <Showtabs
                                    key={doctorToy._id}
                                    doctorToy={doctorToy}
                                >

                                </Showtabs>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {
                                barbieToys.map(barbieToy => <BarbieToy
                                    key={barbieToy._id}
                                    barbieToy={barbieToy}
                                >

                                </BarbieToy>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {
                                musicToys.map(musicToy => <Musictoys
                                    key={musicToy._id}
                                    musicToy={musicToy}
                                >

                                </Musictoys>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Reacttabs;

