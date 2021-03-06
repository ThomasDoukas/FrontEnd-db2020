import React, { Component } from 'react';

import classes from './HomePage.css';

//Starting page of the application
class HomePage extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <div className={classes.Text1} >
                    Welcome
                </div>

                <div className={classes.Text2} >
                    To our NTUA ECE databases 2020 project application.
                    <br/>
                    Created by:
                    <br/>
                    Δούκας Θωμάς
                    <br/>
                    Καλεμκερής Φοίβος
                    <br/>
                    Χωριανόπουλος Μανώλης
                    <br/>

                    <br/>
                    <br/>
                    <br/>

                    Github repositories:
                    <br/>
                    <a href="https://github.com/phoevos/indlovu"> Back End </a>
                    <br/>
                    <a href="https://github.com/ThomasDoukas/FrontEnd-db2020"> Front End </a>

                </div>

                <div className={classes.Text3} >
                    You may now enter the cult !!!
                </div>

            </div>
        );
    }
}

export default HomePage;