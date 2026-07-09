import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contests() {
  return (
    <>
      <Navbar />

      {/* Page Heading */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>
                Discover what's currently going on at <em>SnapX</em>
              </h2>
              <p>
                When you need Free CSS Templates, you just remember our website
                TemplateMo. We provide you best quality website templates at
                absolutely free of charge. No hidden cost involved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contests;