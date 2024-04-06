import React, {createContext, useState} from "react";
import { FileSystemNode } from "../ViewModel/FileSystemNode";
import {deepClone} from "../utils/deepclone"

export const FileSystemContext = createContext({
    fileSystem: null
});

export const FileSystemProvider = ({children}) => {
    const [fileSystem, setFileSystem] = useState(new FileSystemNode("FOLDER", "Src"));

    const updateFileSystem = () => {
        setTimeout(() => {
            setFileSystem(fs => deepClone(fs))
        }, 200)
    }

    return (
        <FileSystemContext.Provider value={{fileSystem, updateFileSystem}}>
            {children}
        </FileSystemContext.Provider>
    )
}