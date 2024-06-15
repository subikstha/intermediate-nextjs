import 'server-only'
import { getAttendeesCountForDashboard } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const Home = async () => {
  const user = await getCurrentUser()
  const count = await getAttendeesCountForDashboard(user.id)
  console.log('home page')
  return (
    <div className="w-full flex h-full justify-center items-center">
      <div>
        <h4 className="text-lg">Attendees</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">{count}</h2>
      </div>
    </div>
  )
  // iG&MpK$cT9x!*m&
  // Z,hrV$v5tkfSbL*
}

export default Home
