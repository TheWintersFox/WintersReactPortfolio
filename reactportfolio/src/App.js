import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    {/* The drawer is always open in large screens. The header is always shown, even in small screens. */}
<div style={{ height: '300px', position, 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
