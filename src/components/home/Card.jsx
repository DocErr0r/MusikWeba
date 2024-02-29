import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function Card() {
    return (
        <div className="card">
            <PlayCircleFilledIcon className="playicon" />
            <button className="playbtn circle none">
                <img src="./public/playbtn.svg" alt="" />
            </button>
            <img src="	https://demo.avtheme.com/musik/wp-content/uploads/sites/7/2023/10/500x500bb-48.jpg" alt="" />
            <h3>Moon rise</h3>
            <p>description</p>
        </div>
    );
}
