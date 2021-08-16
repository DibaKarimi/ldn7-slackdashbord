# Slacktastic App

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 12.x and 14.x LTS releases)
- [x] [Express] server
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] Production build (single deployment artifact, React loaded via CDN)
- [x] [Heroku] deployment
- [x] [Cloud Foundry] deployment
- [x] [Docker] build
- [x] [Postgres] database with [node-postgres]

## Setup

Pick one member of the team to own the repository and pipeline. That person should do the following:

1.  Click the "Use this template" button above (see [GitHub's docs][1]) to create your team repository, select "Include all branches" and name it something appropriate for your project.
2.  In your new repo, go to "Settings", then "Branches", then switch the default branch to `postgres` (_optional_: you can now delete the old `master` branch and rename `postgres` to `master`, `main` or whatever else you'd like) - see [GitHub's docs][2] again
3.  In your repo, click the "Deploy to Heroku" button at the top of the README and create a Heroku account when prompted.
4.  Fill in the name of the application, select Europe and then click "Deploy App".
5.  Once it has deployed successfully, click the "Manage app" button to view the application details.
6.  Go to the "Deploy" tab, select "Connect to GitHub" and choose your repo.
7.  Click "Enable automatic deploys".

Whenever you commit to master (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Troubleshooting

See the guidance in the [wiki].

[1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
[2]: https://docs.github.com/en/github/administering-a-repository/managing-branches-in-your-repository
[babel]: https://babeljs.io/
[cloud foundry]: https://www.cloudfoundry.org/
[collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[docker]: https://www.docker.com
[eslint]: https://eslint.org/
[express]: https://expressjs.com/
[heroku]: https://www.heroku.com/
[node]: https://nodejs.org/en/
[node-postgres]: https://node-postgres.com/
[postgres]: https://www.postgresql.org/
[prettier]: https://prettier.io/
[pull request]: https://help.github.com/en/articles/about-pull-requests
[react]: https://reactjs.org/
[react router]: https://reactrouter.com/web
[webpack]: https://webpack.js.org/
[wiki]: https://github.com/textbook/starter-kit/wiki
[dotenv]: https://github.com/motdotla/dotenv

## Setting up .env file

Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. In this case:

```
SLACK_API_KEY=<key>
DATABASE_URL=postgresql://<username>:<password>@localhost/cyf
```

## Setting up local db

Commands:

```
createdb -U <username> cyf
psql -d cyf -U <username> -f scripts/01-init.sql

```

### Font

1. Run on your terminal: npm install --save file-loader
2. Run npm i typeface-varela-round
3. Run npm install webfontloader --save
4. Add to the App.js: import WebFont from "webfontloader";
   WebFont.load({google: {families: ["Varela Round: 400"]}});

### Testing

So far we are using some simple [snapshot tests](https://jestjs.io/docs/snapshot-testing) using Jest.
To run the tests -all tests located under the **tests** folder, run:

```
npm run test
```

The snapshot tests will warn developers if they make unintentional changes to the components or pages. If you have made intentional changes to a component, run the following to update the snapshots:

```
jest --updateSnapshots
```
