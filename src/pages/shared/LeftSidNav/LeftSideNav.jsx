import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="space-y-5">
            <h1 className="tex-2xl">All Caregories</h1>
            {
                categories.map(category => <Link
                to={`/category/${category.id}`}
                    className="block ml-4 text-xl font-semibold "
                    key={category.id}>
                    {category.name}
                    
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav; 