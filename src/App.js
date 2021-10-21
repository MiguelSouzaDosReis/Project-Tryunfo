import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartas: [],
    };
  }

  responsavel = () => {
    const menor = this.verifcaNumerosMenores();
    const maior = this.verificarNumerosMaiores();
    const escrita = this.validacaoDaEscrita();
    const soma210 = this.soma210();
    if (menor && maior && escrita && soma210) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  verifcaNumerosMenores = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const zero = 0;
    const test1 = parseFloat(cardAttr1) >= zero;
    const test2 = parseFloat(cardAttr2) >= zero;
    const test3 = parseFloat(cardAttr3) >= zero;
    if (test1 && test2 && test3) {
      return true;
    }
  }

  verificarNumerosMaiores = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const noventa = 90;
    const test1 = parseFloat(cardAttr1) <= noventa;
    const test2 = parseFloat(cardAttr2) <= noventa;
    const test3 = parseFloat(cardAttr3) <= noventa;
    if (test1 && test2 && test3) {
      return true;
    }
  }

  soma210 = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const duzendos = 210;
    const soma = parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    if (soma <= duzendos) {
      return true;
    }
  }

  validacaoDaEscrita = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    const nomeVazio = cardName !== '';
    const descricaoVazia = cardDescription !== '';
    const imagemVazia = cardImage !== '';
    if (nomeVazio && descricaoVazia && imagemVazia) {
      return true;
    }
  }

  onInputChange = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      }, this.responsavel);
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    const cartaAtual = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };
    this.setState((EstadoAnterior) => (
      { cartas: [cartaAtual, ...EstadoAnterior.cartas] }
    ), this.limpar);
    if (cardTrunfo) {
      this.setState(
        { hasTrunfo: true },
      );
    }
  }

  limpar = () => {
    this.setState(
      { cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
      },

    );
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cartas,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {cartas.map((element) => (<Card
          key={ element.cardName }
          cardName={ element.cardName }
          cardDescription={ element.cardDescription }
          cardAttr1={ element.cardAttr1 }
          cardAttr2={ element.cardAttr2 }
          cardAttr3={ element.cardAttr3 }
          cardImage={ element.cardImage }
          cardRare={ element.cardRare }
          cardTrunfo={ element.cardTrunfo }
        />))}
      </div>
    );
  }
}

export default App;
