import React from 'react';
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
