// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

 
  // home route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/full-page-gallery.html"));
  });
};