import React, { useState, useEffect } from 'react'

export default () => {
  const [value, setValue] = useState('👋 Hi from React')

  useEffect(() => {
    let editor = document.createElement('tiptap-react')
    editor.value = value
    editor.setValue = setValue

    let script = document.createElement('script')
    script.src = 'https://tiptap-basic.vercel.app/js/app.57725fc1.js' // vue js bundle

    let css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://tiptap-basic.vercel.app/css/app.da25fe12.css' // vue css bundle

    document.getElementById('editor-wrapper').appendChild(editor)
    document.body.appendChild(script)
    document.head.appendChild(css)
  }, [])

  useEffect(() => {
    console.log('value:', value)
  }, [value])

  return <div id="editor-wrapper" />
}
