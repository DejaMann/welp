import React from 'react';
import styles from './LandingNav.module.css';

export function LandingNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Reviews</span>
                <span>Cities</span>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign Up</button>
            </div>
        </div>
    );
}