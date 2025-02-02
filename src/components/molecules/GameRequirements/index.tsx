import { tv, VariantProps } from 'tailwind-variants'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs'

const GameRequirementsClasses = tv({
  slots: {
    base: 'px-3',
    titlePlatform: 'text-base font-medium text-white sm:text-lg',
    divRequirements: 'flex flex-col',
    divSection: 'flex w-fit flex-col gap-3',
    divContent: 'grid grid-cols-2 gap-1',
    titleRequirement: 'text-xs font-normal text-gray sm:text-sm',
    textRequirement: 'text-xs font-medium text-white sm:text-base'
  }
})

type SystemRequirements = {
  system: string
  processor: string
  gpu: string
}

type GameRequirements = {
  platform: string
  minimum: SystemRequirements
  recommend: SystemRequirements
}

export type GameRequirementsProps = VariantProps<
  typeof GameRequirementsClasses
> & {
  gameRequirements: GameRequirements[]
}

const SystemRequirement = ({
  title,
  value
}: {
  title: string
  value: string
}) => {
  const { titleRequirement, divRequirements, textRequirement } =
    GameRequirementsClasses()

  return (
    <div className={divRequirements()}>
      <span className={titleRequirement()}>{title} </span>
      <span className={textRequirement()}>{value}</span>
    </div>
  )
}

const RequirementSection = ({
  title,
  requirements
}: {
  title: string
  requirements: SystemRequirements
}) => {
  const { titlePlatform, divSection } = GameRequirementsClasses()

  return (
    <div className={divSection()}>
      <p className={titlePlatform()}>{title}</p>
      <SystemRequirement title="System" value={requirements.system} />
      <SystemRequirement title="Processor" value={requirements.processor} />
      <SystemRequirement title="GPU" value={requirements.gpu} />
    </div>
  )
}

const GameRequirements = ({ gameRequirements }: GameRequirementsProps) => {
  const { base, divContent } = GameRequirementsClasses()

  return (
    <Tabs defaultTab="Windows" className={base()}>
      <TabsList>
        {gameRequirements.map((game) => (
          <TabsTrigger key={game.platform} value={game.platform}>
            {game.platform}
          </TabsTrigger>
        ))}
      </TabsList>

      {gameRequirements.map((game) => (
        <TabsContent key={game.platform} value={game.platform}>
          <div className={divContent()}>
            <RequirementSection title="Minimum" requirements={game.minimum} />
            <RequirementSection
              title="Recommended"
              requirements={game.recommend}
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export { GameRequirements }
