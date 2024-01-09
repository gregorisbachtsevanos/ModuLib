import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
    :root {
    --x: 0px;
    --y: 0px;
    }    

    body{
        overflow-x: hidden;
        color: ${({ theme }) => theme.palette.black[900]};
        font-family: 'Space grotesk', sans-serif;
    }
    a {
        color: ${({ theme }) => theme.palette.violet};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    button{
        background-color: initial;
        border: initial;
        outline: initial;
        cursor: pointer;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.palette.white};
        border-radius: 5px;
    }

    *::-webkit-scrollbar-thumb {
        background-color:${({ theme }) => theme.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme }) => theme.palette.white};
    }

    /* Firefox */
    *::-moz-scrollbar {
        width: 10px;
        height: 10px;
    }

    *::-moz-scrollbar-track {
        background-color:${({ theme }) => theme.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme }) => theme.palette.white};
    }

    *::-moz-scrollbar-thumb {
        background-color:${({ theme }) => theme.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme }) => theme.palette.white};
    }
`;
