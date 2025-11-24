export enum ServiceType {
  STRATEGY = 'STRATEGIC_DESIGN',
  SYSTEMS = 'VISUAL_SYSTEMS',
  ARCHITECTURE = 'INFORMATION_ARCHITECTURE'
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  yearJoined: string;
  image: string;
}

export interface LogMessage {
  id: string;
  text: string;
  sender: 'USER' | 'SYSTEM';
  timestamp: number;
}