import React from 'react'

function Post({title,cover,summary,content}) {
    return (
        <div className="post">
            <div className="image">
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*C4yBbiGmP0lNR2KU.jpg" alt="" />
            </div><div className="text">
                <h2>{title}</h2>
                <p className="info"><a className="author">Shubham</a>
                    <time>2024-03-14 14:45</time>
                </p>
                <p className="summary">{summary}</p>

            </div>
        </div>
    )
}

export default Post