import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar(props) {
    const { currentUser, onSignOut } = props;

    const handleSignOutClick = event => {
        event.preventDefault();
    
    if (typeof onSignOut === "function") {
        onSignOut();
    }

    console.log(props);

};
return (
    <div className="ui-pointing-menu">
        <div className = "d-inline-flex justify-content-start left menu">
            <NavLink to="/" className ="item">
                <img src="https://www.numicanada.com/medias/pieces-de-monnaie/valeur/25-cents-2012.jpg" height= "35px"/>
            </NavLink>
            </div>
            <div className="d-flex flex-row flex-shrink:0 justify-content-end right menu">
                <NavLink to="/" className="item">
                    Home
                </NavLink>
                <NavLink to="/posts" className="item">
                    Blog
                </NavLink>
                <NavLink exact to="/whatisjitsu" className="item">
                    What Is Jiu Jitsu?
                </NavLink>
                <NavLink exact to="/profiles" className="item">
                    Who Are We?
                </NavLink>
                <NavLink exact to="/map" className="item">
                    Map 
                </NavLink>
                {currentUser ? (
                    <>
                    <NavLink exact to="/syllabus" className="item">
                        Syllabus
                    </NavLink>
                    <NavLink exact to="/syllabus/mindmap" className="item">
                        Mindmap For Syllabus 
                    </NavLink>
                    <NavLink exact to="/events" className="item">
                        Events List 
                    </NavLink>
                    <NavLink to="/" onClick={onSignOut} className="item">
                        Sign Out
                    </NavLink>
                    <span className="item" style={{ color: "green" }}>
                        Welcome {currentUser.full_name}
                    </span>
                    </>
                ) : (
                    <React.Fragment>
                        <NavLink exact to="/sign_in" className="item">
                        Sign In
                        </NavLink>
                        <NavLink exact to="/sign_up" className="item">
                        Sign Up
                        </NavLink>
                        </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default NavBar;