import style from './friends.module.css'

function FriendLst({ friendIsOnline, friendname, friendavatar, friendID }) {
  return (
    <>
      <li className={friendIsOnline ? style.true : style.false} key={friendID}>
        <span className="status">{friendIsOnline}</span>
        <img
          className="avatar"
          src={friendavatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friendname}</p>
      </li>
    </>
  )
}

export default FriendLst
