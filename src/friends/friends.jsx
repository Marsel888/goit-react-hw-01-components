import style from './friends.module.css'
import propTypes from 'prop-types'
function Frieds({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map((friend) => (
        <li
          className={friend.isOnline ? style.true : style.false}
          key={friend.id}
        >
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  )
}

Frieds.propTypes = {
  friends: propTypes.array,
}

export default Frieds
