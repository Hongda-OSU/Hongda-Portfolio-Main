"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[977],{9977:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});t(2791);var i=t(1523),a=t(6842),s=t(184),r=function(e){var n=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:n.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:n.link,children:n.school}),", ",n.year]})]})})},o=function(e){var n=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),n.map((function(e){return(0,s.jsx)(r,{data:e},e.school)}))]})};o.defaultProps={data:[]};var d=o,l=function(e){var n=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[0===n.link.length?(0,s.jsxs)("h4",{children:[n.title," - ",n.position]}):(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:n.link,children:n.title})," - ",n.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",n.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:n.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},c=function(e){var n=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),n.map((function(e){return(0,s.jsx)(l,{data:e},e.title)}))]})};c.defaultProps={data:[]};var u=c,m=function(e){fetch(e).then((function(n){n.blob().then((function(n){var t=window.URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.click()}))}))},h=function(){return(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsxs)("h3",{children:["Download My",(0,s.jsx)(i.rU,{to:"/resume",onClick:function(){return m("Resume.pdf")},children:" Resume "})," |",(0,s.jsx)(i.rU,{to:"/resume",onClick:function(){return m("Transcript.pdf")},children:" Transcript "})]})})]})},p=[{school:"The Ohio State University",degree:"Bachelor of Science in Computer Science and Engineering",link:"https://www.osu.edu/",year:2023}],g=[{title:"Buckeye Schedule",position:"Project Team Leader",link:"https://github.com/Hongda-OSU/CSE5236-Buckeye-Schedule",daterange:"September 2022 - PRESENT",points:["Worked on an Android application that helps college students remember their important schedules.","Applied MVVM design pattern and Room database for local data persistence and UI controls.","Utilized NoSQL database like Firestore to preserve user data on cloud."]},{title:"HireEZ",position:"Full Stack Engineer Intern",link:"https://hireez.com/",daterange:"May 2022 - August 2022",points:["Helped build the Event Tracking System for BI team to analyze user preference and activities within the site using TypeScript.","Developed a Jira tickets automation webapp for BI teams to automate the process of creating tickets at one go using ReactJS.","Designed an automation testing framework for Web testing on the new tracking system using Python and Playwright.","Worked on daily business data collection and website maintenance."]},{title:"VR/AR Vulnerability Analysis",position:"Research Volunteer",link:"",daterange:"January 2022 - May 2022",points:["Analyzed different cloned games, ripped game assets and third-party plug-ins on Android Market using AssetStudio.","Implemented a VR shooting game for vulnerability testing under Oculus device and OBS studio."]},{title:"Karma",position:"Capstone Team Leader",link:"https://polygamers.itch.io/karma",daterange:"January 2022 - May 2022",points:["Lead senior capstone game development team in creating an FPS & ARPG game using Unity.","Designated as scrum master, communicated bi-weekly progress through Timebox presentation.","Implemented original FPS system, Inventory system, Player control, Enemy AI, and Animation system.","Awarded as \u201cThe Best Game\u201d and \u201cThe Most Polished Game\u201d out of 7 class teams by the semester capstone showcase voting."]},{title:"Minecraft (Clone)",position:"Individual Project",link:"https://github.com/Hongda-OSU/CraftMine",daterange:"November 2021 - December 2021",points:["Learned to build a voxel-based world like Minecraft.","Combined 3D Properties, Texture Mapping, Perlin Noise and Data Serialization for world generation .","Implemented the basic player interactions including navigation and building system."]},{title:"Endless Runner",position:"Project Team Leader",link:"https://github.com/Hongda-OSU/CSE3541-Endless-Runner",daterange:"November 2021 - December 2021",points:["Designed an infinite running game using Unity.","Utilized Unity New Input System, Animator and Cinemachine for better gameplay experience.","Coded level generation including environmental change and obstacle placement."]},{title:"Legend of Zelda 1986 (Clone)",position:"Project Team Member",link:"https://github.com/Hongda-OSU/CSE-3902-Team-JellyLake-Zelda-",daterange:"August 2021 - December 2021",points:["Restored the complete Level 1 dungeon of classic game Legend of Zelda 1986.","Utilized state pattern, decorator pattern, and singleton pattern to design different enemies and player abilities.","Programmed a procedural generated dungeon to improve the playability of the game."]},{title:"Buckeye Resale",position:"Project Team Leader",link:"",daterange:"June 2021 - July 2021",points:["Designed an online resale website for college students to trade old furniture.","Implemented shopping interface, user interface and shopping cart using Ruby on Rails and SQLite.","Built user registration and online payment platform using Devise and Stripe."]}],f=["Education","Experience","References"],x=function(){return(0,s.jsx)(a.Z,{title:"Resume",description:"Learn about Hongda Lin's Resume.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:f.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(d,{data:p}),(0,s.jsx)(u,{data:g}),(0,s.jsx)(h,{})]})})}}}]);
//# sourceMappingURL=977.8dad01e0.chunk.js.map