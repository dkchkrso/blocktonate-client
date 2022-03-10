# BLOCKTONATE

## Description of the project

BLOCKTONATE is an online platform that directly connect donations to the individual refugee through the use of blockchain technology. A donator can browse through refugees and chose whom to support. After selection the donator can connect to his/her MetaMask wallet and transfer crypto currency directly to the selected refugees wallet.  

## Screenshot

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot1.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot2.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot5.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot8.jpg)

## Wireframes

Initial wirefram defining the structure and layout of the pages .

- Landing page after authentication
  ![Wireframe landingpage](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe1.jpg)
- Requesting new donation
  ![Wireframe if logged in](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe2.jpg)
- Profile info
  ![Wireframe user page](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe3.jpg)

## User Stories

- As a user visiting BLOCKTONATE I would like to be able to Signup

- As a user visiting BLOCKTONATE I would like to be able to Login

- As a user visiting BLOCKTONATE I would like to be able to Sign out

- As a user visiting BLOCKTONATE I would like to view all the refugees

- As a user visiting BLOCKTONATE I would view more details on a selected refugees

- As a user visiting BLOCKTONATE I would like to be able to see my profile details

- As a user visiting BLOCKTONATE I would like to be able to add a new request for donation

- As a user visiting BLOCKTONATE I would like to be able to delete my existing requests

- As a user visiting BLOCKTONATE I would like to be able to edit NFT receivers

- As a user visiting BLOCKTONATE I would like to be able to connect to my MetaMask wallet

- As a user visiting BLOCKTONATE I would like to be able to transfer crypto currency to the selected refugees crypto wallet

- As a user visiting BLOCKTONATE I would like to be able to see the transaction on Etherscan

# Frontend/Client

## React Router Routes

| Path                 | Component          | Permissions                            | Behavior                                                         |
| -------------------- | ---------------    | -------------------------------------- | ---------------------------------------------------------------- |
| `/`                  | HomePage           | public                                 | Homepage                                                         |
| `*`                  | 404                | public                                 | Custom 404 message                                               |
| `/about`             | AboutPage          | anonymous user only `<isAnon>`         | About BLOCKTONATE                                                |
| `/login`             | LoginPage          | anonymous user only `<isAnon>`         | Login form navigates to the home page after login.               |
| `/signup`            | SignupPage         | anonymous user only `<isAnon>`         | Signup form navigates to the login page after signup.            |
| `/receivers`         | ReceiverListPage   | authenticated user only `<IsPrivate> ` | List all receivers in database                                   |
| `/receivers/:id`     | ReceiverDetailsPage| authenticated user only `<IsPrivate> ` | Receiver details for specific receiver                           |
| `/receivers/edit/:id`| EditReceiverPage   | authenticated user only `<IsPrivate> ` | Form to edit a new request for donation                          |
| `/request`           | AddReceiverPage    | authenticated user only `<IsPrivate> ` | Form to request a new donation                                   |
| `/profile`           | ProfilePage        | authenticated user only `<IsPrivate> ` | user profiles info.                                              |

## Components

### Pages
- AboutPage
- AddReceiverPage
- EditReceiverPage
- ErrorPage
- HomePage
- LoginPage
- ProfilePage
- ReceiverDetailsPage
- ReceiverListPage
- SignupPage
- StartPaymentPage

### Components
- AddReceiver
- ErrorMessage
- FooterBar
- IsAnon
- IsPrivate
- NavBar
- ReceiverListHome
- SearchBar
- StartPayment
- TxList
- WalletCard

# Backend/Server

## Models

### User Model

Properties:\

- email: { type: String, unique: true, required: true },
- password: { type: String, required: true },
- name: { type: String, required: true },
- isAdmin: { type: Boolean, default: false },
- profilePic: { type: String },
- supported: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
- supporterFav: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
- contributed: { type: Number },
- nfts: [{ type: Schema.Types.ObjectId, ref: "NFT" }],

### Receiver Model

Properties:\

name: { type: String, required: true },
- description: { type: String },
- walletAddress: { type: String },
- askingAmount: { type: Number, required: true },
- receivedAmount: { type: Number },
- currency: { type: String, required: true },
- imageURL: { type: String },

### NFT Model

Properties:\

- title: { type: String, unique: true, required: true },
- description: { type: String },
- imageURL: { type: String },
- users: { type: Schema.Types.ObjectId, ref: "User" },
    

## API Endpoints (backend routes)
| HTTP Method | URL                          | Request body                                                                            |   Description     |
| ----------- | ---------------------------- | --------------                                                                          |  ---------------- |
| GET         | ´/api´                       |                                                                                         | Retrieves all of the receivers
| POST        | ´/auth/signup´               |  `{email, password, name}`                                                              | Creates a new user in the database
| POST        | ´/auth/login´                |  `{email, password}`                                                                    | Verifies email and password and returns a JWT
| GET         | ´/auth/verify´               |                                                                                         | Used to verify JWT stored on the client
| GET         | ´/api/receivers´             |                                                                                         | Retrieves all of the receivers
| POST        | ´/api/receiver´              |  `{ name, description, walletAddress, askingAmount, receivedAmount, currency, imageURL}`| Creates a new receiver
| GET         | ´/api/receivers/:receiverId´ |                                                                                         | Retrieves a specific receiver by id 
| PUT         | ´/api/receivers/:receiverId´ |  `{ name, description, walletAddress, askingAmount, receivedAmount, currency, imageURL}`| Updates a specific receiver by id
| DELETE      | ´/api/receivers/:receiverId´ |                                                                                         | Deletes a specific receiver by id
| GET         | ´/api/nft´                   |                                                                                         | Retrieves all of the nfts
| POST        | ´/api/nft´                   |                                                                                         | Creates a new nft
| GET         | ´/api/nft/:nftId´            |                                                                                         | Retrieves a specific nft by id
| PUT         | ´/api/nfts/:nftId´           |  `{title, description, imageURL}`                                                       | Updates a specific nft by id
| DELETE      | ´/api/nfts/:nftId´           |                                                                                         | Deletes a specific nft by id
                           

## Future Work

:wrench:

- Enhance Profile Info page (Receiver backed by user and favorites func.)  
- Enhance NFT functionality
- Enrich NFT rewarding system
- Implement search bar
- Implement filter toggles
- Implement categories in forms
- Implement light/dark theme

:wrench:

## Technologies Used

:computer:

- ReactJS
- NodeJS
- Express
- MongoDB Atlas & Mongoose
- Heroku
- Netlify
- React Bootstrap

## Links

[Client repository Link](https://github.com/dkchkrso/blocktonate-client)

[Server repository Link](https://github.com/dkchkrso/blocktonate-server)

[Deployed Link](https://blocktonate.netlify.app/)


## Team members

Christian

### This is a learning project, if anything needs to be removed please reach out and it will be removed right away.