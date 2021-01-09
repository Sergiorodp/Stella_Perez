import css from 'styled-jsx/css'

import {colors, breackPoint} from '../appLayout/index'

export default css`

.hov{
    margin-top: 110px;
}

.buttonMain{
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${colors.white};
    border-radius: 7px;
    padding: 8px 24px;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.2s ease-in-out;
}

.buttonMain:hover,
.buttonMain:focus{
    border: 2px solid ${colors.primary};
    background: ${colors.primary};
    padding: 8px 24px;
    color: ${colors.secondary};
}

`