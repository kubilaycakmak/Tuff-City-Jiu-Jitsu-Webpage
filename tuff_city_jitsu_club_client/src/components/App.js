import React from 'react';
import NavBar from "./NavBar";
// import NavBar from 
// Next step: incorporate navbar at top of the page

// import AuthRoute from "./AuthRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import SignInPage from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
// import { User, Session } from "../requests";
import { Welcome } from "./Welcome";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: null,
        loading: true
      };
    }

    signOut = () => {
        Session.destroy().then(() => {
          this.setState({ currentUser: null });
        });
      };

    getUser= () =>  {
        User.current()
        .then(data => {
          if (typeof data.id !== "number") {
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, currentUser: data });
          }
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    };

    componentDidMount() {
        this.getUser();
    }

    render() {
        const { loading, currentUser } = this.state;
        if (loading) {
            return <div />;
        }
        return (
          <>
                <BrowserRouter>
                <div className= "ui container segment">
                    <NavBar currentUser={currentUser} onSignOut={this.signOut}/>
                        <Switch>
                            <Route path="/" exact component={Welcome} />
// or Home instead?
                           <Route path="/posts" exact component={Blog} />

<Route path="/whatisjitsu" exact component={WhatIsJiuJitsu} />

<Route path="/profiles" exact component={WhoAreWe} />
                              
<Route path="/map" exact component={Map} />
                            <AuthRoute
                            isAuthenticated={currentUser}
                            path="/syllabus"
                            component={Syllabus}
                            path="/syllabus/mindmap"
                            component={MindmapForSyllabus}                           
                            path="/events"
                            component={Events List}                            />
                            <Route
                            exact
                            path="/sign_up"
                            render={routeProps => (
                                <SignUpPage {...routeProps} onSignUp={this.getUser} />
                            )}
                            />
                            // Change this next one
                            <Route
                            path="/auctions/:id"
                            render={routeProps => (
                                <AuctionShowPage {...routeProps} currentUser={currentUser} />
                            )}
                            />
                            <Route
                            path="/sign_in"
                            render={routeProps => (
                                <SignInPage {...routeProps} onSignIn={this.getUser} />
                            )}
                            />
                            <Route component={NotFoundPage} />
                        </Switch>
                </div>
            </BrowserRouter>
            <Footer />
                        </>
        );
    }
}

export default App;