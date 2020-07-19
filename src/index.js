import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(
    <div>
      <Card id="1" name="Emm" email="emm@test.com"/>
      <Card id="2" name="Emm" email="emm@test.com"/>
      <Card id="3" name="Emm" email="emm@test.com"/>
    </div>
    <CardList robots={robots}/>
    , document.getElementById('root'));
  registerServiceWorker();render(<App />, document.getElementById('root'));
  registerServiceWorker();
