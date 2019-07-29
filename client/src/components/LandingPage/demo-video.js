import React, { Component } from 'react'

export class DemoVideo extends Component {
    render() {
        return (
            <div class="container" id="demo">
                <div className="row text-center">
                    <div className="col">
                        <h3 className="display-4 mb-3 ft-title">Demo Video</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <iframe
                            title="YouTube Demo Video of Con.DO"
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/VMj3Jn1hgCU"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoVideo;
