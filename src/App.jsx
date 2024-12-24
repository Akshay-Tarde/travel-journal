import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import entryData from "../data.js"

export default function App() {
  const entryComponents = entryData.map( item => {
    return <Entry 
              key={item.id}
              {...item}
              />
  })

  return (
    <>
      <Header/>
      {entryComponents}
    </>
  )
}