export type Group = {
  id: string;
  name: string;
  description: string;
  membersCount: number;
};

export const mockGroups: Group[] = [
  {
    id: '1',
    name: 'Weekend Hikers',
    description: 'A group for casual weekend hiking trips around the bay.',
    membersCount: 18,
  },
  {
    id: '2',
    name: 'Book Club',
    description: 'Discussing a new book every month with coffee.',
    membersCount: 12,
  },
  {
    id: '3',
    name: 'React Native Devs',
    description: 'Sharing tips, tricks, and project feedback.',
    membersCount: 42,
  },
];

export function getGroupById(groupId: string): Group | undefined {
  return mockGroups.find((g) => g.id === groupId);
}
