/**
 * @author Dhruvil Patel
 * @description App object class, which is the first thing to be rendered
 * @version 0.0.1
 * Created 01/14/18
 */
/***************************************************************IMPORTS***************************************************************/
import React, { Component } from "react"; // Default react imports for the component
import { BrowserRouter, Route, Switch} from "react-router-dom"; // React router components
import { SponsorshipPage, E404 } from "./components/Pages"; // Router Pages
import MLHBadge from "./MLHBadge"; // We need this to qualify as an official MLH event
import { defaults } from "./Defaults"; // Get a handle to the default application settings

/*****************************************************************APP*****************************************************************/
/**
 * Root application class. This is the object rendered in <div id="root" />
 * This component will handle route handling based on the URL, so that we can show the user specific things based on the requested
 * page, and whether or not they are signed in.
 */
class App extends Component {
    /**
     * Bind all of the other method components, and set up the initial event handlers
     * @param {Object} props React JSON object that represents the props
     */
    constructor(props) {
        super(props);
        this._event_onResize = this._event_onResize.bind(this);
        this.getComponentProps = this.getComponentProps.bind(this);
        window.addEventListener("resize", this._event_onResize);
    }
    /**
     * Handle whenever the window resizes due to a user window resize or a zoom
     */
    _event_onResize() {
        this.setState({
            isMobile: (window.innerWidth < defaults.mobileWidthThresholdRelaxed)
        });
    }
    /**
     * As soon as react is ready, set the initial state
     */
    componentWillMount() {
        this._event_onResize();
    }
    /**
     * Returns a JSON object of the standard properties that we will send to each component
     */
    getComponentProps() {
        return {
            isMobile: this.state.isMobile,
        };
    }
    /**
     * React render method, what the user sees on the screen
     */
    render() {
        let componentProps = this.getComponentProps();
        return (
            <BrowserRouter style={{ width: "100%" }}>
                {/* BrowserRouter wil allow us to switch between the different pages in our SPA based on the URL routing */}
                <div>
                    {/* We need to show this on our webpage at all times, so we're just going to dump it in the root */}
                    <MLHBadge />
                    <div style={{ position: "fixed", zIndex: 1, width: "100%", height: "100%", left: 0, top: 0, background: "url(/assets/hru-background-large.png)", backgroundSize: "cover", opacity: 0.25 }}></div>
                    <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", left: 0, top: 0, backgroundColor: "rgb(0, 0, 0)", backgroundSize: "cover", opacity: 0.25 }}></div>
                    <Switch>
                        <Route exact path="/" render={(props) => <SponsorshipPage {...props} {...componentProps} />} />
                        {/* If none of the other urls were matched, we will show a 404 page to the user */}
                        <Route component={E404} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
