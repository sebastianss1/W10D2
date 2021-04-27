import React from 'react';
import Clock from './clock.jsx'
import Tabs from './tabs.jsx'

const Root = () => {
  const tabs = [
    {
      index: 0,
      title: "one",
      content: "I am the first"
    },
    {
      index: 1,
      title: "two",
      content: "Second pane here"
    },
    {
      index: 2,
      title: "three",
      content: "Third pane here"
    },
  ]
  return (
    <>
      <Clock />
      <Tabs tabs = {tabs}/>
    </> //ghost tag
  )
}

export default Root;