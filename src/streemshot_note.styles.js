import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const noteTextStyles = {
  fontSize: "14px",
  lineHeight: "18px",
  padding: "12px",
  fontFamily: "Source Sans Pro",
  fontWeight: 600,
  backgroundColor: "#efefef",
  borderRadius: "4px",
  width: "100%"
};

const openNote = height => keyframes`
   0% {
        height: ${height}px;
   }
   100% {
        height: 200px;
   }
`;

export const ActiveNote = styled.textarea(
  {
    ...noteTextStyles,
    outline: "none",
    border: "1px solid #008cff",
    resize: "none",
    overflowY: "scroll",
    maxLength: "30"
  },
  ({ inputHeight }) => {
    return { animation: `${openNote(inputHeight)} 200ms 1 normal forwards` };
  }
);

const boxShadow = () => {
  return {
    transition: "box-shadow .15s ease-in",
    boxShadow: "0 2px 4px 0 rgba(63,103,139,0.50)",
    ":hover": {
      boxShadow:
        "0 0 8px 0 rgba(63,103,139,0.10), 0 8px 8px 0 rgba(63,103,139,0.25)",
      cursor: "pointer"
    },
    ":active": {
      boxShadow: "none"
    }
  };
};

export const SaveButton = styled.button(
  {
    backgroundColor: "#008cff",
    width: "86px",
    height: "26px",
    borderRadius: "15px",
    fontFamily: "Source Sans Pro",
    fontSize: "12px",
    fontWeight: 600,
    color: "#fafafa"
  },
  boxShadow
);

export const NotePlaceholder = styled.span({
  fontFamily: "Source Sans Pro",
  fontSize: "14px",
  lineHeight: "18px",
  color: "#4a4a4a",

  "::before": {
    content: "'Add notes to a streemshot'"
  }
});

export const CancelButton = styled.a({
  height: "26px",
  lineHeight: "26px",
  width: "26px",
  fontWeight: 600,
  fontSize: "18px",
  marginLeft: "10px",

  ":hover": {
    color: "#DC3535",
    cursor: "pointer"
  }
});

// export const StaticNote = styled.p({
//     ...noteTextStyles,
//     wordWrap: 'break-word',
//     overflowY: 'scroll',
//     padding: '12px',
// });

export const StaticNote = styled.textarea({
  ...noteTextStyles,
  wordWrap: "break-word",
  overflowY: "scroll",
  padding: "12px"
});

export const NoteFooter = styled.div({
  display: "flex",
  marginTop: "10px",
  width: "100%",
  alignItems: "center"
});

export const NoteContainer = styled.div({
  marginTop: "5px",
  marginBottom: "10px"
});

export const CharCounter = styled.span(
  {
    fontSize: "12px",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300,
    flexGrow: 1,
    textAlign: "right"
  },
  ({ noteLimitReached }) => ({ color: noteLimitReached ? "red" : "#2c2c2c" })
);
