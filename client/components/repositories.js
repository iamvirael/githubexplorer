import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from './head'
import Repo from './repo'

const Repositories = (props) => {
  const { name, list } = props
  return (
    <div>
      <Head title={name} />
      <div className="mb-4" />
      {list.map((repo) => {
        return (
          <div key={repo}>
            <Repo repo={repo} username={name} />
          </div>
        )
      })}
    </div>
  )
}

Repositories.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
