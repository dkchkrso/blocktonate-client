### BLOCKTONATE

#### Description of the project

xxx

#### Screenshot

![screenshot of the app](https://github.com/ElisaMamolo/the-ocean/blob/master/public/images/screnshoot.PNG)

#### Wireframes

Before starting developing we have defined a initial structure of our pages and we have defined a set of MVP functionalities.

- Landing page wireframe
  ![Wireframe landingpage](https://github.com/ElisaMamolo/the-ocean/blob/master/public/images/landingpage.PNG)
- Landing page wireframe if logged in
  ![Wireframe if logged in](https://github.com/ElisaMamolo/the-ocean/blob/master/public/images/wireframe2.PNG)
- User page wireframe
  ![Wireframe user page](https://github.com/ElisaMamolo/the-ocean/blob/master/public/images/wireframe3.PNG)

#### User Stories

- As a user visiting BLOCKTONATE I would like to view all the receivers

- As a user visiting BLOCKTONATE I would view more details on a selected receiver

- As a user visiting BLOCKTONATE I would like to be able to Signup

- As a user visiting BLOCKTONATE I would like to be able to Login

- As a user visiting BLOCKTONATE I would like to be able to see my profile details

- As an Admin user I would like to be able to add receivers

- As an Admin user I would like to be able to delete receivers

- As an Admin user I would like to be able to edit NFT receivers

#### Technologies Used

:computer:

- React
- Express
- MongoDB & Mongoose
- Heroku - app deployment
- Bootstrap

#### Models

xxxx To be adjusted xxxx


There are 2 types of users, admin and normal users.\
Admin can create, edit and delete receivers\
User can donate to a receiver and create a request for donation 

##### User Model

Pregenerated with ironlauncher and enhanced\
Properties:

- username: { type: String, required: true, unique: true,},
- password: String,
- isAdmin: { type: Boolean, default: false },
- Badges: [{ type: Schema.Types.ObjectId, ref: "Badge" }],

##### Badge Model

Properties:\

- name, { type: String },
- image: String,
- owner: { type: Schema.Types.ObjectId, ref: "User" },

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