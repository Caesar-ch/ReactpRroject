import styled from "styled-components"

const CommunityItemWrapper = styled.div`

  .ant-image {
    margin-left: 10px;
    border: 1px dashed #e2e2e2;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .username {
    color: blue;
    position: relative;
    &:hover {
      color: red;
      &::before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid red;
        width: 100%;
      }
    }
  }
`

export default CommunityItemWrapper