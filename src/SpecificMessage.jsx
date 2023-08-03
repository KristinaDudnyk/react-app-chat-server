import { useState, useEffect } from "react";
import fetchMessage from "./utils/fetchMessage";

export default function SpecificMessage({ allMessages }) {
  const [messageById, setMessageById] = useState([]);
  const [showMessageById, setShowMessageById] = useState(false);
  const [messageId, setMessageId] = useState(null);

  const handleSelect = (event) => {
    console.log("handleSelect event.target.value:", event.target.value);
    if (event.target.value === "none") {
      return setShowMessageById(false);
    }
    setMessageId(event.target.value);
    setShowMessageById(true);
  };

  useEffect(() => {
    if (messageId) {
      fetchMessage(setMessageById, messageId);
    }
  }, [messageId]);

  return (
    <div className="one-message-container">
      <div className="one-message-controls">
        <label>See one specific message</label>
        <select onChange={handleSelect}>
          <option value={"none"}>id</option>
          {allMessages.map((message) => {
            return (
              <option key={`option-${message.id}`} value={message.id}>
                {message.id}
              </option>
            );
          })}
        </select>
      </div>
      {showMessageById && (
        <div className="one-message">
          <span className="one-message-label-from">From:</span>
          <span className="one-message-from">{messageById.from}</span>
          <span className="one-message-label-message">Message:</span>
          <span className="one-message-message">{messageById.text}</span>
        </div>
      )}
    </div>
  );
}
