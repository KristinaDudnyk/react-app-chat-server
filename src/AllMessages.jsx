import { useState } from "react";

export default function AllMessages({ allMessages }) {
  const [showAllMessages, setShowAllMessages] = useState(false);

  const handleShowAllMessages = () => {
    setShowAllMessages(!showAllMessages);
  };

  return (
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
                <span className="all-messages-list-item-label-from">From:</span>
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
  );
}
