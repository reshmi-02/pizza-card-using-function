import React from 'react'

const Card = () => {
    return (
        <section className='card-section'>
            <div className='card-container'>
                <div className='card-row'>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>

            </div>

        </section>
    )
}

const Card1 = () => {
    return (
        <div className='card-col'>
            <div className='card-card'>


                <div>
                    <img src="img-1.jpeg">
                    </img>
                </div>

                <div  className='card-content'>
                    <h3>
                        Original
                    </h3>

                    <p className='card-para'>
                        <i>
                        Tomato sauce, mozzarella & oregano
                        </i>
                    </p>

                    <p className='card-price'>
                        $18.00
                    </p>

                    <a href="#">
                        ADD TO CART
                    </a>

                </div>
            </div>
        </div>
    )
}

const Card2 = () => {
    return (
        <div className='card-col'>
            <div className='card-card'>


                <div>
                    <img src="img-2.jpeg">
                    </img>
                </div>

                <div  className='card-content'>
                    <h3>
                        Salami
                    </h3>

                    <p className='card-para'>
                        <i>
                        Tomato sauce, mozzarella & mild salami
                        </i>
                    </p>

                    <p className='card-price'>
                        $15.00
                    </p>

                    <a href="#">
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    )
}

const Card3 = () => {
    return (
        <div className='card-col'>
            <div className='card-card'>


                <div>
                    <img src="img-3.jpeg">
                    </img>
                </div>


                <div  className='card-content'>

                    <h3>
                        Chicken
                    </h3>
                    <p className='card-para'>
                       <i>
                       Tomato sauce, mozzarella, chicken,pineapple* & bbq sauce
                       </i>
                    </p>

                    <p className='card-price'>
                        $25.00
                    </p>

                    <a href="#">
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    )
}

const Card4 = () => {
    return (
        <div className='card-col'>
            <div className='card-card'>


                <div>
                    <img src="img-4.jpeg">
                    </img>
                </div>

                <div className='card-content'>
                    <h3>
                        Hawaiian
                    </h3>

                    <p className='card-para'>
                        <i>
                        Tomato sauce, mozzarella, ham & pineapple
                        </i>
                    </p>

                    <p className='card-price'>
                        $16.00
                    </p>

                    <a href="#">
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Card 