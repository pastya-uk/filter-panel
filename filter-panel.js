
import controller from './filter-panel.controller';
import template from './filter-panel.html!text';
import filterElement from './filter-element';

export default angular.module('demica.common.filterPanel', [filterElement.name])
  .directive('filterPanel', function () {
    return {
      restrict: 'AE',
      controller,
      template,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        definition: '=filterDefinition',
        values: '=filterValues',
        model: '=filterModel',
        disabled: '=filterUnchangeable',
        onSubmit: '&'
      }
    };
  });
