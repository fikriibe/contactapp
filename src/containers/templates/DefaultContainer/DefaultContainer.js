import React from 'react'
import "./DefaultContainer.css"

const DefaultContainer = ({ title, children }) => {
    return (
        <div className="bg-container content-center">
            <div className="card-container position-relative">
                <div className='c-card-header'>
                    <p className="title">{title}</p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default DefaultContainer
