import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">AboutMe</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">AboutMe</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Drawer>
            <Main/>
            <Content />
        </Layout>
    </div>
    );
}

export default App;
