import "./css/LandingPage.css";
import React, { useState} from "react";
import "./css/LandingPage.css";
import NavPrimary from "../../Components/NavBarPrimary/NavPrimary";
import Footer from "../../Components/Footer/Footer";
function LandingPage() {
  const [serviceBtnState, setServiceBtnState] = useState(false);

  let btnId = "activeBtn";

  if (serviceBtnState) {
    btnId = "inactive";
  }


  return (
    <div>
      {/* nav end */}

      <div className="landingPageContainer">
        <div className="bannerContainer">
          <NavPrimary />

          <div className="bannerTxt">
            <h1 className="heading">
              {" "}
              <span className="weTakeYou"> sell your </span> <br />{" "}
              <span className="higher"> SKILLS </span>
            </h1>
            <br />

          
            <br />
          </div>
        </div>

        <section className="whoSec">
          <div className="whoContainer">
            <div className="whoLeft">
              <h2 className="whoTxt" style={{ marginTop: "5%" }}>
                Who We <br />
                Are ?
              </h2>
            </div>

            <div className="whoRight">
              <p>
                We are a remote engineering service firm providing services to
                employers and opportunities to employees
              </p>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="serviceContainer">
            <h2>Our Services</h2>

            <div className="optionBtnDiv">
            <a href="/services">  
              <button
                className="optionBtn "
                id={btnId}
                onClick={(e) => setServiceBtnState(false)}
              >
                For Employers
              </button>
              </a>

              <a href="/services">  
              <button
                className="optionBtn"
                onClick={(e) => setServiceBtnState(true)}
              >
                For Employees
              </button>
              </a>
            </div>
          </div>
          
        </section>

        <section className="vacancies">
        <div className="vacnciesContainer">
            <div className="vacanciesLeft">
                <h2>Explore New Opportunities</h2>
                 <br />
                 <br />

                <h3>We bring you new carrier opportunities <br /> and help you scale up your life.</h3>
            </div>

            <div className="vacanciesRight">
         <a href="/jobs">   <button  class="button-86" role="button">See Vacancies</button> </a>

            </div>
          </div>
        </section>
      </div>
  
      <Footer/>
    </div>
  );
}

export default LandingPage;
