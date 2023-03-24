import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from "@stitches/react";

const slide = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
});

export const CartContent = styled(Dialog.Content, {
    background: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    width:'480px',
    height: '100%',
    padding: '3rem',
    animation: `${slide} 500ms`
})

export const CartClose = styled(Dialog.Close, {
    position: 'fixed',
    top: 20,
    right: 20,
    transition: '0.3s',
    cursor: 'pointer',

    '&:hover': {
        color: '$green300'
    }
})

export const CartContainer = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    overflowY: 'scroll',
    marginTop: '2rem',

    '&::-webkit-scrollbar': {
        display: 'none',
    }
    
})

export const CartItemContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',

    img: {
        borderRadius: 8,
        objectFit: 'cover',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    }
})

export const CartItemText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',

    p: {
        fontSize: '1.125rem',
    },

    strong: {
        fontSize: '1.125rem',
        color: '$white',
    },

    button: {
        border: 'none',
        background: 'inherit',
        cursor: 'pointer',
        fontWeight: 'bold',
        color:'$green500',
        fontSize: '1rem',

        '&:hover': {
            color:'$green300',
        }
    },

})

export const CartFooter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    span: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',

        '&:first-child': {
            marginTop: '1rem',

            'p + p': {
                fontSize: '1.125rem',
                color: '$gray300'
            }
        },

        strong: {
            fontSize: '1.125rem',
            color:'$gray100',
            marginBottom: '1rem',

            '&:last-child': {
                fontSize: '1.5rem',
            }
        }
    },

    button: {
        border: 0,
        borderRadius: 8,
        paddingBottom: '1rem',
        paddingTop: '1rem',
        background: '$green500',
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '$white',
        cursor: 'pointer',
        transition: '0.3s',

        '&:hover': {
            background: '$green300',
        }
    }
})
