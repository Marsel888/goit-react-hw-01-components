import user from './user.json'
import Profile from './profile/Profile'
import statick from './statick.json'
import Statick from './statisck/Statisck'
import Frieds from './friends/friends'
import friends from './friends.json'
import tran from './tran.json'
import Transaction from './historyTrans/historyTran'
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsF={user.stats.followers}
        statsV={user.stats.views}
        likes={user.stats.likes}
      />
      <Statick statick={statick} titile="Upload stats" />
      <Frieds friends={friends} />
      <Transaction items={tran} />
    </>
  )
}

export default App
