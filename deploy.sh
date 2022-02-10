# abort on errors
set -e
source .env

# build
del -rf docs
npm run build
move dist docs

# commit
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:$GIT_USER/$GIT_REPO.git master:gh-pages
git fetch