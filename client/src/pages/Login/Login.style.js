import styled from 'styled-components';

export const StyledBackdrop = styled.section`
    ${({ theme: { fullPage } }) => fullPage }
    ${({ theme: { flexin } }) => flexin('center', 'center', 'column') }
    ${({ theme: { schemeBg } }) => schemeBg() }
`

export const StyledH1 = styled.h1`
    font-size: 3.5rem;
`

