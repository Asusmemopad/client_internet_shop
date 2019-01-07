import React from 'react';
import {Link} from 'react-router-dom';

const CreateGoodsButton = () => {
    return (<React.Fragment>
        <Link 
            to = "/addGoods" 
            className = "btn btn-lg btn-info">
            Create a Goods
        </Link>
    </React.Fragment>
    )
};

export default CreateGoodsButton;