import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Results from '../Result'
import { Link } from 'react-router-dom'
import "../../components/style.css"


class Horror extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getHorror()
    }

    getHorror = () => {
        axios.get("/horror").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <Fragment>
                <div className="genres">
                    <ul>
                        <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/funny">Family</Link></li>
                        <li><Link to="/forum/horror">Social</Link></li>
                        <li><Link to="/forum/romance">Health</Link></li>
                        <li><Link to="/forum/mystery">Psychological</Link></li>
                        <li><Link to="/forum/drama">Emotional</Link></li>
                        <li><Link to="/forum/fantasy">Financial</Link></li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="horrortron">
                    <div className="container">
                        <h1 className="display-4 text-center">Social Stories</h1>
                        <p className="lead text-center">...</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                            {loggedIn ? (
                                <Link to="/newstory" className="btn btn-warning float-right" role="button">Create New Story</Link>
                            ) : (
                                    <Link to="/login" className="btn btn-warning float-right" role="button">Create New Story</Link>
                                )}
                        </div>
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <Results
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Horror;