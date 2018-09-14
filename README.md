#Star Wars Charater Films
[Live Site](https://gracious-noether-a8e8bd.netlify.com/)

The user is able to see the moves a star wars character appeared in.  This is a simple React app which is deployed on Netlify. This app uses the character json file below.  

**NOTE:** Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

The [Star Wars API](http://swapi.co) is used to generate a list of the films that a particular character appears in.



----

`characters.json`
```
    {
      "characters": [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        }, 
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    }
```