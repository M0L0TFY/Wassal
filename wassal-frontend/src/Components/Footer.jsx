export function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-md-3">
              <h6>Popular Areas</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://yourwebsite.com/category/html/">Cairo</a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/category/css/">Alexandria</a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/category/javascript/">
                    Sharm El Sheikh
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://yourwebsite.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/contribute/">Careers</a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://yourwebsite.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                &copy; {new Date().getFullYear()} Wassal.com
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
