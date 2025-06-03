import styled from "styled-components";

export const TextArea = styled.textarea`
    border-radius: 10px;
    font-weight: 800;
    font-size: 24px;
    background-color: ${props => props.disabled ? 'grey' : 'white'};      
`