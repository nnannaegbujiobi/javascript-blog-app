/* global axios */


axios.get("http://localhost:3000/api/posts").then(function(response) {
  var post = response.data;
  console.log(post);
});




