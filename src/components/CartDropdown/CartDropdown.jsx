import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? 
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )
                    }) : 
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));