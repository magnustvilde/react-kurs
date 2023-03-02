// export default function Person(props) {
export default function Person( {person, number} ) {

  return (
    <div className="App">
      <p>
        Person: {person}
        {/* Person: {props.person}
        Number: {props.number} */}
        Number: {number}
      </p>
    </div>
  )
}