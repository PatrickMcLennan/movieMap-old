import styled from 'styled-components';

export const StyledForm = styled.form`
    ${({theme: {flexin}}) => flexin('space-evenly', 'center', 'column')}
    width: 30vw;
`
export const StyledInput = styled.input`
    margin: 5rem 0;
    padding: .75rem;
    font-size: 2rem;
    width: 100%;
    background: none;
    border: none;

    &:invalid {
        border-bottom: 2px solid red;
    }
    &:valid {
        border-bottom: 2px solid green;
    }
`

export const StyledButtonBox = styled.div`
    ${({ theme: { flexin } }) => flexin('space-between')};
    width: 100%;
    margin-top: 7.5rem;
    padding: 2.5rem;
`

export const BiggestButton = styled.button`
    background-color: none;
    padding: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: .25rem;
    border: 1px solid red;  
    cursor: pointer;
`

export const ButtonInput = styled.input`
    background-color: none;
    padding: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: .25rem;
    border: 1px solid red;  
    cursor: pointer;
`