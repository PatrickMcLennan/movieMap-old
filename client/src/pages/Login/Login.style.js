import styled from 'styled-components';

export const StyledBackdrop = styled.section`
    ${({ theme: { fullPage } }) => fullPage}
    ${({ theme: { flexin } }) => flexin()}
`