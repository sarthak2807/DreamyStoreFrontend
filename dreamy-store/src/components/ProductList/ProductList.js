import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import gridviewIcon from '../assets/gridviewIcon.png';
import listviewIcon from '../assets/listviewIcon.png';
import GridViewContainer from '../GridViewContainer/GridViewContainer';
import ListViewContainer from '../ListViewContainer/ListViewContainer';
import 'toolcool-range-slider';

const ProductList = (props) => {
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [currentView, setCurrentView] = useState(
        localStorage.getItem("list")==="true" ? "list" : "grid"
    );
    const allProductList = props.allProductList;
    const [filters, setFilters] = useState({
        category: "All",
        company: "All",
        color: "All",
        price: "All",
        shipping: "All"
    });
    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{
        setFilteredProductList(allProductList);
    },[allProductList])

    function handleFilterChange(){
        let list = allProductList;

        if(filters.category !== "All"){
            list = list.filter((product)=>{
                return product.category.includes(filters.category);
            })
        }

        if(filters.company !== "All"){
            list = list.filter((product)=>{
                return product.company === filters.company;
            })
        }

        if(filters.color !== "All"){
            list = list.filter((product)=>{
                return product.color === filters.color;
            })
        }

        if(filters.shipping !== "All"){
            list = list.filter((product)=>{
                return product.shipping < 1;
            })
        }

        if(filters.price !== "All"){
            list = list.filter((product)=>{
                return product.price > filters.price;
            })
        }

        setFilteredProductList(list);
    }

    useEffect(()=>{
        handleFilterChange();
    },[filters])

    function clearFilters(){
        setFilters({
            category: "All",
            company: "All",
            color: "All",
            price: "All",
            shipping: "All"
        })
    }

    useEffect(()=>{
        isChecked ? setFilters({...filters, shipping: "free"}) : setFilters({...filters, shipping:"All"});
    },[isChecked])

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
                        <div className={filters.category==="All" ? styles.selectedCategoryItem : styles.categoryItems} onClick={()=>setFilters({...filters, category: "All"})}>All</div>
                        {props.categoryList.map((category,index)=>{
                            return (
                                <div className={filters.category===category.name ? styles.selectedCategoryItem : styles.categoryItems} key={index} onClick={()=>setFilters({ ...filters, category: category.name })}>{category.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Company</div>
                    <select name="company" className={styles.selectCompany} onChange={(e)=>setFilters({...filters, company: e.target.value})}>
                            <option value="All">All</option>
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
                        <div className={styles.allColorsIndicator} onClick={()=>setFilters({ ...filters, color: "All"})}>All</div>
                        {props.colorList.map((color,index)=>{
                            return(
                                <div className={styles.colors} onClick={()=>setFilters({ ...filters, color: color.name })} key={index} style={{backgroundColor: color.name, border: filters.color===color.name?"2px solid black":""}}></div>
                            )
                        })}
                        {/* <div className={styles.colors} style={{backgroundColor: "red"}}></div> */}
                        {/* <div className={styles.colors} ></div> */}
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Price</div>
                    <div className={styles.price}>$1234.00</div>
                    <div className={styles.sliderContainer}>
                        <toolcool-range-slider min="100" max="12000" step="100" slider-width="100%" slider-height="5px" slider-bg="#1E1E1E" pointer-width="13px" pointer-height="13px" onClick={""}></toolcool-range-slider>
                    </div>
                </div>
                <div className={styles.shippingContainer}>
                    <div className={styles.text}>Free Shipping</div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={()=>setIsChecked(!isChecked)} className={styles.checkbox}></input>
                    </div>
                </div>
                <div className={styles.clearFilters} onClick={clearFilters}>Clear Filters</div>
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
                    <div className={styles.productsCountContainer}>{filteredProductList.length} Products Found</div>
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
                    {currentView === "grid" && <GridViewContainer allProductList={filteredProductList} />}
                    {currentView === "list" && <ListViewContainer allProductList={filteredProductList} />}
                </div>
            </div>
        </div>
    );
};

export default ProductList;