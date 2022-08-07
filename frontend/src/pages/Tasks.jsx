import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GoalForm, GoalItem, Spinner } from '../components'
import { getUserGoals, getAllGoals } from '../features/goals/goalSlice'
import { reset } from '../features/auth/authSlice'

function Tasks() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
      return
    } else {
      dispatch(getUserGoals());
    }

    return () => {
      dispatch(reset());
    }

  // }, [user, dispatch])
}, [user, navigate, isError, message, dispatch])

  isLoading && <Spinner />

  return (
    <>
      {/* <section className='heading'>
        <p>Dashboard</p>
      </section> */}

       <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Lista zadań jest pusta</h3>
        )}
      </section>
    </>
  )
}

export default Tasks