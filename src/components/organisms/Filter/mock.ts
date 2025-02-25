import { FilterProps } from '.'

const filterMock: FilterProps = {
  filters: [
    {
      title: 'Price',
      type: 'checkbox',
      options: [
        {
          label: 'Under $50'
        },
        {
          label: 'under 100'
        },
        {
          label: 'under 150'
        },
        {
          label: 'under 200'
        },
        {
          label: 'free'
        },
        {
          label: 'Discounted'
        }
      ]
    },
    {
      title: 'Sort by',
      type: 'radio',
      options: [
        {
          label: 'Low to High',
          value: 'price_asc'
        },
        {
          label: 'High to Low',
          value: 'price_desc'
        }
      ]
    },
    {
      title: 'System',
      type: 'checkbox',
      options: [
        {
          label: 'Windows'
        },
        {
          label: 'MacOS'
        },
        {
          label: 'Linux'
        }
      ]
    },
    {
      title: 'Genre',
      type: 'checkbox',
      options: [
        {
          label: 'Action'
        },
        {
          label: 'Adventure'
        },
        {
          label: 'RPG'
        },
        {
          label: 'Indie'
        },
        {
          label: 'Strategy'
        },
        {
          label: 'Simulation'
        },
        {
          label: 'Casual'
        },
        {
          label: 'Puzzle'
        },
        {
          label: 'Shooter'
        },
        {
          label: 'Sports'
        },
        {
          label: 'MMORPG'
        },
        {
          label: 'FPS'
        }
      ]
    }
  ]
}

export { filterMock }
