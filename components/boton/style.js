import css from 'styled-jsx/css'

export default css`

.hov{
    margin-top: 110px;
}

.buttonMain{
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid seashell;
    border-radius: 7px;
    width: 120px;
    height: 60px;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.2s ease-in-out;
}

.buttonMain:hover,
.buttonMain:focus{
    border: 3px solid #264F73;
    background: #264F73;
    color: sandybrown;
}

`