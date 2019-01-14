import React, { Component } from "react";

class Recap extends Component {
    render() {
        if (!this.props.isMobile) {
            return (
                <div>
                    <h1 className="display-4 theme-font" id="#recap">Fall 2018 Recap</h1>
                    <hr />
                    <div class="container">
                        <div class="col-sm-12">
                            <img class="img-fluid" src="./assets/stats_fall2018.png" alt=""></img>
                        </div>
                    </div>
                </div>
            )
        } else{
            return (
                <div>
                    <h1 className="display-5 theme-font" id="#recap">Fall 2018 Recap</h1>
                    <hr />
                    <div class="container">
                        <div class="col-sm-12">
                            <img class="img-fluid" src="./assets/recap/recap1.png" alt=""></img>
                            <img class="img-fluid" style={{paddingTop:20}} src="./assets/recap/recap2.png" alt=""></img>
                            <img class="img-fluid" style={{paddingTop:20}} src="./assets/recap/recap3.png" alt=""></img>
                            <img class="img-fluid" style={{paddingTop:20}} src="./assets/recap/recap4.png" alt=""></img>
                        </div>
                    </div>
                 </div>
            ) 
        }
    }
}

export default Recap;