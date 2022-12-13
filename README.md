## Personal Portfolio
My first developer portfolio website that documents my journey in the software engineering realm thus far! Done using React and Next.js, and deployed via Github Pages with a custom domain, still a work in progress.

## To acess deployed website
visit https://teosean.me/

## To run local version for development
npm run dev

## To push changes to main branch to reflect updated source code, and to also push the updated distributed build version to gh pages branch for deployment
npm run deploy

<!-- That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this: npm run deploy -- -m "Deploy React app to GitHub Pages" -->