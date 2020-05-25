import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Markdown from 'react-markdown'
import Head from './head'

const RepoDetails = (props) => {
  const { name, readMe, desc } = props
  return (
    <div>
      <Head title={name} />
      <div className="mb-4" />
      <div className="px-22 ml-10 mr-10 mb-4 ">
        {desc && (
          <div className="rounded-lg border shadow-lg px-3 bg-teal-300 mb-4">
            <div className="border-b border-b-2 border-teal-500 py-2 mb-2">
              <div className="mb-2 text-bold">Description</div>
            </div>
            <div id="repo-desc" className="mb-4">
              {desc}
            </div>
          </div>
        )}
        <div className="rounded-lg border shadow-lg px-3 py-3 bg-teal-200">
          <div className="border-b border-b-2 border-teal-500 py-2 mb-2">
            <div className="mb-2 text-bold">README</div>
          </div>
          <div id="description">
            <Markdown>{readMe}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}

RepoDetails.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails)
