import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import gridviewIcon from '../assets/gridviewIcon.png';
import listviewIcon from '../assets/listviewIcon.png';
import GridViewContainer from '../GridViewContainer/GridViewContainer';
import ListViewContainer from '../ListViewContainer/ListViewContainer';
import 'toolcool-range-slider';
import LoadingSpinner from '../Spinner/Spinner';

const ProductList = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [sortingValue, setSortingValue] = useState("default");
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
        setDropdownValue("");
        setSortingValue("default");
        setPriceSlider(100);
        setIsChecked(false);
    }

    useEffect(()=>{
        isChecked ? setFilters({...filters, shipping: "free"}) : setFilters({...filters, shipping:"All"});
    },[isChecked])

    const [syncSort, setSyncSort] = useState(true);

    function handleSort(e){
        const sortingType = e.target.value;
        let list = filteredProductList;
        setSyncSort(!syncSort);
        setSortingValue(e.target.value);
        if(sortingType==="asc"){
            list = list.sort((a,b)=>{
                return a.price - b.price ;
            })
        }
        if(sortingType==="dsc"){
            list = list.sort((a,b)=>{
                return b.price - a.price ;
            })
        }

        if(sortingType==="aToZ"){
            list = list.sort((a,b)=>{
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 1;
                }
                return 0;
            })
        }

        if(sortingType==="zToA"){
            list = list.sort((a,b)=>{
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            })
        }
        setFilteredProductList(list);
    }

    function handleSearch(e){
        if(e.code === "Enter"){
            let searchInput = inputValue.toLowerCase();
            let products = allProductList;
            let list=[];

            for(var i=0; i<products.length; i++){
                let productName = products[i].name.toLowerCase();
                if(productName.match(searchInput)){
                    list.push(products[i]);
                    continue;
                }
                for(var j=0;j<products[i].category.length;j++){
                    if(products[i].category[j].toLowerCase() === searchInput){
                        list.push(products[i]);
                        break;
                    }
                }
            }
            setFilteredProductList(list);
            setInputValue("");
        }
    }

    const [dropdownValue, setDropdownValue] = useState("");
    const [priceSlider, setPriceSlider] = useState(100);

    const $slider = document.getElementById('slider');
    $slider && $slider.addEventListener('change',(e)=>{
        setFilters({...filters, price: e.target.value});
        setPriceSlider(e.target.value);
    })

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div className={styles.searchboxContainer}>
                    <input type="text" className={styles.searchbox} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyUp={handleSearch} placeholder='Search'></input>
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
                    <select name="company" className={styles.selectCompany} value={dropdownValue} onChange={function(e){setFilters({...filters, company: e.target.value}); setDropdownValue(e.target.value)}}>
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
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.listTitle}>Price</div>
                    <div className={styles.price}>${priceSlider}.00</div>
                    <div className={styles.sliderContainer}>
                        <toolcool-range-slider id="slider" min="100" max="2000" value={priceSlider} step="200" slider-width="100%" slider-height="10px" mousewheel-disabled="true" slider-bg="aliceblue" slider-bg-fill="blue" pointer-width="13px" pointer-height="13px"></toolcool-range-slider>
                    </div>
                </div>
                <div className={styles.shippingContainer}>
                    <div className={styles.text}>Free Shipping</div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id='checkbox' onChange={()=>setIsChecked(!isChecked)} className={styles.checkbox} checked={isChecked}></input>
                    </div>
                </div>
                <div className={styles.clearFilters} onClick={clearFilters}>Clear Filters</div>
            </div>
            <div className={styles.right}>
                <div className={styles.filtersContainer}>
                    <div className={styles.viewIconsContainer}>
                        <div className={styles.gridIconContainer} onClick={function(){setCurrentView("grid"); localStorage.list = false;}}>
                            <img style={{boxShadow: currentView==="grid"&& "0px 0px 5px 3px grey"}} src={gridviewIcon} alt="error loading" className={styles.gridViewIcon}></img>
                        </div>
                        <div className={styles.listIconContainer} style={{boxShadow: currentView==="list" && "0px 0px 5px 4px grey"}} onClick={function(){setCurrentView("list"); localStorage.list = true;}}>
                            <img src={listviewIcon} alt="error loading" className={styles.listViewIcon}></img>
                        </div>
                    </div>
                    <div className={styles.productsCountContainer}>{filteredProductList.length} Products Found</div>
                    <div className={styles.lineContainer}><hr></hr></div>
                    <div className={styles.filterContainer}>
                        Sort By &nbsp;
                        <select name="Filter" value={sortingValue} className={styles.filter} onChange={handleSort}>
                            <option value="default" selected disabled>Choose to sort</option>
                            <option value="asc">Price(low to high)</option>
                            <option value="dsc">Price(high to low)</option>
                            <option value="aToZ">Name(a-z)</option>
                            <option value="zToA">Name(z-a)</option>
                        </select>
                    </div>
                </div>
                <div className={styles.cardsContainer}>
                    {props.spinner && <LoadingSpinner />}
                    {currentView === "grid" && !props.spinner && <GridViewContainer syncSort={syncSort} allProductList={filteredProductList} />}
                    {currentView === "list" && !props.spinner && <ListViewContainer syncSort={syncSort} allProductList={filteredProductList} />}
                </div>
            </div>
        </div>
    );
};

export default ProductList;