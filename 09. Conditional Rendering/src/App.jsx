import Weather from "./component/Weather";
import UserStatus from "./component/UserStatus";
import Greeting from "./component/Greeting";
function App() {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={20} />
      {/* <Weather temperature={20} />
      <Weather temperature={30} /> */}

      {/* UserStatus component */}
      <UserStatus loggedIn={true} isAdmin = {true} />
      {/* <UserStatus loggedIn={false} /> */}

      {/* Greeting component */}
      {/* <Greeting timeOfDay="morning" /> */}
      <Greeting timeOfDay="afternoon" />
      {/* <Greeting /> */}
    </div>
  );
}

export default App;