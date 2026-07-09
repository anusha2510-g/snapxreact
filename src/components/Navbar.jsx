function Navbar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">

              {/* Logo */}
              <a href="/" className="logo">
                <img
                  src="/images/logo.png"
                  alt="SnapX Photography Template"
                />
              </a>

              {/* Menu */}
              <ul className="nav">
                <li>
                  <a href="/" className="active">
                    Home
                  </a>
                </li>

                <li className="has-sub">
                  <a href="/">Photos &amp; Videos</a>

                  <ul className="sub-menu">
                    <li>
                      <a href="/contests">Contests</a>
                    </li>

                    <li>
                      <a href="/contest-details">
                        Single Contest
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/categories">Categories</a>
                </li>

                <li>
                  <a href="/users">Users</a>
                </li>
              </ul>

              <div className="border-button">
                <a href="/" className="sign-in-up">
                  Sign In / Up
                </a>
              </div>

              <a href="/" className="menu-trigger">
                <span>Menu</span>
              </a>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;