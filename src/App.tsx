import Navbar from "./components/Navbar";
import Score from "./components/Score";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-gray-100 flex justify-between px-36 pt-8 pb-4">
        <Score />
        <Statistics />
      </div>
    </>
  );
};

export default App;
