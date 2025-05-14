export interface EventOption {
  value: string;
  label: string;
}

export interface PriorityOption {
  value: string;
  label: string;
}

export type EventOptions = Array<EventOption>;
export type PriorityOptions = Array<PriorityOption>;

export const eventOptions: EventOptions = [
  {
    value: 'event_category',
    label: 'Event Category',
  },
  {
    value: 'corporate_event',
    label: 'Corporate Event',
  },
  {
    value: 'social_event',
    label: 'Social Event',
  },
  {
    value: 'education_event',
    label: 'Educational Event',
  },
  {
    value: 'entertainment_event',
    label: 'Entertainment Event',
  },
];

export const priorityOptions: PriorityOptions = [
  {
    value: 'priority',
    label: 'Priority',
  },
  {
    value: 'low',
    label: 'Low',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'high',
    label: 'High',
  },
  {
    value: 'urgent',
    label: 'Urgent',
  },
];
