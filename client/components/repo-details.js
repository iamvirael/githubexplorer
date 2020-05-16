import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Markdown from 'markdown-to-jsx'
import parse from 'html-react-parser'
import axios from 'axios'
import Head from './head'

import Header from './header'

const RepoDetails = () => {
  const { username, repositoryname } = useParams()
  const [repo, setRepo] = useState({})

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${username}/${repositoryname}`).then((it) => {
      setRepo(it.data)
    })
    return () => {}
  }, [username, repositoryname])

  const [readMe, setReadMe] = useState('')

  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.html' }
    axios
      .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`, {
        param: {},
        headers
      })
      .then((it) => setReadMe(it.data))
    return () => {}
  }, [username, repositoryname])

  return (
    <div>
      <Head title={repositoryname} />
      <Header reponame={repositoryname} name={username} />
      <div className="mb-4" />
      <div className="px-22 ml-10 mr-10 mb-4 ">
        <div className="rounded-lg border shadow-lg px-3 bg-teal-300 mb-4">
          <div className="border-b border-b-2 border-teal-500 py-2 mb-2">
            <div className="mb-2 text-bold">Description</div>
          </div>
          <div id="description" className="mb-4">
            {repo.description}
          </div>
        </div>
        <div className="rounded-lg border shadow-lg px-3 bg-teal-200">
          <div className="border-b border-b-2 border-teal-500 py-2 mb-2">
            <div className="mb-2 text-bold">README</div>
          </div>
          <div id="description">{parse(readMe)}</div>
        </div>
      </div>
    </div>
  )
}

RepoDetails.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails)
