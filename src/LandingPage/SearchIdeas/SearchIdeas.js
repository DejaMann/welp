import React from 'react';
import styles from './SearchIdeas.module.css';

export function SearchIdeas() {
    return (
        <div className={styles.ideas}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.idea}>Restaurants</span>
            {/* split, rename to 'Taco Trucks' and 'Holes-In-Walls' later */}
        </div>
    );
}