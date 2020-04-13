export const DATA_STUB = {
  'node-1': {
    label: 'Node 1',
    value: '1',
    valueNumber: 9,
    valueNull: null,
    array: [
      'a',
      {
        label: 'Node a1-1 ',
        value: {
          label: 'Node a1-1-1 ',
          value: 'a1-1-1',
        },
      },
      {
        label: 'Node a1-2 ',
        value: 'a1-2',
      },
    ],
    nodes: {
      'node-1-1': {
        label: 'Node 1 1',
        value: '1-1',
        nodes: {
          'node-1-1-1': {
            label: 'Node 1 1 1',
            value: '1-1-1',
          },
          'node-1-1-2': {
            label: 'Node 1 1 2',
            value: '1-1-2',
          },
        },
      },
      'node-1-2': {
        label: 'Node 1 2',
        value: '1-2',
        nodes: {
          'node-1-2-1': {
            label: 'Node 1 2 1',
            value: '1-2-1',
          },
        },
      },
    },
  },
  'node-2': {
    label: 'Node 2',
    value: '2',
  },
};
