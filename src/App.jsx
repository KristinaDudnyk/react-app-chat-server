import Header from "./Header";
import Form from "./Form";
import Messages from "./Messages";
import { useState } from "react";

function App() {
  const [refreshMessages, setRefreshMessages] = useState(false);

  return (
    <div className="App">
      <Header />
      <Form setRefreshMessages={setRefreshMessages} />
      <Messages refreshMessages={refreshMessages} />
    </div>
  );
}

export default App;
