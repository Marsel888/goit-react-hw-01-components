import { Type, Thead, Tr } from './historyTrans.styled'
import propTypes from 'prop-types'
function Transaction({ items }) {
  return (
    <Type>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Tr>{type}</Tr>
            <Tr>{amount}</Tr>
            <Tr>{currency}</Tr>
          </tr>
        ))}
      </tbody>
    </Type>
  )
}
Transaction.propTypes = {
  items: propTypes.array,
}

export default Transaction
