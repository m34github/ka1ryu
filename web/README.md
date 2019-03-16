# How to start to dev

## only first
- install `git`
  - `brew install git`
- install `npm`
  - `brew install npm`
- install `yarn`
  - `npm install -g yarn`
- check whether you installed yarn
  - `yarn -v` #=> 1.13.0
- clone project
  - `git clone https://github.com/m34github/ka1ryu.git [ka1ryu]`
  - `cd ka1ryu`
  - `yarn [install]`
- init as firebase project
  - `yarn global add firebase-tools`
  - `firebase login [--reauth]`
  - `firebase init`
- set firebase env

## each time
- build
  - `yarn dev [--watch]`
- start your server
  - `yarn start`
- open and check your web app
  - open http://localhost:8080/ in your browser
