import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function MySideNav() {
    const navigate = useNavigate();
    return (
    <SideNav
        onSelect={selected => {
            console.log(selected);
            navigate('/'+selected);
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
                <NavIcon ><i className='fa fa-fw fa-home' style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey='Products'>
                <NavIcon ><i className='fa-solid fa-barcode' style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Products</NavText>
            </NavItem>
            <NavItem eventKey='Customers'>
                <NavIcon ><i class="fa-solid fa-person" style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Customer</NavText>
            </NavItem>
            <NavItem eventKey='Salespersons'>
                <NavIcon ><i class="fa-solid fa-user-tie" style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Salespersons</NavText>
            </NavItem>
            <NavItem eventKey='Sales'>
                <NavIcon ><i class="fa-solid fa-basket-shopping" style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Sales</NavText>
            </NavItem>
            <NavItem eventKey='Discounts'>
                <NavIcon ><i class="fa-solid fa-tags" style={{ fontsize: "1.5em" }}></i></NavIcon>
                <NavText>Discounts</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    );
}

export default MySideNav;

