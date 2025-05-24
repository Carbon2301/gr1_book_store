import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
    cartItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push({ ...action.payload, quantity: 1 })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart",
                    text: "Your item has been added successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    toast: true,
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutRight'
                    }
                });
            }else{
                existingItem.quantity = (existingItem.quantity || 1) + 1;
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Item already in cart",
                    text: "This item is already in your shopping cart! Quantity increased!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    toast: true,
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutRight'
                    }
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product removed from cart",
                text: "Your item has been removed successfully!",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                toast: true,
                customClass: {
                    popup: 'colored-toast'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutRight'
                }
            });
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i._id === action.payload);
            if (item) item.quantity = (item.quantity || 1) + 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i._id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        setQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(i => i._id === id);
            let q = parseInt(quantity, 10);
            if (item) {
                if (isNaN(q) || q < 1) q = 1;
                item.quantity = q;
            }
        }
    }
})

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;