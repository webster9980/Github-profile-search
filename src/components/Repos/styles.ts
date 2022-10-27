import { styled } from "@stitches/react";

export const Container = styled('main', {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '2rem',
})

export const Profile = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
})

export const ImgProfile = styled('img', {
    objectFit: 'cover',
    borderRadius: '50%',
    maxWidth: '130px',
})

export const DescProfile = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

})

export const NameProfile = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
})

export const H2 = styled('h2', {
    fontSize: '1.5rem',
})

export const Span = styled('span', {
    color: '#3b3b3b',
    textAlign: 'justify'
})