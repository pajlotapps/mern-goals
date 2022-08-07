import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Nowe zadanie</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">Status</label>
            <select
              type="text"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Plowane</option>
              <option>W toku</option>
              <option>Zakończone</option>
              <option>Odwołane</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-block">Dodaj zadanie</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default GoalForm;
