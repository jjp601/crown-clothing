import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartContainer onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
        </CartContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);