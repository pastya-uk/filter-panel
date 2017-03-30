/* @flow */

import type {FilterConfig, Filters} from './filter-panel.config';
import {
  compact,
  flatten,
  isEmpty,
  map
} from 'lodash';

class FilterPanelController {
  static $inject: Array<string>;
  definition: Filters;
  model: Object;
  modelOriginal: Object;
  onSubmit: Function;
  hideAdvancedFilters: boolean;
  panelFilters: FilterConfig[];
  isReady: boolean;

  constructor() {
    this.modelOriginal = angular.copy(this.model);
    this.hideAdvancedFilters = true;
    this.isReady = true;
    this.filterVisibleFilters();
  }

  filterVisibleFilters() {
    this.panelFilters = compact(flatten(map(this.definition, (filters, key) => {
      if (key === 'advanced' && this.hideAdvancedFilters) {
        return null;
      }
      return filters;
    })));
  }

  toggleAdvancedFilters() {
    this.hideAdvancedFilters = !this.hideAdvancedFilters;
    this.filterVisibleFilters();
  }

  canDisplayAdvancedFiltersLink(): boolean {
    return !isEmpty(this.definition.advanced);
  }

  setSubmitFalse() {
    this.isReady = false;
  }

  resetFilters() {
    this.model = angular.copy(this.modelOriginal);
  }

  submit() {
    this.onSubmit(this);
  }
}

FilterPanelController.$inject = [];

export default FilterPanelController;
