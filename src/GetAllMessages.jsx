import { useState, useEffect } from "react";

export default function GetAllMessages() {
  const [allMessages, setAllMessages] = useState([]);
  const [messageById, setMessageById] = useState([]);

  const [showAllMessages, setShowAllMessages] = useState(false);
  const [showMessageById, setShowMessageById] = useState(false);

  const fetchMessage = async (id) => {
    console.log("fetchMessage(id)", id);
    try {
      let url;
      if (id) {
        url = `https://kristina-chat-server-api.onrender.com/messages/${id}`;
      } else {
        url = "https://kristina-chat-server-api.onrender.com/messages";
      }

      const response = await fetch(url);
      console.log("fetchMessage response:", response);

      if (!response.ok) {
        throw new Error("fetchMessage response not ok");
      }

      const dataAsJson = await response.json();
      console.log("fetchMessage dataAsJson:", dataAsJson);

      if (id) {
        setMessageById(dataAsJson);
      } else {
        setAllMessages(dataAsJson);
      }
    } catch (error) {
      console.log("fetchMessage error block:", error);
    }
  };

  const handleShowAllMessages = () => {
    setShowAllMessages(!showAllMessages);
  };

  const handleSelect = (event) => {
    console.log("handleSelect event.target.value:", event.target.value);
    if (event.target.value === "none") {
      return setShowMessageById(false);
    }
    fetchMessage(event.target.value);
    setShowMessageById(true);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <div className="all-messages-container">
        <button onClick={handleShowAllMessages} className="all-messages-show">
          See all messages
        </button>
        {showAllMessages && (
          <ul className="all-messages-list">
            {allMessages.map((message) => {
              return (
                <li
                  key={`message-object-${message.id}`}
                  className="all-messages-list-item"
                >
                  <span className="all-messages-list-item-label-from">
                    From:
                  </span>
                  <span className="all-messages-list-item-from">
                    {message.from}
                  </span>
                  <span className="all-messages-list-item-label-message">
                    Message:
                  </span>
                  <span className="all-messages-list-item-message">
                    {message.text}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

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
    </>
  );
}
