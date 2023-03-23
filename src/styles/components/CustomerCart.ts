import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
    background: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    width:'480px',
    height: '100%',
    padding: '3rem'
})

export const CartClose = styled(Dialog.Close, {
    position: 'fixed',
    top: 20,
    right: 20,

    '&:hover': {
        color: '$green300'
    }
})

export const CartItemContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',

    img: {
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
    alignContent: 'flex-end',
    background: '$gray500',
    marginTop: '400px',

    span: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    }
})
