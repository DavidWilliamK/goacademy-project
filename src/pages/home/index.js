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
            rating: 5,
            price: 2,
            thumbnail: 'https://via.placeholder.com/600x300'
        },
        {
            name: 'Doe',
            cuisine: 'Dolor',
            rating: 5,
            price: 2,
            thumbnail: 'https://via.placeholder.com/600x300'
        },
        {
            name: 'Appleseed',
            cuisine: 'Sit',
            rating: 5,
            price: 2,
            thumbnail: 'https://via.placeholder.com/600x300'
        }
    ]
    return (
        <div className="home-page">
            <div className="home-page__header">
                <button className='home-page__header-button'>Download Gojek App</button>
            </div>
            {
                merchants.map((value, index) => {
                    return <MerchantCard
                        name={value.name}
                        desc={value.desc}
                        thumbnail={value.thumbnail}
                        key={index}
                        className="home-page__container"></MerchantCard>
                })
            }
        </div>
    )
}

export default HomePage