import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Head from './head'
import Header from './header'
import Repo from './repo'

const Repositories = () => {
  const { username } = useParams()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((it) => {
      setRepos(it.data.map((repo) => repo.name))
    })
    return () => {}
  }, [username])

  return (
    <div>
      <Head title={username} />
      <Header name={username} />
      <div className="mb-4" />
      {repos.map((repo) => {
        return <Repo repo={repo} username={username} />
      })}
    </div>
  )
}

Repositories.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
