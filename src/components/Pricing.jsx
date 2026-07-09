function Pricing() {
  return (
    <section className="pricing-plans">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <div className="section-heading text-center">
              <h6>Our Pricing</h6>
              <h4>
                Photography <em>Contest Plans</em> and Price <em>Awards</em>
              </h4>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <img src="/images/pricing-01.jpg" alt="Basic Plan" />
              <h4>Basic Plan</h4>

              <ul className="first-plan">
                <li>Lorem Ipsum Dolores Sonte</li>
                <li>Songe Lorem Ipsum Dol</li>
                <li>Matrios Venga Heptuss</li>
                <li>Denim Sriracha Kogi</li>
                <li>Digital Photography Awards</li>
              </ul>

              <span className="price">$25 USD</span>

              <div className="border-button">
                <a href="/">Choose This Plan</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <img src="/images/pricing-02.jpg" alt="Standard Plan" />
              <h4>Standard Plan</h4>

              <ul className="second-plan">
                <li>Lorem Ipsum Dolores Sonte</li>
                <li>Songe Lorem Ipsum Dol</li>
                <li>Matrios Venga Heptuss</li>
                <li>Denim Sriracha Kogi</li>
                <li>Digital Photography Awards</li>
              </ul>

              <span className="price">$45 USD</span>

              <div className="border-button">
                <a href="/">Choose This Plan</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <img src="/images/pricing-03.jpg" alt="Advanced Plan" />
              <h4>Advanced Plan</h4>

              <ul className="third-plan">
                <li>Lorem Ipsum Dolores Sonte</li>
                <li>Songe Lorem Ipsum Dol</li>
                <li>Matrios Venga Heptuss</li>
                <li>Denim Sriracha Kogi</li>
                <li>Digital Photography Awards</li>
              </ul>

              <span className="price">$85 USD</span>

              <div className="border-button">
                <a href="/">Choose This Plan</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;