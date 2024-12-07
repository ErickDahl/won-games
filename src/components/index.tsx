const Main = ({ title = 'Hi, Im the main page' }: { title?: string }) => {
  return (
    <main>
      <h1 className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold text-center">
        {title}
      </h1>
    </main>
  )
}

export default Main
