import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const deleteGoal = (e) => {
    e.preventDefault();

    dispatch(deleteGoal());
  };

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleDateString('pl-PL')}
      </div>
      <h2>{goal.text}</h2>
      <button onClick={()=> dispatch(deleteGoal(goal._id))} className="close">X</button>
    </div>
  );
}

export default GoalItem;