// src/utils/skills.js
import html from '../assets/svg/skills/html.svg';
import css from '../assets/svg/skills/css.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import react from '../assets/svg/skills/react.svg';
import nextJS from '../assets/svg/skills/nextJS.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import postgresql from '../assets/svg/skills/postgresql.svg';
import git from '../assets/svg/skills/git.svg';
import aws from '../assets/svg/skills/aws.svg';
import bootstrap from '../assets/svg/skills/bootstrap.svg';
import docker from '../assets/svg/skills/docker.svg';
import figma from '../assets/svg/skills/figma.svg';
import firebase from '../assets/svg/skills/firebase.svg';
import materialui from '../assets/svg/skills/materialui.svg';

export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Next JS',
  'Tailwind',
  'MySQL',
  'PostgreSQL',
  'Git',
  'AWS',
  'Bootstrap',
  'Docker',
  'Figma',
  'Firebase',
  'MaterialUI'
  
];

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html': return html;
    case 'css': return css;
    case 'javascript': return javascript;
    case 'react': return react;
    case 'next js': return nextJS;
    case 'tailwind': return tailwind;
    case 'mysql': return mysql;
    case 'postgresql': return postgresql;
    case 'git': return git;
    case 'aws': return aws;
    case 'bootstrap': return bootstrap;
    case 'docker': return docker;
    case 'figma': return figma;
    case 'firebase': return firebase;
    case 'materialui': return materialui;
    default:
      return '';
  }
};
