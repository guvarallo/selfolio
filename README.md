<p align="center">
  <img src="public/favicon.ico" width="30" />
</p>
<h1 align="center">Selfolio</h1>
<br/>
<br/>

<div align="center">
  
[![GitHub](https://img.shields.io/github/license/cobidev/simplefolio?color=009387)](https://github.com/cobidev/simplefolio/blob/master/LICENSE.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/91be6d51-ba25-46e9-9844-dca148c6e0ba/deploy-status)](https://app.netlify.com/sites/selfolio/deploys)

</div>

<h3 align="center">A simple web portfolio made for devs</h3>

<div align="center">
  
Check it out live by **[clicking here](https://selfolio.netlify.app/)**.  
You can also check my own website as a variation of this template **[varallo.me](https://www.varallo.me/)**.

</div>

<div align="center">

![Selfolio Demo](src/assets/demo.gif)

</div>

## Features
<ul>
  <li>Single page app</li>
  <li>Easy to change data & colors</li>
  <li>Lightweight with minimum dependecies</li>
  <li>Built from scratch entirely with React & TypeScript</li>
  <li>Fully responsive - built in pure CSS with Styled Components</li>
</ul>

## Instalation
Clone this repository, then:

```
npm install

npm start
```

## Usage
This template was built with full separation of concerns, so you barely have to
touch the rest of the code.

All you need to do to change the texts and colors is open the data.ts file, found at
**src/source/data.ts**. In this file you have the following fields:

### Profile Picture
```
import profilePicture from '../assets/profile.png';
```
Simply add your own picture in the **src/assets** and remove the default one.  
IMPORTANT: Name your picture as **profile.png** like the above example.

### Projects Pictures
```
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
```
Likewise, just add your own project pictures in the **src/assets** and remove the default ones.  
IMPORTANT: Name your pictures as **project1.png**, **project2.png** and so on.

### Colors
```
first: '#232122',
second: '#b3c100',
third: '#4cb5f5',
fourth: '#dddede',
```
Pretty simple as well - be creative! Do not delete any key here.

### Head Data
```
title: 'Name | Web developer',
description: 'Welcome to my website'
```
Title is what will appear in the browser's tab, and below is just a meta tag 
description.

### Main Data
```
title: 'Hi, my name is ',
name: 'Full Name',
subtitle: 'I am a web developer',
cta: 'Know more',
```
The 'cta' key is the 'call to action' button, so you can change its text.

### About Data
```
sectionTitle: 'About',
img: { src: profilePicture },
p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit 
vehicula lectus. Suspendisse potenti. Ut eget odio eget dolor maximus pharetra 
eu a risus. Cras elit leo, commodo nec risus in.`,
p2: `Vivamus nec mattis eros, eget gravida mauris. Nam a turpis vel dui fermentum 
ultrices. Mauris nec lorem ut nulla placerat bibendum quis et tortor. Phasellus 
ac pellentesque leo. Donec eu lorem vehicula, ultrices enim ut, convallis nibh. 
Sed blandit ultricies leo, vel porta ante suscipit a.`,
p3: `Integer velit nulla, imperdiet suscipit dui non, sodales tincidunt odio. 
In hac habitasse platea dictumst. Cras ornare feugiat odio, at pharetra ante 
elementum sit amet. In aliquet purus ut mauris auctor, quis commodo libero 
dignissim. In tristique mi ut mi vulputate convallis.`,
```
This section was built to have maximum 3 paragraphs on purpose. Be concise to talk
about yourself is an important skill =) If you want less, just leave as an empty string, but do not delete the key.

### Project Data
```
{
  title: 'Project 1',
  description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
  description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
  gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
  scelerisque magna sit amet ex condimentum varius.`,
  liveUrl: 'https://selfolio.netlify.app/',
  liveButtonText: 'See it live',
  sourceUrl: 'https://github.com/guvarallo/selfolio',
  sourceText: 'Source Code',
  img: { src: project1 },
},
```
You will notice that this is an array of objects. If you want to display more projects, just keep copying and pasting more objects followed by a comma - just 
don't forget to add the project's picture in the assets folder and update the img field correctly.

### Contact Data
```
title: 'Contact',
description: 'Send me an e-mail!',
mailTo: 'mailto:gustavo@varallo.me',
```
Update accordingly.

### Footer Data
```
githubUrl: 'https://github.com/guvarallo',
linkedinUrl: 'https://www.linkedin.com/in/gustavovarallo/',
```
Update accordingly so the icons link correctly to your accounts.

## Special Thanks
Although this template was built from scratch, it was completely inspired in the
portfolio made by [Jacobo Martínez](https://github.com/cobidev). Please check
his profile and give him some love as well.

## License
[MIT License](LICENSE)
