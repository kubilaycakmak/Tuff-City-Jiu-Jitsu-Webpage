import React from 'react';
import NavBar from "./NavBar";

// Next step: incorporate navbar at top of the page
import Footer from "./Footer";
import AuthRoute from "./AuthRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import SignInPage from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import { User, Session } from "../requests";
import { Welcome } from "./Welcome";
import SyllabusIndexPage from "./SyllabusIndexPage";
import SyllabusMindmapPage from "./SyllabusMindmapPage";
import SyllabusNewPage from "./SyllabusNewPage";
import SyllabusShowPage from "./SyllabusShowPage";
import { WhatIsJiuJitsu } from "./WhatIsJiuJitsu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhoAreWe } from "./WhoAreWe";


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
                           {/* <Route path="/posts" exact component={Blog} /> */}

<Route path="/whatisjitsu" exact component={WhatIsJiuJitsu} />

<Route path="/profiles" exact component={WhoAreWe} />

{/* Ensure that without signing up, users can't even see the link to syllabus  */}
                            <AuthRoute
                            isAuthenticated={currentUser}
                            path="/syllabus"
                            component={SyllabusIndexPage}
                            />
                            <AuthRoute
                            isAuthenticated={currentUser}
                            path="/syllabus/mindmap"
                            component={SyllabusMindmapPage} 
                            />
                            <AuthRoute
                            isAuthenticated={currentUser}
                            path="/syllabus/:id"
                            render={routeProps => (
                            <SyllabusShowPage {...routeProps} currentUser={currentUser} />
                            )}
                            />
{/* Ensure that only admin, and no other users, can see and do actions on this page  */}
                            <AuthRoute
                            isAuthenticated={currentUser}
                            path="/syllabus/new"
                            component={SyllabusNewPage}
                            />
                            {/*
                            <Route
                            path="/events"
                            component={EventsList}    
                            />*/}
                            <Route
                            exact
                            path="/sign_up"
                            render={routeProps => (
                                <SignUpPage {...routeProps} onSignUp={this.getUser} />
                            )}
                            />
                            
                            {/* Change this next one <Route
                            path="/auctions/:id"
                            render={routeProps => (
                                <AuctionShowPage {...routeProps} currentUser={currentUser} />
                            )}
                            /> */}
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