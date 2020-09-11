import React from 'react'
import style from './style.scss'

const MerchantCard = (props) => {

    return (
        <div className='merchant-card'>
            <div className='merchant-card__header'>
                <img src={props.thumbnail}/>
            </div>
            <div className='merchant-card__container'>
                <div className='merchant-card__container__detail'>
                    <div className='merchant-card__container__detail-name'>
                        {props.name}
                    </div>
                    <div className='merchant-card__container__detail-rate'>
                        {props.rate}
                    </div>
                </div>
                <div className='merchant-card__container__price'>
                    <div className='merchant-card__container__price-detail'>
                        {props.price}
                    </div>
                    <div className='merchant-card__container__price-icons'>
                        {
                            props.price === 1 ? (props.price === 2 ? '$$' : '$$$') : '$'
                        }
                    </div>
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

export default MerchantCard