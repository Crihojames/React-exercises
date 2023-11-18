import React,{useContext} from 'react';
import { PriceContext, ItemContext } from '../App';
import ComponentZ from './ComponentZ';

const ComponentY = () => {
    const price = useContext(PriceContext)
    const item = useContext(ItemContext)
    return (
        <div>
            {price} - {item}
        </div>
    );
};

export default ComponentY;