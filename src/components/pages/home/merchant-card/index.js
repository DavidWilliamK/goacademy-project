import React from 'react'
import Rating from '../../../../../node_modules/react-rating'
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
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src={restaurant.featured_image} alt='Image not found' />
                </figure>
            </div>
            <div className="card-content merchant-card__container">
                <div className='merchant-card__container__name'>
                    {restaurant.name}
                </div>
                <div className='merchant-card__container__price'>
                    {/* {restaurant.price_range} */}
                    <Rating
                        initialRating={restaurant.price_range}
                        emptySymbol='fa fa-usd grey-usd'
                        fullSymbol='fa fa-usd'
                        readonly></Rating>
                </div>
                <div className='merchant-card__container__cuisine'>
                    {restaurant.cuisines}
                </div>
                <div className='merchant-card__container__rating'>
                    {restaurant.user_rating.aggregate_rating}
                    <span class="icon">
                        <i class="fa fa-star"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MerchantCard