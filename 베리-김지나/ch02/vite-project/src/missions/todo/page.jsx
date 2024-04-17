import { useState } from "react";

const TodoPage = () => {
  let lastId = 0;

  const [todoItems, setTodoItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const addTodoItem = (text) => {
    const newItem = {
      id: ++lastId,
      text: text.trim(),
    };
    setTodoItems([...todoItems, newItem]);
  };

  const completeTodoItem = (index) => {
    setTodoItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setCompletedItems((prevItems) => [...prevItems, todoItems[index]]);
  };

  const deleteTodoItem = (index) => {
    setCompletedItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodoItem(event.target.value);
      event.target.value = "";
      event.preventDefault();
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-wrapper">
        <div className="todo-title">
          <h1>UMC Study Plan</h1>
        </div>
        <div className="todo-contents">
          <div className="input-wrapper">
            <input
              type="text"
              id="input"
              placeholder="스터디 계획을 작성해보세요!"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="contents-wrapper">
            <div className="todo">
              <div className="whattodo">
                <h3>해야 할 일</h3>
                {todoItems.map((item) => (
                  <div key={item.id}>
                    {item.text}
                    <button onClick={() => completeTodoItem(item.id)}>
                      완료
                    </button>
                  </div>
                ))}
                <p className="todo-list"></p>
              </div>
            </div>
            <div className="whatdid">
              <h3>해낸 일</h3>
              {completedItems.map((item) => (
                <div key={item.id}>
                  {item.text}
                  <button onClick={() => deleteTodoItem(item.id, true)}>
                    삭제
                  </button>
                </div>
              ))}
              <p className="done-list"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
