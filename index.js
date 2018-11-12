const express = require("express");
const app = express();

var path = require("path");

app.get("/", (req, res) => res.send("Hello World!"));

//3. Create five GET routes in Express, one per HTML document, that render the HTML documents.
app.get("/one", (req, res) => {
  res.sendFile(path.join(__dirname, "htmlFiles / one.html"));
});
app.get("/two", (req, res) => {
  res.sendFile(path.join(__dirname, "htmlFiles / two.html"));
});
app.get("/three", (req, res) => {
  res.sendFile(path.join(__dirname, "htmlFiles / three.html"));
});
app.get("/four", (req, res) => {
  res.sendFile(path.join(__dirname, "htmlFiles / four.html"));
});
app.get("/five", (req, res) => {
  res.sendFile(path.join(__dirname, "htmlFiles / five.html"));
});

app.get("/pdfFiles", (req, res) => {
  res.download(
    path.join(__dirname, "pdfFiles / document.pdf"),
    "projectDetails.pdf"
  );
});

//8. Create a GET route that redirects to some other location
app.get("/redirectThisUri", (req, res) => {
  res.redirect(301, "/one");
});

// app.set(express.static(path.join(__dirname, ‘views’)));

// 4. Create two static file directories that serve various static files (can be images, PDFs, etc).
/**
 * app.use(express.static(path.join(__dirname, ‘public’)));
 *  This instructs Express to load files that are actually present on the filesystem from the public directory within your Express project directory.
 * We perform the path.join call above on the directory to ensure we will always be talking about the public directory in the project directory.
 *  This means we can invoke Node on the application entry point from any directory and still resolve the proper public directory.
 */
app.use(express.static(path.join(__dirname, "cinema")));
app.use(express.static(path.join(__dirname, "filmStills")));

// 1. Create an Express server. It can run on any port you wish, though the typical ones are port 3000 or port 80.
app.listen(3000, () => console.log("Example app listening on port 3000!"));
