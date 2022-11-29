import { useState } from 'react'
import './App.css'
import { emojiList } from './data-by-group'

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState('😀')

  return (
    <div className='center-wraper'>
      <h1>EMOJI POC</h1>
      <div className="flex-column-container">
        {
          emojiList.map((elem) => {
            return (
              <>
                <div>
                  {
                    elem.name
                  }
                </div>
                <div className='flex-row-container'>
                  {
                    elem.emojis.map((emoj) =><span onClick={() => setSelectedEmoji(emoj.emoji)}>{emoj.emoji}</span>)
                  }
                </div>
              </>
            )
          })
        }
      </div>
      <div className='result-flex-container'>
        <p>You have selected :</p>
        <span>
          {
            selectedEmoji
          }
        </span>
      </div>
      <div>
        <h1 className="selectedProject">Emoji selected for projects : </h1>
        <div className='project-emoji-list'>
            <span>🏗️ : building construction</span>
            <span>🧩 : puzzle piece</span>
            <span>🖨️ : printer</span>
            <span>💾 : floppy disk</span>
            <span>📔 : notebook with decorative cover</span>
            <span>📕 : closed book</span>
            <span>📖 : open book</span>
            <span>📗 : green book</span>
            <span>📘 : blue book</span>
            <span>📙 : orange book</span>
            <span>📚 : books</span>
            <span>📓 : notebook</span>
            <span>📒 : ledger</span>
            <span>📃 : page with curl</span>
            <span>📜 : scroll</span>
            <span>📄 : page facing up</span>
            <span>📑 : bookmark tabs</span>
            <span>🔖 : bookmark</span>
            <span>🏷️ : label</span>
            <span>📁 : file folder</span>
            <span>🗂️ : card index dividers</span>
            <span>💼 : briefcase</span>
            <span>📇 : card index</span>
            <span>📋 : clipboard</span>
            <span>🗃️ : card file box</span>
            <span>🗄️ : file cabinet</span>
            <span>📰 : newspaper</span>
            <span>📝 : memo</span>
            <span>🧰 : toolbox</span>
            <span>🖋️ : fountain pen</span>
            <span>🖊️ : pen</span>
            <span>🖌️ : paintbrush</span>
            <span>🖍️ : crayon</span>
        </div>
      </div>
    </div>
  )
}

export default App
