import React from 'react';

import './Projects.scss';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitPath: "https://api.github.com/users/zlatkovtv/repos",
            repos: [],
            pinnedRepoIds: [
                182022520,
                139982879,
                112330807,
                168885877,
                96216276,
                182303964
            ]
        };
    }
    render() {
        const repos = this.state.repos.map(repo => {
            return (
                <div className="repo">
                    <div>
                        <header></header>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                    </div>
                    <footer></footer>
                </div>
            );
        });

        return (
            <div id="repo-container" className="row" data-aos="zoom-out">
                {repos}
            </div>
        );
    }

    componentDidMount() {
        this.getGithubRepos();
    }

    getGithubRepos = () => {
        fetch(this.state.gitPath)
            .then(res => res.json())
            .then(res => res.filter(repo => this.state.pinnedRepoIds.includes(repo.id)))
            .then(data => this.setState({ 
                repos: data
            }));
            
    };
};

export default Projects;