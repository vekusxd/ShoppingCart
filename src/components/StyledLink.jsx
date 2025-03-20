import { Link as RouterLink } from "react-router";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Link = (props) => <StyledLink {...props} />;

export default Link;
