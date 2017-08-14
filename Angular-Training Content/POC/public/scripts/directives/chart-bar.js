  angular.module("mainApp")
      .directive('hcBar', function () {
          return {
              restrict: 'E',
              transclude: true,
              scope: {
                  chartData: '='
              },
              link: function (scope, element, attrs, ctrl, transclude) {
                  var flag = true;
                  transclude(scope, function (clone, scope) {
                      element.append(clone);
                  });

                  var chart = new Highcharts.Chart({
                      chart: {
                          renderTo: element[0].children[1]
                      },
                      title: {
                          text: 'Vital Readings'
                      },
                      xAxis: {
                          categories: ['Vital1', 'Vital2', 'Vital3']
                      },
                      yAxis: {
                          title: {
                              text: 'Vital Scale'
                          }
                      },
                      series: [{
                          type: 'column',
                          name: 'Readings'
						}]
                  });

                  scope.selectedRow = function (json) {
                      scope.user = [
                                    ['Vital1', Number(json.pr1)],
                                    ['Vital2', Number(json.pr2)],
                                    ['Vital3', Number(json.pr3)]
                                    ];
                      chart.setTitle({
                          text: json.name + ' Vital Readings'
                      });
                  };

                  scope.$watch("user", function (newValue) {
                      chart.series[0].setData(newValue, true);
                  }, true);

                  scope.$watch("chartData", function (newValue) {
                      if (newValue && flag) {
                          flag = false;
                          scope.selectedRow(scope.chartData[0])
                      }
                  }, true);

              }
          }
      });