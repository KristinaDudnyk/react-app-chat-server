// import { useEffect, useState } from "react";

export default function Form() {
  // const [newMessage, setNewMessage] = useState({ from: "", text: "" });

  // function handleFromChange({ target }) {
  //   setNewMessage({ ...newMessage, from: target.value });
  // }
  // function handleTextChange({ target }) {
  //   setNewMessage({ ...newMessage, text: target.value });
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://kristina-chat-server-api.onrender.com/messages"
  //     );
  //   } catch (error) {}
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newData = {
      from: formData.get("from"),
      text: formData.get("text"),
    };

    console.log(newData);

    try {
      const response = await fetch(
        "https://kristina-chat-server-api.onrender.com/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(newData),
        }
      );
      console.log("handleSubmit response:", response);

      const json = await response.json();
      console.log("handleSubmit json:", json);

      event.target.reset();
    } catch (error) {
      console.log("handleSubmit error:", error);
    }
  }

  return (
    <div className="form-container">
      <h2>Send a message</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="from" placeholder="Your Name" />
        <br />
        <br />
        <label>Message: </label>
        <input type="text" name="text" placeholder="The message..." />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
