import React, {useContext} from 'react';
import style from './Search.module.scss'
import {BsSearch} from 'react-icons/bs'
import {searchContext} from "../../App";

const Index = () => {
    const {searchValue, setSearchValue} = useContext(searchContext)
    return (
        <div className={style.root}>
            <BsSearch/>
            <input value={searchValue}
                   onChange={e=>setSearchValue(e.target.value)}
                   type='text' size={40} maxLength={30} placeholder='Поиск пиццы...'/>
        </div>
    );
};

export default Index;