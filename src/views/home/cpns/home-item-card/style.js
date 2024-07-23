import styled from "styled-components";

const HomeItemCardWrapper = styled.div`

  .ico-delete:hover {
    color: red;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-container {
    display: flex;
    flex-direction: row;
  }
  .ico-setting {
    padding: 2px 6px;
    border-radius: 8px;
  }
  .ico-setting:hover {
    background: rgb(0 96 255 / 10%);
    color: blue;
    cursor: pointer;
  }
`
export default HomeItemCardWrapper;