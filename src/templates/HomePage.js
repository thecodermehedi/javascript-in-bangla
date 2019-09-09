import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const HomePage = ({ pageContext: { data } }) => {
  const topics = Object.keys(data)
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          padding: `100px 0`,
        }}
        className="contents-area"
      >
        {topics.map(topic => (
          <div key={topic} style={{ marginBottom: `50px` }} className="topic">
            <h3>{topic}</h3>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                margin: 0,
                listStyle: `none`,
              }}
            >
              {data[topic].map(({ id, title: { rendered } }, index) => (
                <li
                  key={id}
                  style={{
                    flexBasis: `calc(100%/3 - 30px)`,
                    margin: `15px`,
                    marginLeft: index % 3 === 0 ? 0 : `15px`,
                    border: `solid 3px #323330`,
                    padding: `25px`,
                    color: `#323330`,
                    backgroundColor: `#f0db4f`,
                    borderRadius: 4,
                    display: `flex`,
                    alignItems: `center`,
                  }}
                >
                  <h4>
                    <a dangerouslySetInnerHTML={{ __html: rendered }} />
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage