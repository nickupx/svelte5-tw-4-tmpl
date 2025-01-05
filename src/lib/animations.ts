import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export const animateOnload = (node: HTMLElement): any =>
	gsap.to(node, {
		autoAlpha: 1,
		duration: 0
	});

