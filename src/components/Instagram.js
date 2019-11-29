import React, { Component } from 'react';
import '../styles/instagram.css';

export default class Instagram extends Component {
    constructor(props) {
        super(props);
        this.instaFields = 'id,media_type,media_url,thumbnail_url';
        this.imgAmount = 5;
        this.instaID = '17841424890644350';
        this.accessToken =
            'EAAlCgw1dfFIBACMKJXJBomLTOOxZBf0JbJzbJZA05vZAHNbgy2bZB44ElcpYez6CW887FPZCZBSPusQWIBPZBUmMtMIQVE4YIZATvdZCwQy9aOTZA7wwWRJt4idsiCAJtwBCSpBe5h9EPqfSjRwXvkirsZC4jX4BMCLJRs0YZAlZCXGLvMI7W4d9gYIVx';
        this.instaEndpoint = `https://graph.facebook.com/${this.instaID}/media?fields=${this.instaFields}&limit=${this.imgAmount}&access_token=${this.accessToken}`;
        this.state = {
            imageUrls: [],
        };
    }
    componentDidMount() {
        this.getInstaFeed();
    }

    getInstaFeed() {
        fetch(this.instaEndpoint)
            .then(res => res.json())
            .then(data => this.setState({ imageUrls: data.data.map(item => item.media_url) }))
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <section>
                <h1 className="text-align">Instagram</h1>
                <div className="instagramContainer">
                    <div className="carousel">
                        {this.state.imageUrls.map(i => {
                            return (
                                <div className="imageContainer" key={i}>
                                    <img src={i} alt=""></img>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
