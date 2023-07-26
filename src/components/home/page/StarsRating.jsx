import React from "react";

export default function StarsRating({rating}) {
    const starsArr = new Array(5).fill(false);
    for (let i = 0; i < starsArr.length; i++) {
        if (rating > 0) {
            starsArr[i] = true;
            rating -= 1;
        }
    }

    return (
        <span>
            {
                starsArr.map(isRated => {
                    return isRated
                    ? <i className="fa fa-star text-warning"></i>
                    : <i className="fa fa-star"></i>
                })
            }
        </span>
    )
}