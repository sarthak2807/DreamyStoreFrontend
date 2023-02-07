import React, { useState } from 'react';
import styles from './ProductList.module.css';
import gridviewIcon from '../assets/gridviewIcon.png';
import listviewIcon from '../assets/listviewIcon.png';
import GridViewContainer from '../GridViewContainer/GridViewContainer';
import ListViewContainer from '../ListViewContainer/ListViewContainer';
import 'toolcool-range-slider';

const ProductList = (props) => {
    const [currentView, setCurrentView] = useState(
        localStorage.getItem("list")==="true" ? "list" : "grid"
    );

    const allProductList = props.allProductList;

    function handleChange(){
        console.log(props.categoryList);
    }
    return (
        <div className={styles.body} onClick={()=>console.log(currentView)}>
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
                        {props.categoryList.map((category,index)=>{
                            return (
                                <div className={styles.categoryItems} key={index}>{category.name}</div>
                            )
                        })}
                        {/* <div className={styles.selectedCategoryItem}>Kitchen</div> */}
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Company</div>
                    <select name="company" className={styles.selectCompany}>
                            <option value="all">All</option>
                            {props.companyList.map((company,index)=>{
                                return(
                                    <option value={company.name} key={index}>{company.name}</option>
                                )
                            })}
                    </select>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Colors</div>
                    <div className={styles.colorsContainer}>
                        <div className={styles.allColorsIndicator}>All</div>
                        {props.colorList.map((color,index)=>{
                            return(
                                <div className={styles.colors} key={index} style={{backgroundColor: color.name}}></div>
                            )
                        })}
                        {/* <div className={styles.colors} style={{backgroundColor: "red"}}></div> */}
                        {/* <div className={styles.colors} style={{backgroundColor: "green", border: "2px solid black"}}></div> */}
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Price</div>
                    <div className={styles.price}>$1234.00</div>
                    <div className={styles.sliderContainer}>
                        <toolcool-range-slider min="100" max="12000" step="100" slider-width="100%" slider-height="5px" slider-bg="#1E1E1E" pointer-width="13px" pointer-height="13px" onClick={handleChange}></toolcool-range-slider>
                    </div>
                </div>
                <div className={styles.shippingContainer}>
                    <div className={styles.text}>Free Shipping</div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox}></input>
                    </div>
                </div>
                <div className={styles.clearFilters}>Clear Filters</div>
            </div>
            <div className={styles.right}>
                <div className={styles.filtersContainer}>
                    <div className={styles.viewIconsContainer}>
                        <div className={styles.gridIconContainer} onClick={function(){setCurrentView("grid"); localStorage.list = false;}}>
                            <img src={gridviewIcon} alt="error loading" className={styles.gridViewIcon}></img>
                        </div>
                        <div className={styles.listIconContainer} onClick={function(){setCurrentView("list"); localStorage.list = true;}}>
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
                    {currentView === "grid" && <GridViewContainer allProductList={allProductList} togglePage={props.togglePage} />}
                    {currentView === "list" && <ListViewContainer allProductList={allProductList} togglePage={props.togglePage} />}
                </div>
            </div>
        </div>
    );
};

export default ProductList;