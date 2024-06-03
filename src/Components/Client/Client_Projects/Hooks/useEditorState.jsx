import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const useEditorState = (initialContent) => {
    const [editorState, setEditorState] = useState(() => {
        if (initialContent) {
            return EditorState.createWithContent(
                convertFromRaw(JSON.parse(initialContent))
            );
        } else {
            return EditorState.createEmpty();
        }
    });

    // useEffect(() => {
    //     const contentState = editorState.getCurrentContent();
    //     const rawContentState = convertToRaw(contentState);
    //     console.log("Current content:", JSON.stringify(rawContentState));
    // }, [editorState]);

    return [editorState, setEditorState];
};

export default useEditorState;
