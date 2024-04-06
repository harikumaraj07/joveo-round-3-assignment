import React, { useContext } from "react";
import { FileSystemContext } from "../../Context/FileSystemContext";
import { FileSystemNode } from "../../Components/FileSystemNode";

export const FileSystemView = () => {

    const {fileSystem} = useContext(FileSystemContext);

    console.log(fileSystem)

    return (
        <div>
            <div>File System</div>
            <div style={{marginTop: 40}}>
                <FileSystemNode {...fileSystem} />
            </div>
        </div>
    )
}