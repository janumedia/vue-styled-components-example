import styled from 'vue-styled-components'

const primaryColor = '#102E5A';
const primaryText = '#F3F2F3';

const secondaryColor = '#6D9FB5';
const secondaryText = '#FFF';

const disabledColor = 'rgb(218, 218, 218)';
const disabledText = 'rgb(187, 186, 186)';

const borderColor = '#6D9FB5';

const StyledButton = styled('button', {primary: Boolean})`
    font-size: inherit;
    border: min(0.05em, 0.05em) solid ${borderColor};
    display:inline-block;
    vertical-align:middle;
    text-decoration:none;
    color: ${props => props.primary ? primaryText : secondaryColor };
    background-color: ${props => props.primary ? secondaryColor : 'inherit' };
    text-align:center;
    cursor:pointer;
    white-space:nowrap;
    transition-duration: 0.4s;
    padding: 0.6em 1em;
    &:focus {
        outline: none;
    }
    & span,
    & a {
        display:block;
        color: ${props => props.primary ? secondaryText : primaryText};
        padding: 0.6em 1em;
        margin: -0.6em -1em; //reset parent padding
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.4s;
    }
    &:hover,
    &:hover > span,
    & > a:hover {
        color: ${primaryText};
        background-color: ${props => props.primary ? primaryColor : secondaryColor};
        border-color: ${props => props.primary ? primaryColor : borderColor};
    }
    &:disabled {
        cursor: not-allowed;
        color: ${disabledText};
        border-color: ${disabledColor};
        background-color: ${disabledColor};
        &:hover,
        &:hover > span,
        & > a:hover {
            color: ${disabledText};
            border-color: ${disabledColor};
            background-color: ${disabledColor};
        }
    }
`

export default StyledButton;