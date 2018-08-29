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

  // extract the keys from the first report for CSV-format
  var topLineOfReport = Object.keys(reports[0]);

  // extract the values from each report for CSV-format
  var reportValues = [];
  reports.forEach(function(report) {
    var bucket = Object.values(report);
    reportValues.push(bucket);
  });

  // assemble top line of CSV-formated report from keys
  var CSVReport = "<tr><td>";
  CSVReport = CSVReport.concat(topLineOfReport.join("</td><td>"));
  CSVReport = CSVReport.concat("</td></tr>");
  // assemble each row of CSV-formated report from values
  reportValues.forEach(function(reportArray) {
    CSVReport = CSVReport = CSVReport.concat("<tr><td>");
    CSVReport = CSVReport.concat(reportArray.join("</td><td>"));
    CSVReport = CSVReport = CSVReport.concat("</td></tr>");
  });
  return CSVReport;
};
