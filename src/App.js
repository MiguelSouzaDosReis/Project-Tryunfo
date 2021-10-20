import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    const string = '';
    const boleean = true;
    const callback = () => {};
    return (
      <div>
        <h1>Tryunf</h1>
        <Form 
      cardName ={string},
      cardDescription ={string},
      cardAttr1 ={string},
      cardAttr2 ={string},
      cardAttr3 ={string},
      cardImage ={string},
      cardRare ={string},
      cardTrunfo ={boleean},
      hasTrunf ={boleean},
      isSaveButtonDisabled ={boleean},
      onInputChange ={callback},
      onSaveButtonClick = {callback} />
      </div>
    );
  }
}

export default App;
