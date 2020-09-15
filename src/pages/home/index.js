import React, { useState, useEffect } from 'react';

import MerchantCard from '../../components/pages/home/merchant-card'
import { fetchCityData, fetchRestaurants } from '../../utils/api-helper/api';
import style from './style.scss'

const HomePage = () => {
    const [location, setLocation] = useState('Jakarta')
    const [restaurants, setRestaurants] = useState([])
    let input = ''

    useEffect(() => {
        fetchCityData(location).then((cities) => {
            const city_id = cities.location_suggestions[0].id
            fetchRestaurants(city_id).then((merchants) => {
                setRestaurants(merchants.best_rated_restaurant)
            })
        })
    }, [location])

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
            <div className='home-page__container'>
                {
                    restaurants.map((value, index) => {
                        return <MerchantCard
                            merchant={value}
                            key={index}></MerchantCard>
                    })
                }
            </div>
        </div>
    )
}

export default HomePage