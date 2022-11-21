import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '3rem',
    gap: '0.5rem',
});

export const H1 = styled('h1', {
    color: 'rgb(0, 204, 0)',
});

export const CardRepo = styled('section', {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    gap: '1rem'
});

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'flex-end'
});

export const CardStar = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
});

export const Img = styled('img', {
    borderRadius: '50%',
    maxWidth: '100px',
});

export const TitleAndDesc = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
});