import styled from 'styled-components';

export const StyledForm = styled.form`
    ${({theme: {flexin}}) => flexin('space-evenly', 'center', 'column')}
    height: 30vh;
    width: 30vw;
`
export const StyledInput = styled.input`
    padding: .75rem;
    font-size: 2rem;
    width: 100%;
    border: none;

    &:invalid {
        border-bottom: 2px solid red;
    }
    &:valid {
        border-bottom: 2px solid green;
    }
`