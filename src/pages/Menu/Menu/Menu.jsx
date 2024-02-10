import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu.webp'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>javaJive |Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;