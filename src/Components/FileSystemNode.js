import React, { useCallback, useContext, useMemo, useState } from "react";
import { FileSystemContext } from "../Context/FileSystemContext";

export const FileSystemNode = ({name, type, files, folders, updateName, addToFolder}) => {

    const {updateFileSystem} = useContext(FileSystemContext);

    const [editing, setEditing] = useState(false);
    const [nodeName, setNodeName] = useState(name);
    const [expanded, setExpanded] = useState(false);
    const [adding, setAdding] = useState(false);
    const [addingNodeName, setAddingNodeName] = useState("");

    const handleAddToFolder = useCallback((type, name) => {
        addToFolder(type, name);
        setExpanded(true);
        updateFileSystem()
    }, [addToFolder, updateFileSystem])

    const renderNodeName = useMemo(() => {
        if (editing) {
            return (
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "row"}}><input value={nodeName} onChange={(e) => {
                        setNodeName(e.target.value);
                    }} />
                    <button onClick={() => {
                        updateName(nodeName);
                        setEditing(false);
                        updateFileSystem();
                    }}>Save</button>
                    <button onClick={() => {
                        setEditing(false);
                        setNodeName(name)
                    }}>Cancel</button></div>
                </div>
            )
        }
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <p>{name} - {type}</p>
                <button onClick={() => {
                    setEditing(true);
                }}>Rename</button>
                {
                    type === "FOLDER" && (
                        <button onClick={() => {
                            setAdding(true)
                        }}>Add file</button>
                    )
                }
            </div>
        )
    }, [editing, name, nodeName, updateName, type, updateFileSystem]);

    const renderAddNewFileSystemNode = useMemo(() => {
        if (adding) {
            return (
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input value={addingNodeName} onChange={(e) => {
                            setAddingNodeName(e.target.value);
                        }} />
                        <button onClick={() => {
                            handleAddToFolder("FOLDER", addingNodeName);
                            setAddingNodeName("");
                            setAdding(false);
                            updateFileSystem();
                        }}>Create Folder</button>
                        <button onClick={() => {
                            handleAddToFolder("FILE", addingNodeName);
                            setAddingNodeName("");
                            setAdding(false);
                            updateFileSystem();
                        }}>Create File</button>
                        <button onClick={() => {
                            setAdding(false);
                            setAddingNodeName("");
                        }}>Cancel</button>
                    </div>
                </div>
            )
        }
        return null;
    }, [handleAddToFolder, adding, addingNodeName, updateFileSystem])

    const renderSubNodes = useMemo(() => {
        if (expanded) {
            return (
                <div>
                    {
                        files.map((item) => {
                            return (
                                <FileSystemNode {...item} key={item.id}/>
                            )
                        })
                    }
                    {
                        folders.map((item) => {
                            return (
                                <FileSystemNode {...item} key={item.id}/>
                            )
                        })
                    }
                </div>
                )
        }
    }, [files, folders, expanded])

    return (
        <div style={{marginLeft: 10}}>
            <div style={{display: "flex", flexDirection: "row"}}>
            {
                type === "FOLDER" && (
                    <button onClick={() => {
                        setExpanded(val => !val)
                    }}>{expanded ? "▲" : "▼"}</button>
                )
            }
            {renderNodeName}
            </div>
            {
                renderSubNodes
            }
            {
                renderAddNewFileSystemNode
            }
        </div>
    )
}