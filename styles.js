import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 70px 0 
  }

  header {
    width: 100%;
    background: black;
    display: flex;
    position: fixed;
    height: 70px;
    color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.5rem;
    top: 0;

    img {
      width: 60px;
      height: 60px;
    }
  }  
  
  footer {
    width: 100%;
    background: black;
    display: flex;
    position: fixed;
    height: 60px;
    color: white;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.4rem 0.5rem;
    bottom: 0;

    img {
      width: 45px;
      height:45px;
    }
  }

  .layout-swipe-nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 0.25rem;
  }

  .swiper {
    width: 100%;
    height: auto;

    .swiper-slide {
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;

        figcaption {
          text-align: center;
        }
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
