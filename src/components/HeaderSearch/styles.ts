import { styled } from '@stitches/react';

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: '800px',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
});

export const DivHeaderContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
});

export const Form = styled('form', {
    width: '100%',
});

export const InputContainer = styled('input', {
    width: '400px',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '2px solid #00875F',
    outline: '0'
});

export const ButtonHeader = styled('button', {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '0',
    color: '#fff',
    background: '#00875F',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
    }
});

export const TituloH1 = styled('h1', {
    color: '#fff',
    fontSize: '2rem'
})
