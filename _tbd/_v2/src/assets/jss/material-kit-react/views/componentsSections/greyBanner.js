import { container, title } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
    textAlign: "center"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
};

export default carouselStyle;
