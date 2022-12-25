import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Sceleton from "../components/PizzaBlock/Sceleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {searchContext} from "../App";

const Home = () => {
    const {searchValue} = useContext(searchContext)
    let [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState(0)
    const [activeSort, setActiveSort] = useState( {name: "популярности", sortProp: "rating"},)
    const [currentPage, setCurrentPage] = useState(1)



    const baseApi = 'https://63a3b1d3471b38b20613fdcd.mockapi.io/pizzas'
    const paginationIS = `?p=${currentPage}&l=4`
    const categoryIs = category > 0 ? `&category=${category}` : ''
    const sortBy = `&sortBy=${activeSort.sortProp.replace('-','')}`
    const order =`&order=${activeSort.sortProp.includes('-')? 'ask' : 'desc'}`
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(()=>{
        setLoading(true)
        fetch(`${baseApi}${paginationIS}${categoryIs}${sortBy}${order}${search}`
        )
            .then((res)=>{
                return res.json()
            })
            .then((arr) =>{
                setItems(arr)
                setLoading(false)
            })
            // window.scrollTo(0,0)
        },[category, activeSort, currentPage, searchValue]
    )

    return (
        <>
            <div className="content__top">
                <Categories category = {category} setCategory={setCategory}/>
                <Sort activeSort = {activeSort} setActiveSort = {setActiveSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading
                    ? [...new Array(6)].map((el,idx)=><Sceleton key={idx}/>)
                    : items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
            <Pagination onChangePage = {setCurrentPage}/>
        </>
    );
};

export default Home;