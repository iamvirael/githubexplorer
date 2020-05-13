import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  const [username, setUserName] = useState('')
  const history = useHistory()

  const handleClick = () => {
    history.push(`/${username}`)
  }

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-teal-300 text-white font-bold rounded-lg border shadow-lg p-10">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Username"
                aria-label="Full name"
                id="input-field"
                value={username}
                onChange={handleChange}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                id="search-button"
                onClick={handleClick}
              >
                Explore
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
