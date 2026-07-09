import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Categories() {
  return (
    <>
      <Navbar />

      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>
                Discover Most Popular Categories on <em>SnapX</em>
              </h2>
              <p>
                You are allowed to freely use SnapX Photography Template for your
                commercial websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Categories;