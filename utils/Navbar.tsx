import NavItem from './NavItem';
import { FaBug, FaCog, FaUserAlt, FaVideo, FaVolumeUp } from 'react-icons/fa';
import { BiCube } from 'react-icons/bi';
import { GoSettings } from 'react-icons/go';
import { MdFeedback } from 'react-icons/md';

export const CenteredNavItems: NavItem[] = [
  {
    label: 'Video',
    icon: <FaVideo />,
    href: 'video',
  },
  {
    label: 'Audio',
    icon: <FaVolumeUp />,
    href: 'audio',
  },
  {
    label: 'Mixer',
    icon: <GoSettings />,
    href: 'mixer',
  },
  {
    label: '3D Sound',
    icon: <BiCube />,
    href: 'room',
  },
];

export const LowerNavItems: NavItem[] = [
  {
    label: 'Fehler melden',
    icon: <FaBug />,
    href: 'bug',
  },
];

export const AppBarItems: NavItem[] = [
  {
    label: 'Profil bearbeiten',
    icon: <FaUserAlt />,
    href: 'profile',
  },
  {
    label: 'Einstellungen ändern',
    icon: <FaCog />,
    href: 'video',
  },
  {
    label: 'Feedback geben',
    icon: <MdFeedback />,
    href: 'feedback',
  },
];

export const SettingsModalItems: NavItem[] = [
  {
    label: 'Video',
    icon: <FaVideo />,
    href: 'video',
  },
  {
    label: 'Audio',
    icon: <FaVolumeUp />,
    href: 'audio',
  },
  {
    label: 'Profil',
    icon: <FaUserAlt />,
    href: 'profile',
  },
];
