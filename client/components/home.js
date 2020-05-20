import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Header from './header'
import InputView from './input-view'
import Repositories from './repositories'
import RepoDetails from './repo-details'
import DummyComponent from './dummy-view'

const Home = () => {
  const { username, repositoryname } = useParams()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios.get(`https://api.github.com/users/${username}/repos`).then((it) => {
        setRepos(it.data.map((repo) => repo.name))
      })
    }
    return () => {}
  }, [username])

  const [readMe, setReadMe] = useState('')

  useEffect(() => {
    if (typeof username !== 'undefined' && typeof repositoryname !== 'undefined') {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios
        .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`, {
          param: {},
          headers
        })
        .then((it) => setReadMe(it.data))
    }
    return () => {}
  }, [username, repositoryname])

  const [avatarUrl, setAvatar] = useState('')
  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(({ data }) => data.avatar_url)
        .then((url) => {
          setAvatar(url)
        })
    }
    return () => {}
  }, [username])

  const [desc, setDesc] = useState('')

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${username}/${repositoryname}`).then((it) => {
      setDesc(it.data.description)
    })
    return () => {}
  }, [username, repositoryname])

  return (
    <div>
      <Header avatar={avatarUrl} />
      <Switch>
        <Route exact path="/" component={() => <InputView />} />
        <Route
          exact
          path="/:username"
          component={() => <Repositories list={repos} name={username} />}
        />
        <Route
          exact
          path="/:username/:repositoryname"
          component={() => <RepoDetails readMe={readMe} name={repositoryname} desc={desc} />}
        />
        <Route exact path="/*" component={() => <DummyComponent />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
