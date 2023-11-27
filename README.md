# marcellui portfolio + ai chat bot project


## Overview

A portfolio app for myself that has my resume and previous projects and experiences.
under the projects tab there will be an ai chatbot where when you send a message it gives a personalized response potentially based on what I would say

### Problem

app is needed for an interactive portfolio for myself to give to employers and prospective individuals who are interested in myself. Interactive porfolio with an AI chat feature would be useful because it allows for employers and individuals with questions about me to be answered without me being online or wait for a response via email.

### User Profile

employers and other individuals interested in me will use this app. they will use it to view my about me and projects and resume.  there are no special considerations that must be taken into account

### Features

home page with a nav bar with the tabs (home/about/projects/resume).
the home page has a quick intro about me.
the about page has a detailed writeup about me.
the projects page has a list of projects completed by me, and you can click into each project to view it in more detail.
the resume page has my resume.
the marcel ai page has an ai that gives personalized responses based off what I would say. 

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React
Node 
Express
Knex
Cors
Open AI

### APIs
https://platform.openai.com/docs/quickstart?context=node

### Sitemap
the home page has a quick intro about me.
the about page has a detailed writeup about me.
the projects page has a list of projects completed by me, and you can click into each project to view it in more detail.
the resume page has my resume.
the marcel ai page has an ai chat bot that gives personalized responses.
 

### Mockups

https://www.figma.com/file/fK4m58FE0wzLaRYeVDCFju/Mockup-Capstone?type=design&node-id=0%3A1&mode=design&t=vKIE6l6FzyO9tZeQ-1

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

projects object, with id, project name, repo link, and description.

### Endpoints

/get returns all the projects stored in the backend


### Auth

none

## Roadmap

Nov 14 Finish Proposal.
Nov 15/16 Finish Front End.
Nov 17 Start building AI Chat bot - connect API to js.
Nov 18-Nov 21 Finish AI Chat Bot.
Nov 22 build server.
Nov 23 - 25 deployment.


## Nice-to-haves

blog feature where i can post blogs 
socket io to live chat with employer
login feature for users
