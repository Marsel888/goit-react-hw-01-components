import style from '../statisck/statick.module.css'
import propTypes from 'prop-types'
function Statick({ statick, titile }) {
  return (
    <section className={style.statick}>
      <h2 className="title">{titile}</h2>
      <ul className={style.section}>
        {statick.map((stat) => (
          <li
            key={stat.id}
            style={{ backgroundColor: stat.color }}
            className={style.box}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.label}>{stat.percentage}% </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
Statick.prototype = {
  statick: propTypes.array,
  titile: propTypes.string,
}
export default Statick
