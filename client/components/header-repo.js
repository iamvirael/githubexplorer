import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const HeaderRepo = (props) => {
  const { username, reponame } = props
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div id="repository-name">{reponame}</div>
      <div className="flex justify-end">
        <Link id="go-back" className="mr-6" to="/">
          Go Home
        </Link>
        <Link id="go-repository-list" to={`/${username}`}>
          Go Back
        </Link>
      </div>
    </nav>
  )
}

HeaderRepo.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRepo)
