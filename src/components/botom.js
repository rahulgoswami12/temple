import {useState} from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Route, } from 'react-router-dom';
import Badriii from './badriii';
const Bottom = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="lop">
        <div className="ty">
          <h1 className="head">
            Shri Badrinath Temple Opening & Closing Dates 2023
          </h1>
          <p className="pt">
            The Badrinath Temple, which is the fourth Dham of the Char Dham Yatra in the Himalayas, is located at an
            elevation of around 3,100 meters on the banks of the Alaknanda River, nestled between the Nar and
            Narayan Mountain ranges. Dedicated to Lord Vishnu, it is also one of the primary temples of the Bada
            (Big) Char Dham Yatra in India, alongside the Dwarkadhish Temple in Gujarat, the Lord Jagannath Temple
            in Puri, Odisha, and the Rameshwaram Temple in Tamil Nadu. The Badrinath temple is scheduled to open on
            27 April 2023 and will remain open until the Dusherra festival. The closing dates of the Shri Badrinath
            Dham temple are determined on the Dusherra (Vijayadashmi) festival, and it is expected that the
            Badrinath temple doors will close for the upcoming winter season in November 2023.
          </p>
        </div>
        <div className="in">
          <img src="https://www.tourmyindia.com/chardham/packages-images/badrinath.webp" alt="" className="inn" />
        </div>
      </div>
      <br/>
      <div className="ooh">
        <div className="ooh1">
          <h1 className="hip">Why to Book <br /> Badrinath Tour <br /> Packages with <br /> us?</h1>
          <p className="pu"> <i className="fa-solid fa-right-long"></i> Cost-Effective</p>
          <p className="pu"><i className="fa-solid fa-right-long"></i> Unique and Personalized Experiences </p>
          <p className="pu"> <i className="fa-solid fa-right-long"></i> Safety and Security</p>
          <p className="pu"> <i className="fa-solid fa-right-long"></i> Expertise and Local Knowledge</p>
          <p className="pu"><i className="fa-solid fa-right-long"></i> Flexibility and Customization</p>
          <p className="pu"> <i className="fa-solid fa-right-long"></i> High-Quality Accommodations</p>
          <p className="pu"> <i className="fa-solid fa-right-long"></i> Peace of Mind</p>
        </div>
        <div>
          <img src="https://www.tourmyindia.com/chardham/packages-images/badrinath-temple-.webp" alt="" />
        </div>
      </div>

      <div class="asho">

<div>
    <h2>Travelling to Uttarakhand in 2023?
    </h2>
    
    <p>
        Contact us for planning your Uttarakhand tour with best travel packages of as per your requirements!
    </p>
    
</div>

<div className="rahul">
        <Link to="#" onClick={() => setShowPopup(true)  }>Book now</Link>
      </div>
      {showPopup && <Badriii showPopup={showPopup} setShowPopup={setShowPopup} />}
      {/* <d>
        <Route path="/badriii" component={Badriii} />
      </d> */}

</div>

<div className="do">
  <br/>
<div className="opu">
<span>eUttarancha </span>
<p className="plo"> Char Dham Yatra</p>
<p className="plo"> Sacred Yatra</p>
<p className="plo"> Kumbh Mela</p>
<p className="plo"> Chopta Tungnath</p>
<p className="plo"> Uttarakhand Stories</p>
<p className="plo"> Uttarakhand Travel Books</p>
</div>

<div className="opu">
<span>eUttarancha </span>
<p className="plo"> Uttarakhand Tourism</p>
<p className="plo"> Uttarakhand Tour Packages</p>
<p className="plo"> Uttarakhand Hotels</p>
<p className="plo"> Uttarakhand News</p>
<p className="plo"> About Us</p>
</div>

<div className="opu">
<span >Customer Service</span>
<p className="plo"> Return, Cancellation & Refund</p>
<p className="plo"> Privacy Policy</p>
<p className="plo"> Contact Us</p>
</div>
<div class="opu">Nmae
<span>Business Connect </span>
<p className="plo">List your Package</p>
<p className="plo">List your Hotel </p>Name
<p className="plo">Send Feedback </p>
<p className="plo"> </p>
</div>

</div>

    </div>
  );
}

export default Bottom;
