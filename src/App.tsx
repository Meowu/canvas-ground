import * as React from 'react';
import './App.css';
import Shape from './pages/Shape'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import SolarSystem from './pages/SolarSystem'
import MsgBox from './pages/MessageBox'
import CanvasState from './pages/State/index';
import logo from './logo.svg';

import { Greeter } from './generated/proto/web_pb_service'
import { HelloRequest } from './generated/proto/web_pb'
import { grpc } from 'grpc-web-client'

const host: string = 'http://192.168.0.190:11111'


class App extends React.Component {


  public componentDidMount() {
    const helloRequest = new HelloRequest()
    helloRequest.setName('gRPC')
    grpc.unary(Greeter.SayHello, {
      request: helloRequest,
      host,
      onEnd: (res: any) =>  {
        console.log(res.message.toObject())
      }
    })
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BarChart />
        <PieChart />
        <SolarSystem />
        <MsgBox />
        <CanvasState />
        <Shape />
      </div>
    );
  }
}

export default App;
