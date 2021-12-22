import style from '../profile/profile.module.css'
import propTypes from 'prop-types'
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.discription}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.name}>{tag}</p>
        <p className={style.name}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.list}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.list}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.list}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  statsF: propTypes.number,
  statsV: propTypes.number,
  likes: propTypes.number,
}

export default Profile
