import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-right: 12px;

    &-text {
      margin: 0 8px;
      font-family: fantasy;
      font-weight: 700;
      font-size: 18px;
    }
  }
  .active {
    background-color: rgb(30 128 255 / 90%);
    color: white;
  }
  button {
    margin-left: 10px;
    /* font-size: 20px; */
    /* font-weight: 700;  和username会太一致，审美疲劳*/
    /* font-size: 48px; */
    position: relative;
    &:first-of-type {
      margin-left: 0;
    }
    span {
      position: relative;
      &::after {
        width: 0;
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 2px solid rgb(177 42 89 / 90%);
        transition: width .4s ease-in-out;
      }
    }
    &:hover {
      background-color: rgb(30 128 255 / 90%)!important;
      color: white !important;
      border: 0;
      span::after {
        width: 100%;
      }
    }
  }
  .username {
    margin-right: 0px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    &-text {
      margin-right: 10px;
    }
  }
`

export default HeaderWrapper