import React, { Component } from "react";

class Testimonials extends Component {
    render() {
        if (!this.props.isMobile) {
            return (
                <div>
                    <h1 className="display-4 theme-font">Testimonials</h1>
                    <hr />
                    <div class="container">
                        <div class="col-sm-12">
                            <img class="img-fluid" src="./assets/image.png" alt=""></img>
                        </div>
                    </div>
                </div>
            )
        } else{
            return (
                <div>
                    <h1 className="display-5 theme-font">Testimonials</h1>
                    <hr />
                    <div class="container">
                        <div class="col-sm-12">
                            <img class="img-fluid" src="./assets/testimonials/t1.png" alt=""></img>
                            <img class="img-fluid" src="./assets/testimonials/t2.png" alt=""></img>
                            <img class="img-fluid" src="./assets/testimonials/t3.png" alt=""></img>
                            <img class="img-fluid" src="./assets/testimonials/t4.png" alt=""></img>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Testimonials;