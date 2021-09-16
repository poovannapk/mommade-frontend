import React from 'react';
import './CategoryContent.css'
import Food from '../images/food.jpg'
import Pro from '../images/pro.png'
import DineOut from '../images/dineout.jpg'
import SpecialOffer from '../images/specialoffer.jpg'
import { Link } from 'react-router-dom';

const CategoryContent = () => {
    return (
        <div className='content'>
            <div className='momsCategory'>
            {/* <h1 className='momsOnline'>Categories</h1> */}
            <div className='momsWrapper'>
            <div className='momsCat1'>
            <Link to='/orderonline'>
            <img src={Food} className='foodImage'/>
            <a href='/orderonline' className='orderOnline'>Order Online</a>
            </Link>
            </div>
            <div className='momsCat1'>
            <Link to='/orderonline'>
            <img src={DineOut} className='foodImage'/>
            <a href='/orderonline' className='orderOnline'>Go Out For a Meal</a>
            </Link>
            </div>
            <div className='momsCat1'>
            <Link to='/orderonline'>
            <img src={Pro} className='foodImage'/>
            <a href='/orderonline' className='orderOnline'>Mom's Pro</a>
            </Link>
            </div>
            <div className='momsCat1'>
            <Link to='/orderonline'>
            <img src={DineOut} className='foodImage'/>
            <a href='/orderonline' className='orderOnline'>Special Offer</a>
            </Link>
            </div>
            <div className='momsCat1'>
            <Link to='/orderonline'>
            <img src={SpecialOffer} className='foodImage'/>
            <a href='/orderonline' className='orderOnline'>Mom's Special</a>
            </Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryContent;