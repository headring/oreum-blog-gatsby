import React from "react";
import CommentBox from "../../components/CommentInput";
import CommentList from "../../components/CommentList";
import ContentsBox from "../../components/ContentsBox";
import QuickCommentButton from "../../components/QuickCommentButton";
// import GlobalStyle from "../../styles/GlobalStyle";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body.dark {
    -webkit-font-smoothing: antialiased;

    --bg: darkslategray;
    --textNormal: rgba(255, 255, 255, 0.88);
    --textTitle: white;
    --textLink: yellow;
    --hr: hsla(0, 0%, 100%, 0.2);

    background-color: var(--bg);
    color: var(--textTitle);
  }
`;

function ContentsPage() {
  return (
    <div>
      <GlobalStyle />
      <ContentsBox />
      <CommentBox />
      <CommentList />
      <QuickCommentButton />
    </div>
  );
}

export default ContentsPage;