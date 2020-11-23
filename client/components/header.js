import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Header = (props) => {
  const { username, repositoryname } = useParams()
  const { avatar } = props

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div className="flex justify-start items-center flex-shrink-0 mr-6">
        {avatar && (
          <img
            src={avatar}
            className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2"
            alt="UserName"
          />
        )}
        <div id="repository-name">{repositoryname || username || 'Welcome'}</div>
      </div>
      <div className="flex justify-end">
        {username && (
          <Link id="go-back" to="/" className="mr-3">
            Home
          </Link>
        )}
        {repositoryname && (
          <Link id="go-repository-list" to={`/${username}`}>
            Repositories List
          </Link>
        )}
      </div>
    </nav>
  )
}

Header.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
