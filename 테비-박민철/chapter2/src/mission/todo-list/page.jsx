import { useState } from "react";
import Wrapper from "../../component/wrapper";

const TodoListPage = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const handleAddTodoItem = (text) => {
    const newItem = {
      id: Date.now(),
      text: text.trim(),
    };
    setTodoItems((prevItems) => [...prevItems, newItem]);
  };

  const handleComplete = (id) => {
    const completedItem = todoItems.find((item) => item.id === id);
    setCompletedItems((prevItems) => [...prevItems, completedItem]);
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDelete = (id, fromCompleted = false) => {
    if (fromCompleted) {
      setCompletedItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
    } else {
      setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const onClick = (event) => {
    handleAddTodoItem(event.target.value);
    event.target.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.nativeEvent.isComposing === false) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <Wrapper>
      <div style={{ display: "grid", placeContent: "center" }}>
        <h1>UMC Study Plan</h1>
      </div>
      <hr />
      <div
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <input
          onKeyDown={handleKeyDown}
          placeholder="UMC 스터디 계획을 작성해 보세요."
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5vw",
            width: "40vw",
          }}
        >
          <div>
            <h3 style={{ borderBottom: "1px solid black" }}>해야할일</h3>
            {todoItems.map((item) => (
              <div key={item.id}>
                {item.text}
                <button onClick={() => handleComplete(item.id)}>완료</button>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ borderBottom: "1px solid black" }}>한일</h3>
            {completedItems.map((item) => (
              <div key={item.id}>
                {item.text}
                <button onClick={() => handleDelete(item.id, true)}>
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TodoListPage;
