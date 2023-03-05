import React from 'react';
import styles from './GridViewContainer.module.css';
import GridCard from '../GridCard/GridCard';
import Empty from '../Empty/Empty';

const GridViewContainer = (props)=> {
    const allProductList = props.allProductList;
    return (
        <div className={styles.container}>
            {allProductList.length===0 && <Empty />}
            {allProductList.length>0 && allProductList.map((product,index)=>{
                return(
                    <GridCard product={product} key={index} />
                )
            })}
        </div>
    );
};

export default GridViewContainer;