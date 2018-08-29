exports.formatReport = function(obj) {
  var reports = [];
  var uniqueId = 0;
  // Aquire an array of individual reports
  // from a javascript object
  var flatten = function(node) {
    uniqueId++;
    node.reportId = uniqueId;

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

  // assemble top line of CMV-formated report from keys
  var CMVReport = "<tr><td>";
  CMVReport = CMVReport.concat(topLineOfReport.join("</td><td>"));
  CMVReport = CMVReport.concat("</td></tr>");
  // assemble each row of CMV-formated report from values
  reportValues.forEach(function(reportArray) {
    CMVReport = CMVReport = CMVReport.concat("<tr><td>");
    CMVReport = CMVReport.concat(reportArray.join("</td><td>"));
    CMVReport = CMVReport = CMVReport.concat("</td></tr>");
  });
  return CMVReport;
};
