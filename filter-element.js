
import _ from 'lodash';
import controller from './filter-element.controller';
// templates
import tplSelectizeSingle from './elements/selectize-single.html!text';
import tplSelectSingle from './elements/select-single.html!text';
import tplRadioGroup from './elements/radio-group.html!text';
import tplDateRange from './elements/date-range.html!text';
import tplNumberRange from './elements/number-range.html!text';
import tplText from './elements/text.html!text';

export default angular.module('demica.common.filterElement', ['demica.common.radioButton'])
  .directive('filterElement', ['$compile', function ($compile) {

    const templates = {
      'selectize-single': tplSelectizeSingle,
      'select-single': tplSelectSingle,
      'radio-group': tplRadioGroup,
      'date-range': tplDateRange,
      'number-range': tplNumberRange,
      'text': tplText
    };

    return {
      restrict: 'AE',
      controller,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        element: '=',
        collection: '=',
        model: '=',
        elementUpdated: '&'
      },
      link(scope, elem) {
        let template = templates[scope.vm.element.type];

        elem.html(template).show();
        $compile(elem.contents())(scope);
        _.each(elem.find('.mdl-textfield'), e => componentHandler.upgradeElement(e));
      }
    };
  }]);
