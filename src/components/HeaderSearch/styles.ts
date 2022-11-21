import { styled } from '@stitches/react';

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: '800px',
    margin: '0.5rem auto',
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
    border: '2px solid #00FF00',
    outline: '0'
});

export const ButtonHeader = styled('button', {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '0',
    color: '#fff',
    background: '#00FF00',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',

    '&:disabled': {
        background: '#088A08',
        cursor: 'not-allowed'
    }
});
