import React from 'react'
import style from './style.scss'

const MerchantCard = (props) => {
    // let rate = []
    // let price = []
    // for (let index = 0; index < 5; index++) {
    //     if (index < merchant.rating) {
    //         rate.push('★');
    //     }
    //     else 
    //         rate.push('☆');
    // }
    // for (let index = 0; index < merchant.price; index++) {
    //     price.push('$');
    // }
    const restaurant = props.merchant.restaurant
    return (
        <div className='merchant-card'>
            <div className='merchant-card__header'>
                <img src={restaurant.featured_image} alt='Image not found'/>
            </div>
            <div className="merchant-card__container">
                <div className='merchant-card__container__name'>
                    {restaurant.name}
                </div>
                <div className='merchant-card__container__rating'>
                     {restaurant.user_rating.aggregate_rating}
                </div>
                <div className='merchant-card__container__cuisine'>
                    {restaurant.cuisines}
                </div>
                <div className='merchant-card__container__price'>
                    {restaurant.average_cost_for_two}
                </div>
            </div>
        </div>
    )
}

export default MerchantCard