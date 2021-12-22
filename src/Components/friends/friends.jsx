import FriendLst from './friendsList'
import style from './friends.module.css'
import propTypes from 'prop-types'

function Frieds({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map((friend) => (
        <FriendLst
          friendIsOnline={friend.isOnline}
          friendID={friend.id}
          friendavatar={friend.avatar}
          friendname={friend.name}
        />
      ))}
    </ul>
  )
}

Frieds.propTypes = {
  friends: propTypes.array,
}

export default Frieds
