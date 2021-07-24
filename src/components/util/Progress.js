import styled from "styled-components";

export const Progress = styled.span`
  ${(props) => props.width && `width: ${props.width}%`};
  ${(props) => props.color && `color: ${props.color}`};
`;
