import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import ImagesGalleryPicker from "./routes/ImagesGalleryPicker";
import ImagesGallery from "./routes/ImagesGallery";
import Header from "./components/Header";
import API from "./utils/API";
import Footer from "./components/Footer";
import GlobalStateProvider from "./components/GlobalStateProvider";

interface Props {

}

interface State {
    logoHeader: string;
    motto: string;
    footerLeftColumnText: string;
    footerLeftColumnTextBottom: string;
    phoneNumber: string;
    address: string;
}

class App extends React.Component<Props, State> {
    state = {
        logoHeader: '',
        motto: '',
        footerLeftColumnText: '',
        footerLeftColumnTextBottom: '',
        phoneNumber: '',
        address: '',
    };

    async componentDidMount() {
        const common = await API.getCommonResources();

        this.setState({
            logoHeader: common.logo,
            motto: common.motto,
            footerLeftColumnText: common.footerLeftColumnText,
            footerLeftColumnTextBottom: common.footerLeftColumnTextBottom,
            phoneNumber: common.phoneNumber,
            address: common.address,
        });
    }

    render(): React.ReactNode {
        return (
            <GlobalStateProvider>
                <Router>
                    <div className={'app-element'}>
                        <Header logoURL={this.state.logoHeader} motto={this.state.motto}/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/realizacje" component={ImagesGalleryPicker} />
                            <Route exact path="/realizacje/:id" component={ImagesGallery} />
                            <Route exact path="/404" component={NotFound} />
                            <Redirect to="/404"/>
                        </Switch>
                        <Footer leftColumnText={this.state.footerLeftColumnText} leftColumnTextBottom={this.state.footerLeftColumnTextBottom} address={this.state.address} phoneNumber={this.state.phoneNumber}/>
                    </div>
                </Router>
            </GlobalStateProvider>
        );
    }
}

export default App;
