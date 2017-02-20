const axios = require('axios');
const _ = require('lodash');

class WhaleClub {

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = 'https://api.whaleclub.co/v1/'
  }

  req(method, path, data) {

    let req = {
      method: method,
      url: this.endpoint + path,
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      },

      data
    };

    return axios(req).then(resp => resp.data);
  }


  markets(symbols) {
    let path = 'markets';

    if(_.isArray(symbols))
      path += '/' + symbols.join(',');

    return this.req('get', path);
  }

  price(symbols) {
    let path = 'price';

    if(_.isArray(symbols))
      path += '/' + symbols.join(',');

    return this.req('get', path);
  }

  priceTurbo(symbols) {
    let path = 'price-turbo';

    if(_.isArray(symbols))
      path += '/' + symbols.join(',');

    return this.req('get', path);
  }

  balance() {
    return this.req('get', 'balance');
  }


  transactions(type) {
    let path = 'transactions';

    if(_.isString(type))
      path += '/' + type;

    return this.req('get', path);
  }

  // positions API
  newPosition(req) {
    return this.req('post', 'position/new', req);
  }

  getPosition(id) {
    return this.req('get', `position/${id}`);
  }

  updatePosition(id, req) {
    return this.req('put', `position/update/${id}`, req);
  }

  closePosition(id) {
    return this.req('put', `position/close/${id}`);
  }

  cancelPosition(id) {
    return this.req('put', `position/cancel/${id}`);
  }

  splitPosition(id, ratio) {
    return this.req('post', `position/cancel/${id}`, {ratio});
  }

  listPositions(state, limit) {
    return this.req('get', `positions/${state}`, {limit});
  }

  // positions turbo API
  contracts() {
    return this.req('get', `contracts`);
  }

  newTurboPosition(req) {
    return this.req('post', 'position-turbo/new', req);
  }

  getTurboPosition(id) {
    return this.req('get', `position-turbo/${id}`);
  }

  listTurboPositions(state, limit) {
    return this.req('get', `positions-turbo/${state}`, {limit});
  }

}

module.exports = WhaleClub;
