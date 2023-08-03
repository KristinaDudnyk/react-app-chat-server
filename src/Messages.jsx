import { useState, useEffect } from "react";
import AllMessages from "./AllMessages";
import SpecificMessage from "./SpecificMessage";

import fetchMessage from "./utils/fetchMessage";

export default function Messages({ refreshMessages }) {
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    fetchMessage(setAllMessages);
  }, [refreshMessages]);

  return (
    <>
      <AllMessages allMessages={allMessages} />
      <SpecificMessage allMessages={allMessages} />
    </>
  );
}
