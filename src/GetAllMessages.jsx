export default function GetAllMessages() {
  async function loadMessages() {
    const messageContainer = document.getElementById("messageContainer");

    // Clear the message container before fetching new messages
    messageContainer.innerHTML = "";

    // Fetch the messages using AJAX
    try {
      const response = await fetch("/messages");
      const data = await response.json();

      data.forEach((message) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <p><strong>From: </strong>${message.from}</p>
        <p><strong>Message: </strong>${message.text}</p>
        <hr />
      `;
        messageContainer.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }
  return (
    <div>
      <button onclick={loadMessages()}>See all messages</button>
      <div id="messageContainer"></div>
    </div>
  );
}
