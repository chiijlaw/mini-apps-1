exports.formatReport = function(obj) {
  obj = JSON.parse(obj);
  var reports = [];
  // Aquire an array of individual reports
  // from a javascript object
  var flatten = function(node) {
    reports.push(node);

    if (node.children) {
      node.children.forEach(function(child) {
        flatten(child);
      });
    }
  };

  flatten(obj);

  //Remove the children property from each report
  reports.forEach(function(child) {
    delete child.children;
  });

  // extract the keys from the first report for CMV-format
  var topLineOfReport = Object.keys(reports[0]);

  // extract the values from each report for CMV-format
  var reportValues = [];
  reports.forEach(function(report) {
    var bucket = Object.values(report);
    reportValues.push(bucket);
  });

  // assemble CMV-formated report from keys and values
  var CMVReport = "<br>";
  CMVReport = CMVReport.concat(topLineOfReport.join(","));
  CMVReport = CMVReport.concat("</br>");
  reportValues.forEach(function(reportArray) {
    CMVReport = CMVReport = CMVReport.concat("</br>");
    CMVReport = CMVReport.concat(reportArray.join(","));
    CMVReport = CMVReport = CMVReport.concat("</br>");
  });
  return CMVReport;
};
