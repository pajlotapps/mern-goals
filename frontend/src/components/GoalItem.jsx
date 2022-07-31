import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div className="timestamp"><strong>Utworzono:</strong> {new Date(goal.createdAt).toLocaleDateString("pl-PL")} | {new Date(goal.createdAt).toLocaleTimeString()}</div>
      <div></div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
