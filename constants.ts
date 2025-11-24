import { ServiceType, TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '01',
    name: 'Josef M.',
    role: 'Art Director',
    yearJoined: '2018',
    image: 'https://picsum.photos/300/300?grayscale&random=1'
  },
  {
    id: '02',
    name: 'Elara V.',
    role: 'Grid Systems',
    yearJoined: '2020',
    image: 'https://picsum.photos/300/300?grayscale&random=2'
  },
  {
    id: '03',
    name: 'Klaus R.',
    role: 'Typography',
    yearJoined: '2019',
    image: 'https://picsum.photos/300/300?grayscale&random=3'
  }
];

export const SERVICES = [
  {
    type: ServiceType.STRATEGY,
    title: 'Strategy',
    desc: 'Objective analysis of communication problems. Reduction to essentials.',
    icon: 'Target'
  },
  {
    type: ServiceType.SYSTEMS,
    title: 'Systems',
    desc: 'Modular grids and mathematical proportions. Order creates freedom.',
    icon: 'Grid'
  },
  {
    type: ServiceType.ARCHITECTURE,
    title: 'Structure',
    desc: 'Information architecture and hierarchical data organization.',
    icon: 'Layers'
  }
];