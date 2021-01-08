import css from 'styled-jsx/css'

export default css`

.mainNavContainer{
    position: fixed;
    width: 100%;
    background: #264F73;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid seashell; */
}

.navItemsContainer{
    color: seashell;
    max-width: 1600px;
    margin: 0 20%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
}

.navItemsContainer p{
    display: flex;
    flex-direction: column;
    /* background: red; */
    align-items: center;
    justify-content: center;
}

.opciones{
    grid-column: 3/6;
    display: flex;
    justify-content: center;
    /* background: red; */
}

.listItems{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
}

.listItems li{
    font-weight: 500;
    margin: 0 20px;
}

.listItems li :hover{
    color: sandybrown;
    /* color: #F2811D; */
}

`