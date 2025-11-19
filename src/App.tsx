import Results from "./components/Results";
import TipCalculatorForm from "./components/TipCalculatorForm";

function App() {
  return (
    <main className="bg-white rounded-t-3xl md:rounded-3xl mt-10 lg:mt-20 max-w-2xl mx-auto lg:max-w-230 grid lg:grid-cols-2 lg:gap-12">
      <h1 className="sr-only">Splitter Tip Calculator App</h1>
      <TipCalculatorForm />
      <Results />
    </main>
  );
}

export default App;
