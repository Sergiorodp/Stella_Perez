import css from 'styled-jsx/css'
import { colors, breackPoint } from '../appLayout'

export default css`

.mainNavContainer{
    position: fixed;
    width: 100vw;
    background: ${colors.primary};
    display: grid;
    height: 4rem;
    place-content: center;
    /* border-bottom: 1px solid seashell; */
}

.navItemsContainer{
    color: ${colors.white};
    max-width: 1600px;
    width: 70vw;
    /* margin: 0 20%; */
    display: grid;
    /* background: red; */
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
    color: ${colors.secondary};
    /* color: #F2811D; */
}

.lines-nav-container{
    display: none;
}

.lines-block{
    cursor: pointer;
}

@media (max-width: ${breackPoint.mobile}){

    .navItemsContainer{
        width:80vw;
        grid-template-columns: repeat(2,1fr)
    }
    .opciones{
        display:none;
    }
    
    .lines-nav-container{
        display: flex;
        grid-column: 2/3;
        /* background: black; */
        align-items: center;
    }

    .lines-block{
        margin-left:auto;
    }

    .line-div{
        width: 25px;
        height: 2px;
        background-color: ${colors.white};
        margin-bottom: 4px;
        border-radius:9999px;
        transition: 0.2s ease-in-out;
    }

    .moverLeft{
        width: 35px;
    }

    .moverRight{
        width: 28px;
    }

}

`