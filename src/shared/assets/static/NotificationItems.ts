import { NotificationItems } from '@/shared/interfaces/NotificationInterface';

export const notificationItems: NotificationItems = [
  {
    id: 1,
    heading: 'Issue Activity',
    paragraph: 'Send me email notifications for issue activity',
  },
  {
    id: 2,
    heading: 'Tracking Activity',
    paragraph: 'Send me notifications when someone’ve tracked time in tasks',
  },
  {
    id: 3,
    heading: 'New Comments',
    paragraph: 'Send me notifications when someone’ve sent the comment',
  },
];
