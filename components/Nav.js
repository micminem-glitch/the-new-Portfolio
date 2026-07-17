export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          micheal<span>.dev</span>
        </div>
        <ul className="navlinks">
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#repos">code</a>
          </li>
          <li>
            <a className="nav-cta" href="#contact">
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
