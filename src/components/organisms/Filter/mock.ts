import { FilterProps } from '.'

const filterMock: FilterProps = {
  filters: [
    {
      title: 'Price',
      type: 'checkbox',
      options: [
        {
          label: 'Under $50',
          value: 'under-25'
        },
        {
          label: 'under 100',
          value: '25-50'
        },
        {
          label: 'under 150',
          value: '50-100'
        },
        {
          label: 'under 200',
          value: '100-200'
        },
        {
          label: 'free',
          value: 'over-200'
        },
        {
          label: 'Discounted',
          value: 'custom'
        }
      ]
    },
    {
      title: 'Sort by',
      type: 'radio',
      options: [
        {
          label: 'Low to High',
          value: 'price-asc'
        },
        {
          label: 'High to Low',
          value: 'price-desc'
        }
      ]
    },
    {
      title: 'System',
      type: 'checkbox',
      options: [
        {
          label: 'Windows',
          value: 'windows'
        },
        {
          label: 'MacOS',
          value: 'macos'
        },
        {
          label: 'Linux',
          value: 'linux'
        }
      ]
    },
    {
      title: 'Genre',
      type: 'checkbox',
      options: [
        {
          label: 'Action',
          value: 'action'
        },
        {
          label: 'Adventure',
          value: 'adventure'
        },
        {
          label: 'RPG',
          value: 'rpg'
        },
        {
          label: 'Indie',
          value: 'indie'
        },
        {
          label: 'Strategy',
          value: 'strategy'
        },
        {
          label: 'Simulation',
          value: 'simulation'
        },
        {
          label: 'Casual',
          value: 'casual'
        },
        {
          label: 'Puzzle',
          value: 'puzzle'
        },
        {
          label: 'Shooter',
          value: 'shooter'
        },
        {
          label: 'Sports',
          value: 'sports'
        }
      ]
    }
  ]
}

export { filterMock }
