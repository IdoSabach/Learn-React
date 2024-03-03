import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import FunctionalInput from "./components/FunctionalInput.jsx";


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <FunctionalInput name={"ido"}/>
    </>
  );
}

export default App;
