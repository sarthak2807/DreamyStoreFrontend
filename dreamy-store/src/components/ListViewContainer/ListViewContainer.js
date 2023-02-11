import React, { useEffect, useState } from 'react';
import styles from './ListViewContainer.module.css';
import ListCard from '../ListCard/ListCard';
import Empty from '../Empty/Empty';

const ListViewContainer = (props) => {

    return (
        <div className={styles.container}>
            {props.allProductList.length === 0 && <Empty />}
            {props.allProductList.length>0 && props.allProductList.map((product,index)=>{
                return(
                    <ListCard product={product} key={index} />
                )
            })}
        </div>
    );
};

export default ListViewContainer;