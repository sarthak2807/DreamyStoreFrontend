import React from 'react';
import styles from './GridViewContainer.module.css';
import GridCard from '../GridCard/GridCard';

const GridViewContainer = (props) => {
    const allProductList = props.allProductList;
    return (
        <div className={styles.container}>
            {allProductList.length>0 && allProductList.map((product,index)=>{
                return(
                    <GridCard product={product} key={index} />
                )
            })}
            {/* <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard /> */}
        </div>
    );
};

export default GridViewContainer;