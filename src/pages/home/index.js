import React, { useState, useEffect } from 'react';

import MerchantCard from '../../components/pages/home/merchant-card'
import { fetchCityData, fetchRestaurants } from '../../utils/api-helper/api';
import style from './style.scss'

const HomePage = () => {
    const [location, setLocation] = useState('Jakarta')
    const [restaurants, setRestaurants] = useState([])
    let input = ''
    // const merchants = [
    //     {
    //         name: 'John',
    //         cuisine: 'Lorem',
    //         rating: 5,
    //         price: 2,
    //         thumbnail: 'https://via.placeholder.com/600x300'
    //     },
    //     {
    //         name: 'Jane',
    //         cuisine: 'Ipsum',
    //         rating: 2,
    //         price: 3,
    //         thumbnail: 'https://via.placeholder.com/600x300'
    //     },
    //     {
    //         name: 'Doe',
    //         cuisine: 'Dolor',
    //         rating: 3,
    //         price: 1,
    //         thumbnail: 'https://via.placeholder.com/600x300'
    //     },
    //     {
    //         name: 'Appleseed',
    //         cuisine: 'Sit',
    //         rating: 4,
    //         price: 2,
    //         thumbnail: 'https://via.placeholder.com/600x300'
    //     }
    // ]

    useEffect(() => {
        fetchCityData(location).then((cities) => {
            const city_id = cities.location_suggestions[0].id
            fetchRestaurants(city_id).then((merchants) => {
                setRestaurants(merchants.best_rated_restaurant)
            })
        })
    })

    return (
        <div className="home-page">
            <div className='home-page__header'>
                <div className='home-page__header__title'>
                    GoZomato
                </div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    setLocation(input)
                }}>
                    <div className='home-page__header__search'>
                        <div className='home-page__header__search-box'>
                            <input
                                type='text'
                                placeholder='Location Search'
                                name='locationInput'
                                onChange={({ target: { value } }) => { input = value }}></input>
                        </div>
                        <div className='home-page__header__search-button'>
                            <button className='fa fa-search'></button>
                        </div>
                    </div>
                </form>

            </div>
            <div className="home-page__banner">
                <button className='home-page__banner-button'>Download Gojek App</button>
            </div>
            <div className='home-page__content-header'>
                {location}
            </div>
            {
                restaurants.map((value, index) => {
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