import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <FacebookOutlinedIcon />
          </a>
          <a href="#" className="me-4 text-reset">
            <TwitterIcon />
          </a>
          {/* Add other social media icons here */}
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-1" />
                PLASHOE
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#" className="text-reset">
                  Collection
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Men
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Women
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Manjeri, Kerala, India
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                mkkpkdm@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-2" /> +91
                9638527410
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-2" /> +91
                9876543210
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="#">
          PLASHOE.COM
        </a>
      </div>
    </MDBFooter>
  );
}
