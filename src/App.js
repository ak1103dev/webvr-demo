import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Scene>
          {/* <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/> */}
          <Entity particle-system={{preset: 'snow'}}/>
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF/2CylinderEngine.gltf" />
          <Entity text={{value: 'Hello, WebVR!'}}/>

          <Entity obj-model="obj: url(../model/tree.obj); mtl: url(../model/tree.mtl)"></Entity>

        </Scene>
      </div>
    );
  }
}

export default App;
