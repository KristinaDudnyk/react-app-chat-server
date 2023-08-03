const fetchMessage = async (setterFunction, id = null) => {
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
      setterFunction(dataAsJson); // setMessageById
    } else {
      setterFunction(dataAsJson); // setAllMessages
    }
  } catch (error) {
    console.log("fetchMessage error block:", error);
  }
};

export default fetchMessage;
