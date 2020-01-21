import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Juan D. Romero</h2>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="avatar"
              style={{height:'250px'}}
            />
          <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                         <i className="fa fa-phone-square" aria-hidden="true"/>
                         (+57) 300 252 5536
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                         <i className="fa fa-skype" aria-hidden="true"/>
                          judarogu1
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                         <i className="fa fa-envelope" aria-hidden="true"/>
                         judarogu1@gmail.com
                      </ListItemContent>
                    </ListItem>
                  </List>
              </div>

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Contact;
