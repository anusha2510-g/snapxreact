import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Users() {
  return (
    <>
      <Navbar />

      {/* --- Page Heading Section --- */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>Discover Top Active <em>Users</em> on <em>SnapX</em></h2>
              <p>Browse through our talented community of photographers and see who is leading the global photo contests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Top Users Grid Section --- */}
      <section className="top-users">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h6>Community Leaders</h6>
                <h4>Our Most <em>Popular</em> &amp; Active <em>Photographers</em></h4>
              </div>
            </div>
            
            {/* User 1 */}
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="/assets/images/author.jpg" alt="User Avatar" />
                </div>
                <h4>Thomas Wilson</h4>
                <span>Rank #1</span>
                <div className="border-button">
                  <a href="#">View Profile</a>
                </div>
              </div>
            </div>

            {/* User 2 */}
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="/assets/images/author.jpg" alt="User Avatar" />
                </div>
                <h4>John Walker</h4>
                <span>Rank #2</span>
                <div className="border-button">
                  <a href="#">View Profile</a>
                </div>
              </div>
            </div>

            {/* User 3 */}
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="/assets/images/author.jpg" alt="User Avatar" />
                </div>
                <h4>Vincent Anthon</h4>
                <span>Rank #3</span>
                <div className="border-button">
                  <a href="#">View Profile</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Users;