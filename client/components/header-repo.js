import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const HeaderRepo = (props) => {
  const { username, reponame } = props
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div className="flex items-center flex-shrink-0 mr-6 ">
        <div id="repository-name">{reponame}</div>
      </div>
      <Link id="go-back" to="/">
        Go Home
      </Link>
      <Link id="go-repository-list" to={`/${username}`}>
        Go Back
      </Link>
    </nav>
  )
}

HeaderRepo.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRepo)
