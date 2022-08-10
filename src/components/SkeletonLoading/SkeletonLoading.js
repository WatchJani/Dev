import React from 'react'

const SkeletonLoading = () => {
    return (
        <>
            {
                [1, 2, 3, 4, 5].map(() => {
                    return (
                        <div className="box-skeleton">
                            <div class="header">
                                <div class="image skeleton"></div>
                                <div class="text1">
                                    <div class="skeleton skeleton-text"></div>
                                    <div class="skeleton skeleton-text"></div>
                                </div>
                            </div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SkeletonLoading