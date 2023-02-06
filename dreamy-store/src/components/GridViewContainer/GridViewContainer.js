import React from 'react';
import styles from './GridViewContainer.module.css';
import GridCard from '../GridCard/GridCard';

const GridViewContainer = () => {
    return (
        <div className={styles.container}>
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
        </div>
    );
};

export default GridViewContainer;