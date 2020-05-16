import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'

const Header = (props) => {
  const [avatar, setAvatar] = useState('')
  const { name, reponame } = props
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(({ data }) => data.avatar_url)
      .then((url) => {
        setAvatar(url)
      })
    return () => {}
  }, [name])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div className="flex justify-start items-center flex-shrink-0 mr-6">
        <img
          src={avatar}
          className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2"
          alt="UserName"
        />
        <div id="repository-name">{reponame || name}</div>
      </div>
      <div className="flex justify-end">
        <Link id="go-back" to="/" className="mr-3">
          Go Back
        </Link>
        {reponame && (
          <Link id="go-repository-list" to={`/${name}`}>
            Go Repositories
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
