import { useState } from "react";
import { Editor } from '@monaco-editor/react';

const PlayGround=()=>{
    const [code, setCode] = useState('');
    return(
        <div className="m-10 h-full bg-white flex">
            <div className="w-1/2 border-8 border-blue-500 p-2">
                <Editor 
                    height="80vh" 
                    width="100%" 
                    defaultLanguage="html" 
                    defaultValue="// some comment"
                    theme='vs-light'
                    value={code}
                    onChange={(e)=>setCode(e)}
                />
            </div>
            <div className="w-1/2 border-8 border-green-500 p-2" dangerouslySetInnerHTML={{ __html: code }}></div>
        </div>
    );
}
export default PlayGround;