import React from 'react'
import Card from '../Card'

const CircleButtons = () => {
    return (
        <div>
            <>
                <div className='mb-3'>
                    <button className='btn btn-danger btn-circle '>   </button>
                    <button className='btn btn-danger '>   Danger color</button>
                </div >
                <div className='mb-3'>
                    <button className='btn btn-primary btn-circle '> </button>
                    <button className='btn btn-primary'>Danger color</button>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success btn-circle'></button>
                    <button className='btn btn-success '> success color</button>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-info btn-circle'></button>
                    <button className='btn btn-info '> info color</button>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-dark btn-circle'></button>
                    <button className='btn btn-dark '> dark color</button>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-warning btn-circle'></button>
                    <button className='btn btn-warning '> dark color</button>
                </div>
            </>

        </div>
    )
}

export default CircleButtons
