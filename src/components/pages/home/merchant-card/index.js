import React from 'react'
import style from './style.scss'

const MerchantCard = (props) => {
    const merchant = {...props.merchant}
    let rate = []
    let price = []
    for (let index = 0; index < 5; index++) {
        if (index < merchant.rating) {
            rate.push('★');
        }
        else 
            rate.push('☆');
    }
    for (let index = 0; index < merchant.price; index++) {
        price.push('$');
    }

    return (
        <div className='merchant-card'>
            <div className='merchant-card__header'>
                <img src={merchant.thumbnail}/>
            </div>
            <div className="merchant-card__container">
                <div className='merchant-card__container__name'>
                    {merchant.name}
                </div>
                <div className='merchant-card__container__rating'>
                     {rate}
                </div>
                <div className='merchant-card__container__cuisine'>
                    {merchant.cuisine}
                </div>
                <div className='merchant-card__container__price'>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default MerchantCard