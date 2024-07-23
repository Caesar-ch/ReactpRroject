import styled from "styled-components";


const HomeFollowListWrapper = styled.div`
    min-width: 150px;
    border-radius: 10px;
    background: #e8e8e8;
    text-align: center;
    .header {
      padding: 10px 8px;
      font-size: 20px;
      color: rgb(177, 42, 91);
      font-weight: 700;
    }
    .item {
      padding: 6px 4px;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        color: #1da1f2;
        cursor: pointer;
      }
    }
    .callback-btn {
      margin: 10px 0;
    }
`
export default HomeFollowListWrapper;