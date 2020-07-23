import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { navigate } from '@reach/router';


export default({id}) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setIsLoading(false);
            })
    }, [id]);

        if(isLoading === true) return 'Loading...';

    return(
        <div>
            <h1>New Product:</h1>
            <ProductForm 
                product={product}
                method="put"
                url={'http://localhost:8000/api/product/' + id}
            />
            <DeleteButton id={product._id} success={()=>navigate('/')} />
        </div>
    )
}