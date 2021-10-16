import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input data-testid="name-input" type="text" />
          <textarea data-testid="description-input" />
          <input data-testid="attr1-input" type="number" />
          <input data-testid="attr2-input" type="number" />
          <input data-testid="attr3-input" type="number" />
          <input data-testid="image-input" type="text" />
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input data-testid="trunfo-input" type="checkbox" />
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
