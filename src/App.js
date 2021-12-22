import user from './data/user.json'
import Profile from './Components/profile/Profile'
import statick from './data/statick.json'
import Statick from './Components/statisck/Statisck'
import Frieds from './Components/friends/friends'
import friends from '././data/friends.json'
import tran from '././data/tran.json'
import Transaction from './Components/historyTrans/historyTran'
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statick statick={statick} titile="Upload stats" />
      <Frieds friends={friends} />
      <Transaction items={tran} />
    </>
  )
}

export default App
