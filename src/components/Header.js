import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>
        {title}
      </h1>
    </header>
  )
}

// CSS in JS
// <h1 style = {headingStyle}></h1>
// const headingStyle = { 
//   color: 'red',
//   backgroundColor:'lightBlue' 
// }

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
