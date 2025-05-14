## [0.7.1](https://github.com/Shuudy/disgame-client/compare/v0.7.0...v0.7.1) (2025-05-14)

### Features

* add error handling for party creation response ([6041ccc](https://github.com/Shuudy/disgame-client/commit/6041ccc1e65012e4b1c081628655aa2229d7c1d0))
## [0.7.0](https://github.com/Shuudy/disgame-client/compare/v0.6.0...v0.7.0) (2025-05-12)

### Features

* add color variable for base background ([3ad7044](https://github.com/Shuudy/disgame-client/commit/3ad7044c9e2e10e3589f6c0df7fd4ae335258722))
* add dedicated route for PartyChat component ([1404f62](https://github.com/Shuudy/disgame-client/commit/1404f620cfe6988263c402b560db0ffaca216121))
* add error message styling to forms ([ebdc274](https://github.com/Shuudy/disgame-client/commit/ebdc2743e91b0ad4bbc8c8d36890586f9bb85b78))
* add rate limit error handling for login and registration ([9969863](https://github.com/Shuudy/disgame-client/commit/9969863c65f7536a5325fb148c24dfb7ee7fa4d9))
* categorize messages in PartyChat by type for improved display ([6741aa0](https://github.com/Shuudy/disgame-client/commit/6741aa0732ef3be012eb260b90cc20c8e7836ffa))
* display party host username in Parties and PartyChat components ([8a48147](https://github.com/Shuudy/disgame-client/commit/8a48147c970fc72d0503467410edca48ec0a1ba6))
* enhance message display in PartyChat to differentiate between user and others ([9726843](https://github.com/Shuudy/disgame-client/commit/9726843b2e642dc3e81ef1eb2da057346cd22a6c))
* handle player join and leave events in PartyChat component ([28282f3](https://github.com/Shuudy/disgame-client/commit/28282f3e8f54013b4da83954fb2358d82135e8c9))
* implement loading spinner component for improved user experience ([873b66f](https://github.com/Shuudy/disgame-client/commit/873b66f8e2802afe15c74491775873c682907eba))
* improve user data handling in AuthProvider for login and token validation ([3c8658e](https://github.com/Shuudy/disgame-client/commit/3c8658e522ecb780f8cbdaa07055a2ed56b872a4))
* prevent sending empty messages in PartyChat ([20680c4](https://github.com/Shuudy/disgame-client/commit/20680c49e4b51af59ccbb26e021c6cc954029328))
* redirect to PartyChat after creating a new party ([5f4c060](https://github.com/Shuudy/disgame-client/commit/5f4c060d3ae7248a46f23057447d024d3eb0e5ab))
* update background color in form and promo components to use color variable ([a070320](https://github.com/Shuudy/disgame-client/commit/a0703201e1b3ad49f9165dae7a4f9548a5f0eab1))
* update error messages to French in authentication components ([3bfb4c7](https://github.com/Shuudy/disgame-client/commit/3bfb4c71193bf4253215b0181088377d32f6d6d9))
* update token validation logic to return full response for better error handling ([d1fb35c](https://github.com/Shuudy/disgame-client/commit/d1fb35c5ad57fcc22d1818f00c6c4252a36a52ed))

### Bug Fixes

* add border-radius to form content for consistent styling ([9061623](https://github.com/Shuudy/disgame-client/commit/9061623536bd1a9eb3cc6479cba09750f8004d32))
* add font-family to button and unify font size for related elements ([a0b7da8](https://github.com/Shuudy/disgame-client/commit/a0b7da8b38fe7d1d2c4261d5978bd2427c76d79b))
* adjust hero section height and layout properties ([bda4e26](https://github.com/Shuudy/disgame-client/commit/bda4e26abb7336e388bfe46c12448a4e4c590244))
* update media queries for responsive layout in hero section ([d3877c0](https://github.com/Shuudy/disgame-client/commit/d3877c092aadb6d7dd48002083655ae54efe7ff1))
* update min-height to use 100dvh for better responsiveness ([f16d89f](https://github.com/Shuudy/disgame-client/commit/f16d89fb0df7d03a18eddebce0ce419faf727ea0))
## [0.6.3](https://github.com/Shuudy/disgame-client/compare/v0.6.2...v0.6.3) (2025-04-28)

### Bug Fixes

* add font-family to button and unify font size for related elements ([#49](https://github.com/Shuudy/disgame-client/pull/49))

## [0.6.2](https://github.com/Shuudy/disgame-client/compare/v0.6.1...v0.6.2) (2025-04-27)

### Bug Fixes

* improve form responsiveness by replacing vh with dvh ([#46](https://github.com/Shuudy/disgame-client/pull/46))

## [0.6.1](https://github.com/Shuudy/disgame-client/compare/v0.6.0...v0.6.1) (2025-04-27)

### Bug Fixes

* improve hero section responsiveness ([#43](https://github.com/Shuudy/disgame-client/pull/43))

## [0.6.0](https://github.com/Shuudy/disgame-client/compare/v0.5.0...v0.6.0) (2025-04-25)

### Features

* add ForgotPassword component and route ([574fc9a](https://github.com/Shuudy/disgame-client/commit/574fc9aa8735e6eba3d039873b1933ec641af850))
* add loading state to Login component for improved user experience ([d91f91f](https://github.com/Shuudy/disgame-client/commit/d91f91f4e39a95de87539aa4762406403dc894c8))
* add LoginUI component and form styles ([ac129a4](https://github.com/Shuudy/disgame-client/commit/ac129a4f525e4fad6dedb8328ca8b186096a4384))
* add RegisterUI component for user registration ([f9ab07e](https://github.com/Shuudy/disgame-client/commit/f9ab07e7f15e9b8974ee1ae7748873a75abe791b))
* add transition effect to card hover state in populargames component ([6ee78cc](https://github.com/Shuudy/disgame-client/commit/6ee78cc05c4659cfc330bcf1418ea9c878de9239))
* enhance Login component UI with improved layout and styling ([30a9312](https://github.com/Shuudy/disgame-client/commit/30a9312d0c3d6b4838c581611bdb365fa04e023f))
* **login:** update text to French for localization ([df37841](https://github.com/Shuudy/disgame-client/commit/df378413abda93dc81e0e144002c5c11dc24f883))
* **register:** add loading state to registration form ([aa8d09f](https://github.com/Shuudy/disgame-client/commit/aa8d09f9d856d1f1bf1cc7e009d2559557be37e4))
* **register:** implement styles for the registration form ([7c75b69](https://github.com/Shuudy/disgame-client/commit/7c75b697afc2327dbf6e7a3e7a6047b9e421ec2b))
* **register:** update registration form text to French for localization ([76ea995](https://github.com/Shuudy/disgame-client/commit/76ea995b36d399b6a279970670fba6a7b14b1565))
* use Link for navigation in forms ([98d6bc4](https://github.com/Shuudy/disgame-client/commit/98d6bc4b4b28547648870e043dc0f1fd313f294e))

### Bug Fixes

* add media query for max-height to adjust illustration width ([b250990](https://github.com/Shuudy/disgame-client/commit/b2509909b0006f0eddb0bef7ddd370e8ebed361f))
* change input type from text to email in ForgotPassword component ([0fbf039](https://github.com/Shuudy/disgame-client/commit/0fbf0399a4af7cea2a2aa988d4fcc670341f4e03))
* improve button hover and disabled states in form styles ([bb9e939](https://github.com/Shuudy/disgame-client/commit/bb9e939b2f7e19a934a7d7715ef73f19e3d13d92))
* **register:** add missing period in registration form subtitle ([90d8325](https://github.com/Shuudy/disgame-client/commit/90d832505de659d005cec88f532c283fa3861f73))
* remove commented font-size property in form styles ([b6312d9](https://github.com/Shuudy/disgame-client/commit/b6312d909c8ba4d2e0ba0caf996695d8dd1b9284))
* remove unnecessary margin class from form group in ForgotPassword component ([f8e8bf8](https://github.com/Shuudy/disgame-client/commit/f8e8bf8a37ffc7106481214efa4c6e4d7ffb223d))
* rename Login function to ForgotPassword in ForgotPassword component ([12fee8b](https://github.com/Shuudy/disgame-client/commit/12fee8b0c371ce78ec294c95a3846a711aeb1d05))
* update copyright text to French in Footer component ([1047589](https://github.com/Shuudy/disgame-client/commit/1047589cfd15b53e9efa74b9a97c3b6d42f26517))
* update forgot password link to use React Router's Link component ([ae9a1e8](https://github.com/Shuudy/disgame-client/commit/ae9a1e89dc3af1f716691006f947ff777bb2f7eb))

## [0.5.0](https://github.com/Shuudy/disgame-client/compare/v0.4.0...v0.5.0) (2025-04-20)

### Features

* add cta link in PopularGames component ([dd2486b](https://github.com/Shuudy/disgame-client/commit/dd2486bd394b2cd608c14d131dba3362427ac58a))
* add error logging for party fetching failure ([d6e7bf1](https://github.com/Shuudy/disgame-client/commit/d6e7bf1db34ad3fe806019a7dae330df9489c1f3))
* add Features component and integrate into Home page ([ed3d9b3](https://github.com/Shuudy/disgame-client/commit/ed3d9b3cb1b06e76967a69e2440ad6ad6729078f))
* add filtering options for party list by language and style ([3dd1ed2](https://github.com/Shuudy/disgame-client/commit/3dd1ed272c6669e3b3a280bda5e10ba86e88da12))
* add flex-wrap for features content layout ([cc046f7](https://github.com/Shuudy/disgame-client/commit/cc046f71bd7baaa08bbb02926f85d3f67da89f7e))
* add Footer component and integrate into Home page ([0e95e34](https://github.com/Shuudy/disgame-client/commit/0e95e344853e00848a80eb5f937a698d012525a1))
* add Hero component and integrate global styles ([a2eb3dd](https://github.com/Shuudy/disgame-client/commit/a2eb3ddf1cebbd80e3c3fb3a30453d81daec951a))
* add loading state and error handling for party fetching ([1e47329](https://github.com/Shuudy/disgame-client/commit/1e473298e7a1bfd3da4e6623adecf48928e56a5e))
* add main SCSS files and integrate global styles ([a1c5acf](https://github.com/Shuudy/disgame-client/commit/a1c5acf834ed92929068bee7abc3bdbb253bd709))
* add PopularGames component and integrate into Home page ([0712fff](https://github.com/Shuudy/disgame-client/commit/0712fffb55ac55f95852b9ca4204143041e962e1))
* add Promo component and integrate into Home page ([2f1462e](https://github.com/Shuudy/disgame-client/commit/2f1462e64eca160a207efaccceb2300fabc7e4cf))
* add PropTypes validation to FeaturesItem and PopularGamesCard components ([43a557e](https://github.com/Shuudy/disgame-client/commit/43a557e0345d895297fb8752b8ab80028087360a))
* add SVG assets for features section ([40ada57](https://github.com/Shuudy/disgame-client/commit/40ada575f37ce399a55521c0644c72a6786b7961))
* add timestamp to messages in PartyChat component ([322ce39](https://github.com/Shuudy/disgame-client/commit/322ce3907b0d62f1a8c114f4f335acd7d38b21db))
* enhance footer layout with responsive design adjustments ([6a6febf](https://github.com/Shuudy/disgame-client/commit/6a6febf500b7c6e368fb7e270565d2ea3397dab0))
* enhance party list display with additional details ([4ce830a](https://github.com/Shuudy/disgame-client/commit/4ce830ab987f287b3f9adda44092ec3a3cd0338c))
* implement navbar component and update Home page layout ([5d2cd3b](https://github.com/Shuudy/disgame-client/commit/5d2cd3b209e76439b08f0e0f6d861b5b42ed49c0))
* replace anchor tags with Link components in Navbar for routing ([af74c19](https://github.com/Shuudy/disgame-client/commit/af74c19eaa4da3cde1c74b14b3794025e06177a4))
* update promo section styles for improved layout and responsiveness ([8a94f2f](https://github.com/Shuudy/disgame-client/commit/8a94f2f125c5729a42c8dea1369f63ba802949c3))

### Bug Fixes

* add media query for footer list alignment on small screens ([a3fad45](https://github.com/Shuudy/disgame-client/commit/a3fad45e33406a70510d19e0fcb7d0b61aa3ae9f))
* add media query for subtitle layout on small screens ([d64a85d](https://github.com/Shuudy/disgame-client/commit/d64a85d341bbb9a427f2378a40ee701f0cf2131b))
* add row-gap to features content for improved spacing ([57a8ca3](https://github.com/Shuudy/disgame-client/commit/57a8ca37b527ff8d65af52bae019c786beca075b))
* adjust bottom margin for promo section ([ccbaa60](https://github.com/Shuudy/disgame-client/commit/ccbaa6081d9f5291f6a440117fb1320bcffe5cd5))
* adjust flex properties for hero content on small screens ([a5f38c7](https://github.com/Shuudy/disgame-client/commit/a5f38c7449e4b8483102b533dfd87da177d36ae4))
* adjust gap and remove justify-content for populargames content layout ([2153557](https://github.com/Shuudy/disgame-client/commit/2153557171be590b5de02c0136f4657f759c67c4))
* adjust hero illustration dimensions for better responsiveness ([d862ed3](https://github.com/Shuudy/disgame-client/commit/d862ed3bfb5337dd9dc80a2679d7f16ef6d33c4e))
* adjust padding for promo content on small screens ([94a83b3](https://github.com/Shuudy/disgame-client/commit/94a83b32ac10d8176c093528e0e37aee79fa7d25))
* correct padding values for footer container ([3fe3bed](https://github.com/Shuudy/disgame-client/commit/3fe3bed1316dbcf0c6658fbe9ebc956b957733d8))
* ensure illustration is displayed as flex for consistent layout ([fc14762](https://github.com/Shuudy/disgame-client/commit/fc1476258666215e5dcae8100952167f239d57d6))
## [0.4.0](https://github.com/Shuudy/disgame-server/compare/v0.3.0...v0.4.0) (2025-04-07)

### Features
- added player list display and update functionality in PartyChat. [(#19)](https://github.com/Shuudy/disgame-client/pull/19)

### Bug Fixes
- updated o2switch-whitelisting version in CI/CD pipeline. ([(#22)](https://github.com/Shuudy/disgame-client/pull/22))
- fixed party creation fields and redirect to party list. ([#20](https://github.com/Shuudy/disgame-client/pull/20))

## [0.3.0](https://github.com/Shuudy/disgame-server/compare/v0.2.0...v0.3.0) (2025-04-05)

### Features

* **ci/cd:** rename Node.js CI workflow to Node.js CI/CD ([#16](https://github.com/Shuudy/disgame-server/issues/16))
* add prettier format ([#15](https://github.com/Shuudy/disgame-server/issues/15))
* **chat:** add handling for previous messages in PartyChat component ([#14](https://github.com/Shuudy/disgame-server/issues/14))
* change the main title ([#13](https://github.com/Shuudy/disgame-server/issues/13))

## 0.2.0 (2025-04-03)

### Features

* add NotFound component and route for undefined paths ([#6](https://github.com/Shuudy/disgame-client/issues/6)) ([e2ec214](https://github.com/Shuudy/disgame-client/commit/e2ec2143adea1fb51268356657e1bbbe2e449883))
* add Parties component and integrate with Games component ([#5](https://github.com/Shuudy/disgame-client/issues/5)) ([837190b](https://github.com/Shuudy/disgame-client/commit/837190b3b757ec107016be55caacb30eba6ca75a))
* add socket.io implementation ([#8](https://github.com/Shuudy/disgame-client/issues/8)) ([ea69ae1](https://github.com/Shuudy/disgame-client/commit/ea69ae19a712f6f25c71ffe5503e42d21fa87342))
* **auth:** add authentication flow and context handling ([#1](https://github.com/Shuudy/disgame-client/issues/1)) ([290f81f](https://github.com/Shuudy/disgame-client/commit/290f81f17e060c70c1e3c8a23f0be86ea9c7a37f))
* **game:** add party creation feature with new CreateParty component ([#9](https://github.com/Shuudy/disgame-client/issues/9)) ([57f7aaa](https://github.com/Shuudy/disgame-client/commit/57f7aaa819f19efc9e1ddcf9e474622cd06cee0e))
* **register:** implement user registration ([#7](https://github.com/Shuudy/disgame-client/issues/7)) ([b04ca0a](https://github.com/Shuudy/disgame-client/commit/b04ca0a4e5fa4168aca2ca744c0b1634a2f391a9))

### Bug Fixes

* **htaccess:** serve index.html for non-file requests ([#3](https://github.com/Shuudy/disgame-client/issues/3)) ([2e1c3d1](https://github.com/Shuudy/disgame-client/commit/2e1c3d1a9e5fc78db2ad03598e890a66a6442dbe))
## 0.1.1 (2025-03-13)

### Bug Fixes

* **htaccess:** serve index.html for non-file requests ([#3](https://github.com/Shuudy/disgame-client/issues/3)) ([2e1c3d1](https://github.com/Shuudy/disgame-client/commit/2e1c3d1a9e5fc78db2ad03598e890a66a6442dbe))