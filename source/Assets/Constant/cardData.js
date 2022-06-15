import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faTextHeight} from '@fortawesome/free-solid-svg-icons';
import {faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTengeSign} from '@fortawesome/free-solid-svg-icons';
import {faIcons} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import {faMobileAndroidAlt} from '@fortawesome/free-solid-svg-icons';
import {faStoreAltSlash} from '@fortawesome/free-solid-svg-icons';
const leftCardHeight = 180;
const cardWidth = 180;
const rightCardHeight = 190;
export const leftCardData = [
  {
    height: leftCardHeight,
    width: cardWidth,
    background: 'red',
    title: 'Text',
    icon: faTextHeight,
  },
  {
    height: leftCardHeight,
    width: cardWidth,
    background: 'blue',
    title: 'Avatar',
    icon: faPerson,
  },
  {
    height: leftCardHeight,
    width: cardWidth,
    background: 'orange',
    title: 'Alert',
    icon: faBell,
  },
  {
    height: leftCardHeight,
    width: cardWidth,
    background: 'grey',
    title: 'Input',
    icon: faTengeSign,
  },
  {
    height: leftCardHeight,
    width: cardWidth,
    background: 'blue',
    title: 'Image',
    icon: faImage,
  },
  {
    height: leftCardHeight,
    width: cardWidth,
    background: '#5f9ea0',
    title: 'Textarea',
    icon: faStoreAltSlash,
  },
];

export const rightCardData = [
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'purple',
    title: 'Button',
    icon: faMobileScreenButton,
  },
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'green',
    title: 'Flatlist',
    icon: faList,
  },
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'pink',
    title: 'Checkbox',
    icon: faCheck,
  },
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'saddlebrown',
    title: 'Icon',
    icon: faIcons,
  },
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'cornflowerblue',
    title: 'Modal',
    icon: faMobileAndroidAlt,
  },
  {
    height: rightCardHeight,
    width: cardWidth,
    background: 'darkcyan',
    title: 'Toast',
    icon: faMugSaucer,
  },
];
