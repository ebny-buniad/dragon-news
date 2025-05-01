import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res) => res.json())

const Categories = () => {
    const categories = use(categoryPromise)

    // console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            {
                categories.map((category) =>
                    <NavLink to={`/category/${category.id}`} key={category.id}
                className="grid grid-cols-1 gap-3 my-1 py-2 px-2">{category.name}</NavLink>)
            }
        </div>
    );
};

export default Categories;