// ** import from React
import { useState, useEffect } from 'react'

// ** import Childs
import Tabs from './Tabs'
import Tab from './Tab'
import Controller from './Controller'

export default function index({ pages }) {
  const [page, setPage] = useState(Object.keys(pages)[0])
  // useEffect(() => {
  //   setPage(Object.keys(pages)[0])
  // }, [pages])

  return (
    <div>
      <Tabs orientation='horizontal'>
        {Object.keys(pages).map(label => {
          return (
            <Tab key={Object.keys(pages).indexOf(label)} setPage={setPage} value={label} isActive={page === label} />
          )
        })}
      </Tabs>
      <Controller>{pages[page]}</Controller>
    </div>
  )
}
