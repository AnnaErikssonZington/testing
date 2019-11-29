import React, { useState, useEffect } from 'react'
import '../styles/instagram.css';


const InstagramHooks = () => {
        const instaFields = 'id,media_type,media_url,thumbnail_url';
        const imgAmount = 3;
        const instaID = '17841424890644350';
        const accessToken =
           'EAAlCgw1dfFIBACMKJXJBomLTOOxZBf0JbJzbJZA05vZAHNbgy2bZB44ElcpYez6CW887FPZCZBSPusQWIBPZBUmMtMIQVE4YIZATvdZCwQy9aOTZA7wwWRJt4idsiCAJtwBCSpBe5h9EPqfSjRwXvkirsZC4jX4BMCLJRs0YZAlZCXGLvMI7W4d9gYIVx';
        const instaEndpoint = `https://graph.facebook.com/${instaID}/media?fields=${instaFields}&limit=${imgAmount}&access_token=${accessToken}`;
        const  [imageUrls,setimageUrls ]= useState([])

    
    useEffect(() => {
        getInstaFeed()
    }, [])
    
    const getInstaFeed = () => {
        fetch(instaEndpoint)
            .then(res => res.json())
            .then(res =>  setimageUrls(res.data.map(item => item.media_url)))
            .catch(err => {
                console.error(err);
            });
        }
        return (
        <div className="instagramContainer">
            {imageUrls.map(i => {
                    return (
                        <div className="imageContainer" key={i}>
                            <img src={i}></img>
                        </div>
                    );
                }
            )}
        </div>
        )
        
    
}
export default InstagramHooks;

