import React from 'react';
import styles from './ListViewContainer.module.css';
import ListCard from '../ListCard/ListCard';

const ListViewContainer = () => {
    return (
        <div className={styles.container}>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
    );
};

export default ListViewContainer;