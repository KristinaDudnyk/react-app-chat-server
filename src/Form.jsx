import { useState } from "react";

export default function Form({ setRefreshMessages }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newData = {
      from: formData.get("from"),
      text: formData.get("text"),
    };
    console.log("handleSubmit newData:", newData);

    try {
      setIsSubmitting(true);

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

      setRefreshMessages((prevRefreshMessages) => !prevRefreshMessages);
    } catch (error) {
      console.log("handleSubmit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form-container">
      <h2>Send a message</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="from" required placeholder="Your Name" />
        <label>Message:</label>
        <input type="text" name="text" required placeholder="Your message..." />
        <button type="submit" disabled={isSubmitting}>
          Send
        </button>
      </form>
    </div>
  );
}
