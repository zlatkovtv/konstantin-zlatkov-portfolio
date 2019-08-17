import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        const repos = this.state.repos.map((repo, i) => {
            return (
                <div className="repo" key={i} data-aos="fade-right">
                    <div>
                        <header className="repo-header">
                            <FontAwesomeIcon className="folder-icon" icon={faFolderOpen} />
                            <FontAwesomeIcon onClick={() => this.goToGithub(repo.html_url)} className="github-link" icon={faGithub} />
                        </header>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                    </div>
                    {/* <footer>Written in {repo.language}</footer> */}
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

    goToGithub = (link) => {
        window.open(link, "_blank")
    };

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