// write your CatList component here
import React from 'react';

export default function CatList(props) {
    // debugger;
    const renderCats = () => props.catPics.map(cat => <div><img src={cat.url} /></div>);
    return (
        <div>
            {renderCats()}
        </div>
    )
};