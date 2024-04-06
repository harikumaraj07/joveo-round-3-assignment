export class FileSystemNode {
    // type, FILE, FOLDER
    constructor(type, name, files = [], folders = []) {
        this.type = type;
        this.name = name;
        this.id = Math.random() * 1000000;
        this.folders = folders;
        this.files = files;
    }
    addToFolder = (type, name) => {
        const node = new FileSystemNode(type, name)
        if (type === "FOLDER") {
            this.folders = [...this.folders, node]
        }
        if (type === "FILE") {
            this.files = [...this.files, node]
        }
    }
    updateName = (name) => {
        this.name = name;
    }
    deleteFile = (nodeId) => {
        if (this.files.find(item => item.id === nodeId)) {
            this.files = [...this.files].filter(item => item.id !== nodeId)
            return true;
        }
        if (this.folders.find(item => item.id === nodeId)) {
            this.folders = [...this.folders].filter(item => item.id !== nodeId)
            return true;
        }
        return false;
    }
}