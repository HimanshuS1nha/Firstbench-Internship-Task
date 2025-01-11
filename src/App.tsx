import Navbar from "./components/Navbar";
import Score from "./components/Score";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-gray-100 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-y-10 px-4 lg:px-10 2xl:px-36 pt-8 pb-4">
        <Score />
        <Statistics />
      </div>
    </>
  );
};

export default App;
