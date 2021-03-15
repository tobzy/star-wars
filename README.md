
### Star Wars Movies App
A Star Wars movies application that allows a user to select a star wars movie from a drop-down and view more details about that movie such the name, height and gender of the movie's characters, the opening crawl and the total number of characters. The user can sort the characters table by gender, height or name just be clicking on the table headers. A drop-down also allows filtering by gender.

#### Demo
A demo for this application can be found [here](https://dangerous-vest.surge.sh/).

#### Tools:
This project was generated with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)


- [React](https://reactjs.org/)
- [React-Query](https://react-query.tanstack.com/) (For data fetching, caching and synchronization with the server)
- [Swapi API](https://swapi.dev/) ( Star Wars Movies data )
- [Surge](https://surge.sh/)( for deployment )



#### How to setup
- Clone repository
- Do an `yarn install`
- Run `yarn start` to start a dev server. This runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  The page will reload if you make edits.\
  You will also see any lint errors in the console.


- Run `yarn build` to build the app for production to the `build` folder.\ It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.\
                                                                           Your app is ready to be deployed!

#### Todos
- Add unit tests for components
- Optimize filtering logic

#### Structure and Naming
```
    ─src
    │   App.js
    │   index.css
    │   index.js
    │   
    ├───assets
    │   └───star-wars.png
    │       
    ├───components
    │   └───Loader.js
    │   └───MovieCharacterTableRow.js
    │   └───MoviesDetails.js
    │   └───MoviesSelect.js
    │   └───Sort.js
    |  
    ├───hooks
    │   └───cacheStateKey.js
    │   └───useMovies.js
    |
    ├───lib
    │   └───apiConstants.js
    │       
    ├───Services
    │   └───Movies.js
              

```Powershell
Tags: Star Wars, SWAPI, React-query, React.
```