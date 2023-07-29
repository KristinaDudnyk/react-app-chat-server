export default function Form() {
  return (
    <form action="/messages" method="post">
      <p>
        Name: <input type="text" name="from" placeholder="Your Name" /> <br />
        Message: <input type="text" name="text" placeholder="The message..." />
        <br />
      </p>
      <button type="submit">Send</button>
    </form>
  );
}
