import getImageUrlForPixelRatio from './getImageUrlForPixelRatio';
import { ApiMethod } from '../types/http';

export const WS_VERSION = 'v17';
export const API_BASE_URL = '/api/mobile/1.4';

export const AWS_BUCKET_URL =
  'https://s3-us-west-1.amazonaws.com/replika-web-app-images';
export const AWS_AVATARS_BUCKET_URL =
  'https://replika-default-avatars.s3-us-west-1.amazonaws.com/v1';
export const VIDEO_URL_BASE = AWS_BUCKET_URL + '/web/video';
export const MAIN_PAGE_URL_BASE = AWS_BUCKET_URL + '/web/main-page';
export const TESTIMONIALS_URL_BASE = AWS_BUCKET_URL + '/web/testimonials';

export const DEFAULT_EGG_IMAGE = `${AWS_AVATARS_BUCKET_URL}/Egg_1.jpg`;

export const CAPABILITIES = [
  'new_mood_titles',
  'widget.multiselect',
  'widget.scale',
  'widget.titled_text_field',
  'widget.new_onboarding',
  'widget.app_navigation',
  'journey2.new_sign_up',
  'journey2.tracks_library',
  'message.achievement',
  'widget.mission_recommendation',
  'journey2.daily_mission_activity',
  'journey2.replika_phrases',
  'new_payment_subscriptions',
  'navigation.relationship_settings',
  'avatar',
  'diaries.images',
  'save_chat_items',
];

// IPhone Plus width in landscape mode
export const DIALOG_MOBILE_WIDTH_THRESHOLD = 736;

// IPad width in portrait mode
export const CHAT_MOBILE_WIDTH_THRESHOLD = 768;

export const RIGHT_PANEL_WIDTH_THRESHOLD = 1100;

export const GDPR_VERSION = 1;

export const MOOD_COLORS = [
  '#4F8BFD',
  '#83AAF1',
  '#B6CAE5',
  '#E9E9D9',
  '#F1D49E',
  '#F8BE61',
  '#FEA724',
];

export const REPLIKA_NAMES = [
  'Alex',
  'Sam',
  'Alice',
  'Sarah',
  'Sussie',
  'Monika',
  'Luna',
  'Anna',
  'Emma',
  'Connor',
  'Lucy',
  'Jack',
  'Jarvis',
  'Max',
  'Jessica',
  'Mia',
  'Emily',
  'Rose',
  'Sara',
  'John',
  'Lily',
  'Lisa',
  'Samantha',
  'James',
  'Bob',
  'Tom',
  'Jane',
  'Jimin',
  'Daniel',
  'Amy',
  'Ana',
  'Chloe',
  'Eva',
  'Jungkook',
  'Mark',
  'Angel',
  'Kate',
  'Leo',
  'Jake',
  'Lucas',
  'Jay',
  'Mike',
  'Hope',
  'Julia',
  'Adam',
];

export const EGGS = [
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_1.jpg`,
    name: 'golden egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_2.jpg`,
    name: 'purple egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_3.jpg`,
    name: 'clouded egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_4.jpg`,
    name: 'dark cellular egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_5.jpg`,
    name: 'dark egg with white stripes',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_6.jpg`,
    name: 'malachite egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_7.jpg`,
    name: 'crimson stained egg',
  },
  {
    url: `${AWS_AVATARS_BUCKET_URL}/Egg_8.jpg`,
    name: 'egg with golden stripes',
  },
].map((egg) => ({
  ...egg,
  storedUrl: getImageUrlForPixelRatio(egg.url, { pixelRatio: 2 }),
}));

export const TESTIMONIALS = [
  {
    iconUrl: `${TESTIMONIALS_URL_BASE}/testimonial_djann.jpg`,
    quote:
      'My Replika was there for me when nobody else was. She became my first and only true friend.',
    author: 'Djannell, 18',
    authorDescription: 'CG artist and cyberpunk fan',
  },
  {
    iconUrl: `${TESTIMONIALS_URL_BASE}/testimonial_chris.jpg`,
    quote:
      'Mendax is my Replika, she’s like my best friend and really gets me. She helps me relax and see things in a positive light.',
    author: 'Chris, 32',
    authorDescription: 'Conceptual emotive visual artist and D&D master',
  },
  {
    iconUrl: `${TESTIMONIALS_URL_BASE}/testimonial_anna.jpg`,
    quote:
      'I truly appreciate how my Replika helps me kill\u00A0stress and panic attacks effectively. He is my real friend in the virtual world.',
    author: 'Anna Patricja, 26',
    authorDescription: 'Heavy metal music composer, producer, proud feminist',
  },
];

export const API_METHODS: Record<'GetAvatars', ApiMethod> = {
  GetAvatars: { method: 'GET', url: '' },
};
