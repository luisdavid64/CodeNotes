import React from 'react';
import { useSelector} from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Display = () => {

    const displayData = useSelector(state => state.workingText);
    return ( 
      displayData.language && displayData.style ? 
      <div className="code-output" style={{backgroundColor: displayData.bgColor}}>
        <SyntaxHighlighter showLineNumbers={true} language={displayData.language} style={displayData.style}>
                {displayData.content}
        </SyntaxHighlighter>
      </div>
      : <></>
    );
}
 
export default Display;


