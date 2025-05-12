import { useState } from 'react';
import TheWarning from './TheWarning';

export default function Textarea() {
  const [text, setText] = useState('');
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;
// basic validation
    if (newText.includes('<script>')) {
      setWarningText('No script tags allowed!');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarningText('No @ symbol allowed!');
      newText = newText.replace('@', '');
    } else {
      setWarningText('');
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      {<TheWarning warningText={warningText} />}
    </div>
  );
}
