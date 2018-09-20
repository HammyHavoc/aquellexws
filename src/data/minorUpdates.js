import React, { Fragment } from 'react';

// TODO: Not the optimal way to store this, but eh.
// Look into Netlify CMS: https://www.netlifycms.org/
const minorUpdates = [
  {
    date: '12.09.2018',
    content: (
      <Fragment>Game Boy sound comparison page updated to 0.9.4a. lsdpack is awesome!</Fragment>
    ),
  },
  {
    date: '01.05.2018',
    content: (
      <Fragment>
        Sorry for radio silence and short notice of a gig on May 4th, I've been busy with life
        lately! Major update soon + updated Game Boy Comparison page to 0.9.4.
      </Fragment>
    ),
  },
  {
    date: '30.01.2018',
    content: <Fragment>Fixed audio preloading on tutorial pages. Thanks resir014!</Fragment>,
  },
  {
    date: '07.01.2018',
    content: <Fragment>Updated the Game Boy Comparison page to 0.9.3.</Fragment>,
  },
  {
    date: '27.11.2017',
    content: (
      <Fragment>
        Added one past gig to 'Gigs' and updated the Game Boy Comparison page to 0.9.2.
      </Fragment>
    ),
  },
  {
    date: '25.11.2017',
    content: (
      <Fragment>
        Using{' '}
        <a href="https://twitter.com/thetigerinspace" target="_blank" rel="noopener noreferrer">
          tigerinspace
        </a>
        's mascot drawing in /about and added the 'Gigs' module above.
      </Fragment>
    ),
  },
  {
    date: '11.11.2017',
    content: (
      <Fragment>
        Updated /goodies to include descrptions, /goodies/tutorial/famitracker-dubstep with examples
        and /goodies/tutorial/game-boy-comparison with DS Lite recordings.
      </Fragment>
    ),
  },
  {
    date: '01.11.2017',
    content: <Fragment>Added DEFENSE MECHANISM's LSDJ upgrade cheat sheet to /goodies.</Fragment>,
  },
  {
    date: '21.10.2017',
    content: <Fragment>Added Ko-Fi link in /about + a few new tutorial scaffolds.</Fragment>,
  },
  {
    date: '30.09.2017',
    content: (
      <Fragment>
        Changed web rating from G-PG to PG-14 because of my social media links. Also changed my
        contact e-mail to aquellex@f0xpa.ws.
      </Fragment>
    ),
  },
  {
    date: '24.08.2017',
    content: <Fragment>The basic premise in ABOUT is ripe and ready to go!</Fragment>,
  },
  {
    date: '24.08.2017',
    content: <Fragment>Originals section in MUSIC is ripe and ready to go!</Fragment>,
  },
  {
    date: '23.08.2017',
    content: <Fragment>Almost done constructing the skeleton of the whole webpage.</Fragment>,
  },
  {
    date: '16.08.2017',
    content: (
      <Fragment>
        Started the website as a "test of waters". Hosted by Neocities for the time being.
      </Fragment>
    ),
  },
];

export default minorUpdates;