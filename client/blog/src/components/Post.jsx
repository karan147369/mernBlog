import React from 'react'

function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*C4yBbiGmP0lNR2KU.jpg" alt="" />
            </div><div className="text">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quidem.</h2>
                <p className="info"><a className="author">Shubham</a>
                    <time>2024-03-14 14:45</time>
                </p>
                <p className="summary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam expedita ipsa, eveniet quibusdam eius cumque pariatur in dolore sit tempore voluptas vel. Nostrum voluptas minima, dolor excepturi labore fugiat esse aut impedit aperiam rem delectus doloribus deserunt culpa quas unde corporis neque. Consequuntur voluptate ratione accusantium ex. Laborum, dolores.</p>

            </div>
        </div>
    )
}

export default Post