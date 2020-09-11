import React from 'react';

import MerchantCard from '../../components/pages/home/merchant-card'
import style from './style.scss'

const HomePage = () => {
    const merchants = [
        {
            name: 'John',
            cuisine: 'Lorem',
            rating: 5,
            price: 2,
            thumbnail: 'https://via.placeholder.com/600x300'
        },
        {
            name: 'Jane',
            cuisine: 'Ipsum',
            rating: 2,
            price: 3,
            thumbnail: 'https://via.placeholder.com/600x300'
        },
        {
            name: 'Doe',
            cuisine: 'Dolor',
            rating: 3,
            price: 1,
            thumbnail: 'https://via.placeholder.com/600x300'
        },
        {
            name: 'Appleseed',
            cuisine: 'Sit',
            rating: 4,
            price: 2,
            thumbnail: 'https://via.placeholder.com/600x300'
        }
    ]
    return (
        <div className="home-page">
            <div className='home-page__header'>
                <div className='home-page__header__title'>
                    GoZomato
                </div>
                <div className='home-page__header__search'>
                    <div className='home-page__header__search-box'>
                        <input type='text' placeholder='Location Search'></input>
                    </div>
                    <div className='home-page__header__search-button'>
                        <button className='fa fa-search'></button>
                    </div>
                </div>
            </div>
            <div className="home-page__banner">
                <button className='home-page__banner-button'>Download Gojek App</button>
            </div>
            {
                merchants.map((value, index) => {
                    return <MerchantCard
                        merchant={value}
                        key={index}
                        className="home-page__container"></MerchantCard>
                })
            }
        </div>
    )
}

export default HomePage