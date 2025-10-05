export type Member = {
  id: string;
  name: string;
  initials: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done';
  assigneeId: string; // references Member.id
};

export type Group = {
  id: string;
  name: string;
  description: string;
  members: Member[];
  tasks: Task[];
};

export const mockGroups: Group[] = [
  {
    id: '1',
    name: 'Weekend Hikers',
    description:
      'Casual weekend hiking trips around the bay. Share routes, gear, and photos.',
    members: [
      { id: 'm1', name: 'Alice Johnson', initials: 'AJ' },
      { id: 'm2', name: 'Brian Lee', initials: 'BL' },
      { id: 'm3', name: 'Carmen Diaz', initials: 'CD' },
      { id: 'm4', name: 'Devin Patel', initials: 'DP' },
    ],
    tasks: [
      {
        id: 't1',
        title: 'Pick trail for Sunday',
        status: 'in_progress',
        assigneeId: 'm1',
      },
      { id: 't2', title: 'Arrange carpool', status: 'todo', assigneeId: 'm2' },
      {
        id: 't3',
        title: 'Pack first-aid kit',
        status: 'done',
        assigneeId: 'm3',
      },
    ],
  },
  {
    id: '2',
    name: 'Book Club',
    description:
      'Monthly fiction and non-fiction reads with lively discussion.',
    members: [
      { id: 'm5', name: 'Evan Reed', initials: 'ER' },
      { id: 'm6', name: 'Fatima Noor', initials: 'FN' },
      { id: 'm7', name: 'Grace Kim', initials: 'GK' },
    ],
    tasks: [
      {
        id: 't4',
        title: 'Choose November book',
        status: 'todo',
        assigneeId: 'm5',
      },
      {
        id: 't5',
        title: 'Book a cafe table',
        status: 'in_progress',
        assigneeId: 'm6',
      },
    ],
  },
  {
    id: '3',
    name: 'React Native Devs',
    description: 'Share tips, tricks, and project feedback for RN apps.',
    members: [
      { id: 'm8', name: 'Hiro Tanaka', initials: 'HT' },
      { id: 'm9', name: 'Isha Gupta', initials: 'IG' },
      { id: 'm10', name: 'Jon Park', initials: 'JP' },
      { id: 'm11', name: 'Kara Young', initials: 'KY' },
      { id: 'm12', name: 'Luis Perez', initials: 'LP' },
    ],
    tasks: [
      {
        id: 't6',
        title: 'Review PR: dark mode',
        status: 'in_progress',
        assigneeId: 'm9',
      },
      {
        id: 't7',
        title: 'Draft talk: performance',
        status: 'todo',
        assigneeId: 'm10',
      },
      {
        id: 't8',
        title: 'Set up E2E tests',
        status: 'todo',
        assigneeId: 'm12',
      },
    ],
  },
];

export function getGroupById(groupId: string): Group | undefined {
  return mockGroups.find((g) => g.id === groupId);
}
