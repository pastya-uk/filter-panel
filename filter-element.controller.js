import _ from 'lodash';
import moment from 'moment';
import {DATE_FORMAT} from '../../api/api';

class Controller {
  onNumberChange() {
    let {from, to} = this.model;

    if (_.isFinite(from)) {
      this.model.from = from;
    } else {
      delete this.model.from;
    }

    if (_.isFinite(to)) {
      this.model.to = parseFloat(to);
    } else {
      delete this.model.to;
    }
  }

  onTextChange() {
    if (!this.model || !this.model.length) {
      delete this.model;
    }
  }

  onDateChange() {
    let {to, from} = this.model;

    if (from && from.length && moment(from).isValid()) {
      this.model.from = moment(from).format(DATE_FORMAT);
    } else {
      delete this.model.from;
    }

    if (to && to.length && moment(to).isValid()) {
      if (this.model.from && (moment(to) < moment(from))) {
        delete this.model.to;
      } else {
        this.model.to = moment(to).format(DATE_FORMAT);
      }
    } else {
      delete this.model.to;
    }

    if (!this.model.from && !this.model.to) {
      delete this.model;
    }
  }
}
export default Controller;
