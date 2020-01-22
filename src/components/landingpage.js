import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div style={{width:'100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
              <Cell col={12}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                     alt="avatar"
                     className="avatar-img"
                  />
                <div className="banner-text">
                  <h1 >Full Stack Web Developer</h1>
                  <hr/>

                  <p>html/css | Bootstrap | JavaScript | React | NodeJS | php | Wordpress | Express | MySQL | MongoDB </p>
                  <div className="social-links">
                    {/*LinkedIn*/}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    {/*Github*/}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                    {/*CodePen*/}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-free-code-camp" aria-hidden="true"/>
                    </a>
                    {/*FreeCodeCamp*/}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-codepen" aria-hidden="true"/>
                    </a>

                  </div>
                </div>

              </Cell>
            </Grid>
          </div>
        </div>
      </div>

    )
  }
}

export default Landing;
