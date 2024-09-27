// data.ts
import { Community } from './definitions';

export const communities: Community[] = [
  {
    id: '1',
    name: 'Community One',
    image_url: '/avatar1.svg',
    members_count: 100,
    slug: 'community-one'
  },
  {
    id: '2',
    name: 'Community Two',
    image_url: '/avatar2.svg',
    members_count: 200,
    slug: 'community-two'
  },
  // 添加更多社区数据
];