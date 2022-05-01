import React, { Component } from "react";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.commentBox = React.createRef(); 
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("theme", 'github-dark');
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "franny1615/capstone_comments"); 
        scriptEl.setAttribute("issue-term", "title"); 
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div style={{width:'100%'}} ref={this.commentBox} />
            </div>
        );
    }
}