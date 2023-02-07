import React from 'react';
import styles from './ListViewContainer.module.css';
import ListCard from '../ListCard/ListCard';

const ListViewContainer = (props) => {
    const allProductList = props.allProductList;

    return (
        <div className={styles.container}>
            {allProductList.length>0 && allProductList.map((product,index)=>{
                return(
                    <ListCard product={product} key={index} togglePage={props.togglePage} />
                )
            })}
        </div>
    );
};

export default ListViewContainer;