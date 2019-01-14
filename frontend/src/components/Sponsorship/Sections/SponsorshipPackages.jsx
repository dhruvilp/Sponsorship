import React, { Component } from "react";

class SponsorshipPackages extends Component {
    render() {
        if (!this.props.isMobile) {
        return (
            <div>
            <div class="col-12">
                <h1 className="display-4 theme-font" id="#packages">Sponsorship Packages</h1><hr />
            </div>

            <div class="row row-content-box mt-5">
                <div class="col-12 text-white">
                    <div class="row mb-sm-5">
                        <div class="col-1 text-center-not-lg col-lg-2"></div>

                        <div class="col-2 col-lg-2 bold-text text-center">
                            <h5 class="bronze hidden-sm-down">BRONZE</h5>
                            <h2 class="hidden-sm-down">$1,500</h2>
                        </div>
                        <div class="col-2 col-lg-2 bold-text text-center">
                            <h5 class="silver hidden-sm-down">SILVER</h5>
                            <h2 class="hidden-sm-down">$4,000</h2>
                        </div>
                        <div class="col-2 col-lg-2 bold-text text-center">
                            <h5 class="gold hidden-sm-down">GOLD</h5>
                            <h2 class="hidden-sm-down">$7,000</h2>
                        </div>
                        <div class="col-2 col-lg-2 bold-text text-center">
                            <h5 class="plat hidden-sm-down">PLATINUM</h5>
                            <h2 class="hidden-sm-down">$15,000</h2>
                        </div>
							<div class="col-2 col-lg-2 bold-text text-center">
                            <h5 class="titlepack hidden-sm-down">TITLE</h5>
                            <h2 class="hidden-sm-down">$25,000<br></br>minimum</h2>
                        </div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">API/Demo</p></div>
                        <div class="col-2 col-lg-2 col-xs-1 perk-select-col"><p class="perk-select bronze">2 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver">3 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold">5 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat">5 MIN</p></div>
						<div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack">7 MIN</p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Affiliated mentors on-site</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
						<div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Reserved Table Space</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Tech Talk</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Recruiting Material</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Recruiters on-site</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Hacker resumes and GitHubs</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold">post-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat">pre-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack">pre-event</p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Logo on website</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Sponsor branded prize</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Swag</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Logo on T-shirt</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute materials in swag bags</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Host a mini-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Mention in all pre-event emails</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"></p><span class="fa fa-check"></span></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute material at registration</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Sponsor lounge</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">HackRU Co-presented by you</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Reserved Keynote</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack"><span class="fa fa-check"></span></p></div>
                    </div>

                </div>

                <div class="col-13 col-lg-8 offset-lg-2 text-center" style={{paddingTop: 50, paddingBottom: 50}}>
                    <h4 class="text-white text-center hidden-md-up">If you'd prefer a customized package, send us an email at <a href="mailto:sponsorship@hackru.org">sponsorship@hackru.org</a> and we'll chat from there!</h4>
                    <h5 class="text-white text-center hidden-sm-down">*For alternative perks (snacks/meals/buses), please email us for details</h5>
                </div>

            </div>
        </div>
        )
    } else{
        return (
            <div>
            <div>
                <h1 className="display-5 theme-font" id="#packages">Sponsorship Packages</h1><hr />
            </div>

            <div class="row row-content-box mt-12">
                <div class="col-12 text-white col-lg-2">
                    <div class="row">
                        <div class="col-2 col-lg-12">
                            <h6 class="bronze hidden-sm-down mb">BRONZE</h6>
                            <h6 class="hidden-sm-down mb">$1,500</h6>
                        </div>
                        <div class="col-2 col-lg-12">
                            <h6 class="silver hidden-sm-down mb mb3">SILVER</h6>
                            <h6 class="hidden-sm-down mb">$4,000</h6>
                        </div>
                        <div class="col-2 col-lg-12">
                            <h6 class="gold hidden-sm-down mb mb3">GOLD</h6>
                            <h6 class="hidden-sm-down mb">$7,000</h6>
                        </div>
                        <div class="col-2 col-lg-12">
                            <h6 class="plat hidden-sm-down mb">PLATINUM</h6>
                            <h6 class="hidden-sm-down mb mb3">$15,000</h6>
                        </div>
						<div class="col-2 col-lg-12">
                            <h6 class="titlepack hidden-sm-down mb mb2 mb3">TITLE</h6>
                            <h6 class="hidden-sm-down mb mb2">$25,000 minimum</h6>
                        </div>
                        <hr style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", width: "380px" }} />
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">API / Demo</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2">2 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2">3 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2">5 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2">5 MIN</p></div>
						<div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2">7 MIN</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Affiliated Mentors On-Site</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
						<div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Reserved Table Space</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Tech Talk</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Recruiting Material</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Recruiters On-Site</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Hacker Resumes and GitHubs</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2">post-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2">pre-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2">pre-event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Logo on Website</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Sponsor Branded Prize</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Swag</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Logo on T-Shirt</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Materials in Swag Bags</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Host a Mini-Event</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Mention in All Pre-Event Emails</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"></p><span class="fa fa-check"></span></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Distribute Material at Registration</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Sponsor Lounge</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">HackRU Co-Presented by You</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>

                    <div class="row perk-row">
                        <div class="col-lg-2 hidden-md-down"><p class="c">Reserved Keynote</p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select bronze mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select silver mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select gold mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select plat mb2"></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select titlepack mb2"><span class="fa fa-check"></span></p></div>
                        <div class="col-2 col-lg-2 col-xs-2 perk-select-col"><p class="perk-select mb2"></p></div>
                    </div>
                    </div>

                </div>

                <div class="col-13 col-lg-8 offset-lg-2 text-center" style={{paddingTop: 50, paddingBottom: 50}}>
                    <h4 class="text-white text-center hidden-md-up" style={{paddingBottom:20}}>If you'd prefer a customized package, send us an email at <a href="mailto:sponsorship@hackru.org">sponsorship@hackru.org</a> and we'll chat from there!</h4>
                    <h5 class="text-white text-center hidden-sm-down">*For alternative perks (snacks/meals/buses), please email us for details</h5>
                </div>

        </div>
        )
    }
    }
}

export default SponsorshipPackages;
