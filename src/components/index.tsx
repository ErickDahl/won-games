const Main = ({ title = 'Hi, Im the main page' }: { title?: string }) => {
  return (
    <main className="bg-primary font-default">
      <h1 className="rounded px-1 py-0.5 text-center">{title}</h1>
    </main>
  )
}

export default Main
