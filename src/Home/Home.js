import Header from "../Shared/Header";

import Footer from "../Shared/Footer";
import TalkToUsForm from "./TalkToUsForm";

function Home() {
  let homePageMsg = "From Home Component";
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-6 mt-5">
          <h4>Get Job Ready in 6 months</h4>
          <p>Learned from industry experts.</p>
        </div>
        <div className="col-6 mt-5">
          <TalkToUsForm message={homePageMsg} />
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
