import { footer } from "react-bootstrap";
const Footer = () => (
  <footer
    className="page-footer font-small cyan darken-3 bg-dark "
    style={{
      position: "relative",
      bottom: "0",
      marginTop: "70%",
      width: "100%",
    }}
  >
    <div className="footer-copyright  py-3">
      <a style={{ color: "white", marginLeft: "1%" }}>
        <i>© 2020 Copyright: </i>
      </a>
      <a className="ins-ic" id="anchorspace" style={{ paddingLeft: "10%" }}>
        <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      <a className="tw-ic" id="anchorspace" style={{ paddingLeft: "10%" }}>
        <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      <a className="fb-ic" id="anchorspace" style={{ paddingLeft: "10%" }}>
        <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
          {" "}
        </i>
      </a>
      <a className="pin-ic" id="anchorspace" style={{ paddingLeft: "10%" }}>
        <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
      </a>
    </div>
  </footer>
);

export default Footer;
