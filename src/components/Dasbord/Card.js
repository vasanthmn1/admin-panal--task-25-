import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ color, salery, name }) => {



    return (
        <>

            <div class="  col-lg-6 mb-4">
                <div class={`card border-left-${color} shadow h-100 py-2`}>
                    <div class="card-body">
                        <div class=" no-gutters align-items-center">
                            <div class=" mr-2">
                                <div class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                                    {name}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{salery}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
