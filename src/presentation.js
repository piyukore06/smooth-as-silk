// Import React
import React from 'react';
import './index.css'
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link
} from 'spectacle';

import Layout from './layout'
import createTheme from 'spectacle/lib/themes/default';
import silk from './silk.png'
import avatar from './img.jpg'
import anim from './anim.mp4'
import animee from './animee.mp4'
import loader from './loader.gif'
import perf from './perf.png'

import eg1 from './1.png'
import eg2 from './2.png'
import html from './html.png'
import css from './css.png'
import layout from './layout.mp4'
import triggers from './csstriggers.png'
import bounce from './bounce.mp4'
import composite from './composite.svg'
import paint from './paint.png'

require('normalize.css');

const theme = createTheme(
  {
    primary: '#f5f5f5',
    secondary: '#705697',
    tertiary: '#705697AA',
    quaternary: '#c4b7d7',
  },
  {
    primary: `'Font'`,
    secondary: 'Quicksand',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgImage={silk} transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="quaternary">
            Smooth as silk
          </Heading>
          <Text margin="10px 0 0" textColor="quaternary" size={1} fit bold>
            A story of animating on the web with perf in mind
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <div className="flex">
            <div className="avatar" style={{ backgroundImage: `url(${avatar})`}}></div>
            <div className="intro">
            <Heading size={6} lineHeight={4} textColor="secondary">
              Priyanka Kore
            </Heading>
            <Link className="underline" textColor="quaternary" lineHeight={2} href="https://img.ly" target="_blank">img.ly</Link><br/><br/>
            <Link className="underline" textColor="quaternary" lineHeight={2} href="https://priyanka.codes" target="_blank">priyanka.codes</Link><br/>
            <br/>
            <Link textColor="quaternary" href="https://twitter.com/piyukore06" target="_blank">@piyukore06</Link>
            </div>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="quaternary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            Animations are everywhere
          </Heading>
          <br/><br/>
          <video className="background-video" loop autoPlay>
              <source src={anim} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <video className="background-video" loop autoPlay>
              <source src={animee} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
           <Heading size={3} lineHeight={1} textColor="secondary">
            The power of perceived performance
          </Heading> <br/>
          <img src={loader} alt=""/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="quaternary">
           <Heading size={3} lineHeight={1} textColor="quaternary">
            First, let's understand rendering on the web
          </Heading> 
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={3} lineHeight={1} textColor="secondary">
            Stages of Rendering
          </Heading>
          <br/>
          <div className="grid">
            <div style={{ animationDelay: '0.3s' }} className="box">Parsing</div>
            <div style={{ animationDelay: '0.4s' }} className="box">Style Calculations</div>
            <div style={{ animationDelay: '0.5s' }} className="box">Layout</div>
            <div style={{ animationDelay: '0.6s' }} className="box">Paint</div>
            <div style={{ animationDelay: '0.7s' }} className="box">Composite</div>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={3} lineHeight={1} textColor="secondary">
            Render Tree
          </Heading> <br/>
          <div className="flex">
            <div className="img">
              <img style={{ filter: 'blur(1px)' }} width="90%" src={html} alt=""/>
              <div className="text">DOM</div>
            </div>
            <div className="img">
              <img style={{ filter: 'blur(1px)' }}  width="90%" src={css} alt=""/>
              <div className="text">CSSOM</div>
            </div>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
           <Heading size={4} lineHeight={1} textColor="secondary">
            Layout Calculations
          </Heading> <br/>
          <Layout />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
           <Heading size={3} lineHeight={1} textColor="secondary">
            Paint
          </Heading>
          <br/>
          <img src={paint} alt=""/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
           <Heading size={3} lineHeight={1} textColor="secondary">
            Composite
          </Heading>
          <br/>
          <img src={composite} alt=""/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="quaternary">
           <Heading size={3} lineHeight={1} textColor="quaternary">
            Performance is an art of doing less work
          </Heading> 
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="quaternary">
           <Heading size={3} lineHeight={1} textColor="quaternary">
            Let's look at a simple example
          </Heading> 
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary">
          <div className="grid">
            <div className="absolute-box">
              Layout Shifts
            </div>
          </div>
          <br/>
          <br/>
          <img src={eg1} style={{ width: '50%' }} alt=""/>

          <br/>
          <br/>
          <Text textSize="13" textColor="primary">*enable layout shift regions and paint flashing in chrome dev tools</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="quaternary">
          <div className="grid">
            <div className="absolute-box-1">
              No Layout Shifts
            </div>
          </div>
          <br/>
          <br/>

          <img style={{ width: '50%' }} src={eg2} alt=""/>
          <br/>
          <br/>
          <Text textSize="13" textColor="primary">*enable layout shift regions and paint flashing in chrome dev tools</Text>

        </Slide>

        <Slide transition={['fade']} bgColor="primary">
        <Heading size={4} lineHeight={1} textColor="secondary">
            Layout Shifts
          </Heading> 
          <br/>
          <video className="background-video" loop autoPlay>
              <source src={layout} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} lineHeight={1} textColor="secondary">
            Layout and Paint on Performance panel
          </Heading>
          <br/>
          <img style={{ width: '60%' }} src={perf} alt=""/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} lineHeight={1} textColor="secondary">
            CSS Triggers!!
          </Heading> <br/>
          <Link href="https://csstriggers.com/" target="_blank">
            <img style={{ width: '60%' }} src={triggers} alt=""/>
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            You want to avoid
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            jank
          </Heading>
          <br/>
          <br/>
          <Link textColor="quaternary" href="https://googlechrome.github.io/devtools-samples/jank/" target="_blank">Demo</Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Inspect Animations
          </Heading>
          <br/>
          <video className="background-video" loop autoPlay>
              <source src={bounce} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
          Enable Advanced Paint instrumenation
          </Heading>
          <List>
            <ListItem>Paint Profiler</ListItem>
            <ListItem>Inspect Layers</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="quaternary">
          <Heading size={3} lineHeight={1} textColor="quaternary">
            So go out there and build animations
          </Heading>
          <Heading className="underline" size={3} fit lineHeight={1} textColor="quaternary">
            Smooooth as Silk :)
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="quaternary">
          <Heading size={4} lineHeight={1} textColor="quaternary">
            Thank You 🙏🏻  
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
