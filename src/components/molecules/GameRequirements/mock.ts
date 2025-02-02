import { GameRequirementsProps } from '.'

const gameRequirementsMock: GameRequirementsProps = {
  gameRequirements: [
    {
      platform: 'Windows',
      minimum: {
        system: 'Windows 10',
        processor: 'Intel Core i3-6100 / AMD Ryzen 3 1200',
        gpu: 'NVIDIA GTX 660 / AMD Radeon RX 460'
      },
      recommend: {
        system: 'Windows 10',
        processor: 'Intel Core i5-7600K / AMD Ryzen 5 2600X',
        gpu: 'NVIDIA GTX 1060 / AMD Radeon RX 580'
      }
    },
    {
      platform: 'Mac',
      minimum: {
        system: 'macOS Mojave',
        processor: 'Intel Core i5',
        gpu: 'Intel Iris Plus Graphics 640'
      },
      recommend: {
        system: 'macOS Catalina',
        processor: 'Intel Core i7',
        gpu: 'AMD Radeon Pro 560X'
      }
    },
    {
      platform: 'Linux',
      minimum: {
        system: 'Ubuntu 18.04',
        processor: 'Intel Core i3-530 / AMD Phenom II X4 965',
        gpu: 'NVIDIA GeForce GT 630 / AMD Radeon HD 6570'
      },
      recommend: {
        system: 'Ubuntu 20.04',
        processor: 'Intel Core i5-8500 / AMD Ryzen 5 2600',
        gpu: 'NVIDIA GeForce GTX 1660 / AMD Radeon RX 580'
      }
    }
  ]
}

export { gameRequirementsMock }
