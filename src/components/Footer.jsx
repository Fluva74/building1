import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="foot-nav">
        <li><a className="foot-link" href="#!">ABOUT</a></li>
        <li><a className="foot-link" href="#!">HUMOR</a></li>
        <li><a className="foot-link" href="#!">CONTACT</a></li>
      </ul>
      <div className="foot-socials">
          <a href="#!"><i className="fab fa-facebook-square"></i></a>
          <a href="#!"><i className="fab fa-twitter-square"></i></a>
          <a href="#!"><i className="fab fa-pinterest-square"></i></a>
      </div>
      <div className="copyright">
<p className="credit">&copy; 2022 Mike Finnegan. All Rights Reserved.</p>
      </div>
    </div>
  )
}
