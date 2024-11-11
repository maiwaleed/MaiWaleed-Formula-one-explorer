// import F1BG from "./assets/images/F1BG.jpg";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="homePageContainer">
        <div className="homePage"></div>
        <Navbar />
        <div>
          <div className="landing-page-container">
            <div className="landing-page-text">
              <h1>Welcome to Our Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ullamcorper felis vel justo euismod, non euismod odio lacinia.
                Nulla facilisi. Aliquam erat volutpat. Suspendisse vehicula
                ipsum a velit placerat, sit amet pretium purus posuere. Mauris
                non gravida lorem. Ut at dolor est. Cras gravida suscipit felis,
                nec fringilla turpis cursus eget.
              </p>
              <p>
                Nulla ornare dui vitae odio volutpat, ac elementum ante tempor.
                Quisque facilisis interdum felis, ac condimentum lectus suscipit
                vel. Integer at risus ipsum. Cras laoreet lacinia gravida.
                Vivamus a tincidunt lectus. Sed sit amet justo neque. In
                consectetur ante sit amet bibendum vehicula. Fusce nec posuere
                lorem, id tincidunt velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
