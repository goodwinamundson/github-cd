const express = require('express');

const PORT = process.env.PORT || 4242;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const responsePage = require('./template');
const langList = require('./translations');

app.get('/',function(request, response){

  const query = request.query.language || 'English';

  const parsedQuery = query.charAt(0).toUpperCase() + query.slice(1);

  const language = langList.hasOwnProperty(parsedQuery) ? parsedQuery : 'English';

	response.send( responsePage(language) )
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
