import ReactDom from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchRef from "./refs/UserSearchRef";

const App = () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
      <UserSearchRef />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
