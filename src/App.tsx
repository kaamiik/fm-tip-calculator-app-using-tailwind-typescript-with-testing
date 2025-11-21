import Results from './components/Results';
import TipCalculatorForm from './components/TipCalculatorForm';

function App() {
  return (
    <main className="shadow-tip mx-auto mt-10 grid max-w-2xl rounded-t-3xl bg-white md:rounded-3xl lg:mt-20 lg:max-w-230 lg:grid-cols-2 lg:gap-12">
      <h1 className="sr-only">Splitter Tip Calculator App</h1>
      <TipCalculatorForm />
      <Results />
    </main>
  );
}

export default App;
