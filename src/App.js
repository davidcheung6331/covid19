import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from "./api";
import styles from './App.module.css';
import coronaImage from './images/image.png';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

// only comments



class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        console.log("app.js - fetchdata ");
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });


    }
    handleChange;
    handleClick;
    render() {
        const { data, country } = this.state;
        return (
            <div>

                <div className={styles.container}>
                    <div>
                        <div>
                            <img className={styles.image} src={coronaImage} alt="Covid-19" />
                            <Cards data={data} />
                            <br />
                            <div align="center">
                                <CountryPicker handleCountryChange={this.handleCountryChange} />
                                <Charts data={data} country={country} />
                            </div>
                            <br />
                            <br />
                        </div>
                        <BottomNavigation value={data} onChange={this.handleChange}>
                            <BottomNavigationAction click href="https://github.com/sambreen27/covid19" color="#ab0909" label="Github" value="github" icon={<GitHubIcon />} />
                        </BottomNavigation>
                        <br />
                        <Typography align="center" color="error" variant="body2"> Built in React JS with:
                            <Link color="error" href="https://github.com/mathdroid/covid-19-api" onClick={this.handleClick}> Covid-19 API
                            </Link>
                            <br />
                            <br />
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;


