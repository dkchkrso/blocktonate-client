### BLOCKTONATE

#### Description of the project

BLOCKTONATE is an online platform that directly connect donations to the individual refugee through the use of blockchain technology. A donator can browse through refugees and chose whom to support. After selection the donator can connect to his/her MetaMask wallet and transfer crypto currency directly to the selected refugees wallet.  

#### Screenshot

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot1.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot2.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot5.jpg)

![screenshot of the app](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/Screenshot8.jpg)

#### Wireframes

Initial wirefram defining the structure and layout of the pages .

- Landing page after authentication
  ![Wireframe landingpage](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe1.jpg)
- Requesting new donation
  ![Wireframe if logged in](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe2.jpg)
- Profile info
  ![Wireframe user page](https://github.com/dkchkrso/blocktonate-client/blob/master/public/images/wireframe3.jpg)

#### User Stories

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


#### Technologies Used

:computer:

- ReactJS
- NodeJS
- Express
- MongoDB Atlas & Mongoose
- Heroku
- Netlify
- React Bootstrap

#### Models


##### User Model

Pre-generated with ironlauncher and enhanced\

Properties:

- email: { type: String, unique: true, required: true },
- password: { type: String, required: true },
- name: { type: String, required: true },
- isAdmin: { type: Boolean, default: false },
- profilePic: { type: String },
- supported: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
- supporterFav: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
- contributed: { type: Number },
- nfts: [{ type: Schema.Types.ObjectId, ref: "NFT" }],

##### Receiver Model

Properties:\

- name: String,
- description: String,
- walletAddress: String,
- askingAmount: Number,
- receivedAmount: Number,
- currency: String,
- imageURL: String,

##### NFT Model

Properties:\

- name, { type: String },
- image: String,
- owner: { type: Schema.Types.ObjectId, ref: "User" },

const NFTSchema = new Schema({
  title: String,
  description: String,
  imageURL: String,
  users: { type: Schema.Types.ObjectId, ref: "User" },
});


#### Server routes table(Method, Route or URL, Description as columns)

xxxx To be adjusted xxxx

|     | route               | description                                                                                                                      |     |
| --- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --- |
|     | ---auth---          | -------------------------------------------------------------------------------------------------------------------------------- |     |
|     | /signup             | get and post for showing the form and to signup                                                                                  |     |
|     | /login              | get and post for showing the form and to login                                                                                   |     |
|     | /logout             | logout and redirect to homepage                                                                                                  |     |
|     | /details            | get user details and show its asset, render auth/user-detail                                                                     |     |
|     | ---nft---           | -------------------------------------------------------------------------------------------------------------------------------- |     |
|     | /create             | get and post for creating a new nft redirect to nft/create and index                                                             |     |
|     | /nfts/:nftId/edit   | get nft by id and edit it with post                                                                                              |     |
|     | /nfts/:nftId/delete | post to delete an nft by id                                                                                                      |     |
|     | /nfts/:nftId/buy    | post, validate if can afford and if token is not alrady of the user, then change owner and subtract token from buyer and seller  |     |
|     | ---index---         | -------------------------------------------------------------------------------------------------------------------------------- |     |
|     | /                   | get all the nfts and render index                                                                                                |     |

#### Project Link

Link to webpage

#### Future Work

:wrench:

- Work1  
- Work2

:wrench:

#### Resources

- Bootstrap templates for divs and cards structure
- Ironlauncher npm package - for generating the structure of the project and for handling authorization
- ether npm package for connecting to MetaMask wallet
- 

#### Team members

Christian

#### This is a learning project, if anything needs to be removed please reach out and it will be removed right away.