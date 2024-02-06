import React, { useEffect, useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems=data.filter(item=> item.category==='popular');
            setMenu(popularItems)} )
    },[])
    return (
        <section>
            <SectionTitle
          subHeading={"From Our Menu"}
          heading={"Popular item"}
        ></SectionTitle>
        <div>
            {
                menu.map(item=><MenuItem
                key={item._id}
                item={item}
                
                >
                
                </MenuItem>)
            }
        </div>
        </section>
    );
};

export default PopularMenu;