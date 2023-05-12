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
    position: fixed;
    height: 70px;
    color: white;

    padding: 0.4rem 0.5rem;
    top: 0;

    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;   
      display: flex;
      width: 100%
    }

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
    margin-top: 1.875rem;
  }

  .swiper {
    width: 100%;
    height: auto;

    .swiper-slide {
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;

        figcaption {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        p {
          margin: 0;
        }
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .entry-content {
    padding: 1rem 10%;
    width: 100%;
  }

  container {
    width: 100%;
        flex-direction: column;
    display: flex;
  }
`;
