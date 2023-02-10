import React from "react";
import { Link } from "react-router-dom";

import TiketInput from "../../component/Landingpages/InputTicket";
import CreateTicket from "../../component/Landingpages/CreateTicket";
import FiturWhatsapp from "../../component/Landingpages/FiturWhatsapp";

class LandingPage extends React.Component {
  render() {
    return (
      <section>
        <Link to="/login" className="btn btn-primary ml-3 mt-3 ">
          Login
        </Link>
        <div className="landingpage">
          <TiketInput />
          <CreateTicket />
          <FiturWhatsapp />
        </div>
      </section>
    );
  }
}

export default LandingPage;
