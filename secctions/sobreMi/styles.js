import css from 'styled-jsx/css'
import { breackPoint, colors } from '../../components/appLayout/index'

export default css`
.main-me-container{
    background: ${colors.secondary};
    display:flex;
    /* width 80vh; */
    /* height: 80vh; */
    justify-content: center;
    align-items: center;
}

.section-container{
    /* background:red; */
    width: 60em;
    /* height: 30em; */
    display: grid;
    margin: 30px;
    /* background: seashell; */
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: repeat(2,1fr);
}

.info-container{
    /* background:red; */
    /* padding-top: 5%; */
    grid-column: 1/2;
    grid-row: 1/3;
    text-aling : center;
    color: ${colors.primary};
}

.info-container h3{
    font-size: 50px;
    margin: 10px;
}

.info-container p{
    margin: 10px;
    font-size: 25px;
}

@media (max-width: ${breackPoint.mobile}){
    
    .info-container h3{
        font-size: 40px;
        margin: 10px;
    }

    .info-container p{
        margin: 10px;
        font-size: 15px;
    }

    .section-container{
        grid-template-columns: 1fr;
    }
}

`