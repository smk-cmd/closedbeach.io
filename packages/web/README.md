# ClosedBeach.io - Web UI

## Available Scripts

In the project directory, you can run:

### `yarn run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Frontend Structure

In the `src` directory, we have:

- `App.js` app with routes to pages
- `index.js` initizlizes app with firebase
- `NavBar.js` navigation bar for app
- `pages/` directory
  - `AboutPage.js` about page
  - `ArtworkListPage.js` artwork list page
  - `ArtworkPage.js` artwork page
  - `CreateAccountPage.js` create account page
  - `HomePage.js` home page
  - `LoginPage.js` login page
  - `NotFoundPage.js` 404 not found page
- `components/` directory
  - `ArtworkList.js` artwork list component
- `hooks/` directory
  - `useUser.js` user authentication