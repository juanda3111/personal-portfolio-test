import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions , Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
      super(props)
      this.state = { activeTab: 0 };
  }

  toogleCategories() {
      if(this.state.activeTab === 0){
        return(
        <div className="projects-grid">
          {/* Proyecto 1 */}
          <Card shadow={0} style={{width: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover'}}>Welcome</CardTitle>
              <CardText>
                Descripcion del primer proyecto.
              </CardText>
              <CardActions border>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Github</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Code Pen</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
          {/* Proyecto 2 */}
          <Card shadow={0} style={{width: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover'}}>Welcome</CardTitle>
              <CardText>
                Descripcion del segundo proyecto.
              </CardText>
              <CardActions border>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Github</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Code Pen</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
          {/* Proyecto 3  */}
          <Card shadow={0} style={{width: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover'}}>Welcome</CardTitle>
              <CardText>
                Descripcion del tercer proyecto.
              </CardText>
              <CardActions border>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Github</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Code Pen</Button>
                  <Button href="https://github.com/juanda3111" target="_blank" colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>

        </div>

        )
      }
        else if (this.state.activeTab === 1 ){
          return(
            <div><h1>Hola2</h1></div>
          )
        }
        else if (this.state.activeTab === 2 ){
          return(
            <div><h1>Hola3</h1></div>
          )
        }
        else if (this.state.activeTab === 3 ){
          return(
            <div><h1>Hola4</h1></div>
          )
        }
        else if (this.state.activeTab === 4 ){
          return(
            <div><h1>Hola5</h1></div>
          )
        }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>html/css/vanilla js</Tab>
            <Tab>React</Tab>
            <Tab>Ecommerce/ php</Tab>
            <Tab>NodeJS/Express</Tab>
            <Tab>MongoDB</Tab>
        </Tabs>


          <Grid >
            <Cell col={12}>
              <div className="content">{this.toogleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
