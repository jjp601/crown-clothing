import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...props}) => (
                    <CollectionPreview key={id} {...props} />
                ))
            }
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);