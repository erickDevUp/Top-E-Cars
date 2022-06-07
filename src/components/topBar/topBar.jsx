import React from 'react';
import topImg from '../../assets/IMG_20220429_182151_747.jpg'
import './topBar.styles.css'

const TopBar = () => {

    return (
        <div className='topBar' >
            <img src={topImg} alt=""/>
        </div>
    )
}

export default TopBar