import { defineModule } from "./modules/core/utils/module";

export const HOME = defineModule(0, 'home', 'Home', '/', () => import(/* webpackChunkName: "home" */ 'modules/home/index'));

export const PROJECTS = defineModule(1, 'projects', 'Projects', '/projects', () => import(/* webpackChunkName: "projects" */ 'modules/projects/index'));

export const PUBLICATIONS = defineModule(2, 'publications', 'Publications', '/publications', () => import(/* webpackChunkName: "publications" */ 'modules/publications/index'));

export const CONTACT = defineModule(3, 'contact', 'Contact', '/contact', () => import(/* webpackChunkName: "contact" */ 'modules/contact/index'));

export const ABOUT = defineModule(4, 'about', 'About', '/about', () => import(/* webpackChunkName: "about" */ 'modules/about/index'));

