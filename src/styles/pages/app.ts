import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
        border: 0,
        width: '3rem',
        height: '3rem',
        color: '$gray100',
        background: '$gray800',
        borderRadius: '6px',
        cursor: 'pointer',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:not(:disabled):hover': {
            background: '$green300',
        },
        
        span: {
            position: 'absolute',
            margin: '-40px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '$green500',
            border: '2px solid $gray900',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            color: 'white',
            fontWeight: 'bold',
        }
    }
})