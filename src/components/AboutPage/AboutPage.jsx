import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>Our Team</h1>

      <div className="pictures">
        <div className="upperPictures">
          <img className="picture" src=".png"/>
          <img className="picture" src=".png"/>
        </div>
        <div className="lowerPictures">
          <img className="picture" src=".png"/>
          <img className="picture" src=".jpg"/>
        </div>
      </div>

      <p>
        Yoo, I’m just a kid from Philly that grew up a huge Eagles fan and
        that eventually lead me to fantasy.  I took that love of the birds
        and fantasy with me all over the world when serving in the U.S.
        Navy and that’s where I met my brother, and sub-par cohost, Kyle.
        I think I can speak for both of us when I say that competing
        against one another the past few years really turned this game into
        a passion.  After getting out of the Navy, we finally decided to
        start our podcast and here we are.  Thanks for the support so far,
        but hold onto your butts cause we’re just getting started!
      </p>
    </div>
  );
}

export default AboutPage;
