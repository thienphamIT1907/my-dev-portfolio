import styled from 'styled-components';

const ThemeToggleButtonStyled = styled.button`
  .mode-toggle {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 300px;
    right: 250px;
    cursor: pointer;
    z-index: 2;
    transition: 1s;
  }

  .mode-toggle.active {
    background-color: white;
    transition: 1.5s;
  }

  .container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: 50%;
    width: 20px;
    height: 20px;
  }

  .dark-mode {
    position: relative;
    transform: scale(0);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 250vw;
    height: 250vw;
    border-radius: 50%;
    background-color: #161616;
    transition: 1.5s ease-in-out;
    display: flex;
    flex: 0 0 auto;
  }

  .dark-mode.active {
    transform: scale(1);
    transition: 1.5s ease-in-out;
  }

  h1 {
    color: #ffffffb0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
  }

  @media screen and (max-width: 600px) {
    .dark-mode {
      width: 500vh;
      height: 500vh;
    }
  }
`;

export default ThemeToggleButtonStyled;
