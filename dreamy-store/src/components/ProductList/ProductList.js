import React from 'react';
import styles from './ProductList.module.css';
import gridviewIcon from '../assets/gridviewIcon.png';
import listviewIcon from '../assets/listviewIcon.png';
import GridViewContainer from '../GridViewContainer/GridViewContainer';

const ProductList = () => {
    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div className={styles.searchboxContainer}>
                    <input type="text" className={styles.searchbox} placeholder='Search'></input>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>
                        Category
                    </div>
                    <div className={styles.categoryList}>
                        <div className={styles.categoryItems} style={{textDecoration:"underline"}}>All</div>
                        <div className={styles.categoryItems}>Office</div>
                        <div className={styles.selectedCategoryItem}>Kitchen</div>
                        <div className={styles.categoryItems}>Batchroom</div>
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Company</div>
                    <select name="company" className={styles.selectCompany}>
                            <option value="default" selected disabled>All</option>
                            <option value="asc">Price</option>
                            <option value="dsc">Wrangler</option>
                            <option value="true">Boat</option>
                            <option value="true">Samsung</option>
                    </select>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Colors</div>
                    <div className={styles.colorsContainer}>
                        <div className={styles.allColorsIndicator}>All</div>
                        <div className={styles.colors} style={{backgroundColor: "red"}}></div>
                        <div className={styles.colors} style={{backgroundColor: "green", border: "2px solid black"}}></div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.filtersContainer}>
                    <div className={styles.viewIconsContainer}>
                        <div className={styles.gridIconContainer}>
                            <img src={gridviewIcon} alt="error loading" className={styles.gridViewIcon}></img>
                        </div>
                        <div className={styles.listIconContainer}>
                            <img src={listviewIcon} alt="error loading" className={styles.listViewIcon}></img>
                        </div>
                    </div>
                    <div className={styles.productsCountContainer}>29 Products Found</div>
                    <div className={styles.lineContainer}><hr></hr></div>
                    <div className={styles.filterContainer}>
                        Sort By &nbsp;
                        <select name="Filter" className={styles.filter}>
                            <option value="default" selected disabled>Choose to sort</option>
                            <option value="asc">Price(low to high)</option>
                            <option value="dsc">Price(high to low)</option>
                            <option value="true">Name(a-z)</option>
                            <option value="true">Name(z-a)</option>
                        </select>
                    </div>
                </div>
                <div className={styles.cardsContainer}>
                    <GridViewContainer />
                </div>
            </div>
        </div>
    );
};

export default ProductList;