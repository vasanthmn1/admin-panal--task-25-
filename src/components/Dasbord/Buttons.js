import React from 'react'
import CircleButtons from './Buttons/CircleButtons'

const Buttons = () => {
    return (
        <div>
            <div class="container-fluid">
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body d-flex align-center justify-content-center'>
                            <CircleButtons />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Buttons
