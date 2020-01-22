import React from 'react';
import './App.css';
/*importar libreria de react-mdl*/
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="row">
              <div className="demo-big-content">
              <Layout>
                  <Header className="header-color" title="Juan David R." scroll>
                      <Navigation>
                          <Link to="/resume">Resume</Link>
                          <Link to="/aboutme">About</Link>
                          <Link to="/projects">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Header>
                  <Drawer title="Juan David R.">
                      <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content" />
                      <Main />
                  </Content>
              </Layout>
          </div>

      </div>
    </div>

  );
}

export default App;
