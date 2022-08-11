import React from 'react'

const SkeletonLoading = () => {
    return (
        <>
            {
                [1, 2, 3, 4, 5].map((index) => {
                    return (
                        <div className="box-skeleton" key={index}>
                            <div className="header">
                                <div className="image skeleton"></div>
                                <div className="text1">
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text"></div>
                                </div>
                            </div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SkeletonLoading