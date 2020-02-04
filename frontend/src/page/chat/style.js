import styled from 'styled-components';

export const ChatStyle = styled.div`

    h1 {
        display: flex;
        justify-content: center;
    }

    .textContent {
        /* display: flex; */
        margin: 0 auto;
        margin-top: 50px;
        padding: 20px;
        width: 700px;
        height: 500px;
        background: #fff;
        border-radius: 20px;
        font-family: sans-serif;
        font-size: 20px;
        overflow: scroll;
        /* height: auto; */
    }

    .inputPosition {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    input {
        width: 650px;
        font-family: sans-serif;
        font-size: 20px;
    }

    ul {
        color: green;  
        margin-top: 10px; 
    }


    li {
        margin-left: 15px;
        margin-top: 4px;
        color: #000;
        list-style-type: none;
    }

    

`;