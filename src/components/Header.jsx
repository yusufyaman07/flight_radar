import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector(store => store);

  return (
    <header>
      <div>
        <img src="/plane-l.png" />
        <h3>Flight Radar</h3>
      </div>

      <p>
        {state.isLoading
          ? "Flights are being calculated..."
          : state.isError
          ? "Something went wrong :(:("
          : state.flights.length + " Flight Found"}
      </p>
    </header>
  );
};

export default Header;
