import React from "react";

export default function StarsRating({rating}) {
    const starsArr = new Array(5).fill(false);
    for (let i = 0; i < starsArr.length; i++) {
        if (rating > 0) {
            starsArr[i] = true;
            rating -= 1;
        }
    }
    let id = 0;

    return (
        <span>
            {
                starsArr.map(isRated => {
                    id += 1;
                    return isRated
                    ? <i key={id} className="fa fa-star text-warning"></i>
                    : <i key={id}className="fa fa-star"></i>
                })
            }
        </span>
    )
}