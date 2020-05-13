import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Repo = (props) => {
  const { repo, username } = props
  return (
    <div className="px-22 mb-2 ml-10 mr-10" key={repo}>
      <div className="bg-teal-300 h-12 rounded-lg border shadow-lg px-3">
        <div className="border-b border-b-2 border-teal-500 py-2 ">
          <Link id={repo} className="px-2" to={`/${username}/${repo}`}>
            {repo}
          </Link>
        </div>
      </div>
    </div>
  )
}

Repo.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Repo)
