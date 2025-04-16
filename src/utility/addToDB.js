import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedReadListStr = localStorage.getItem('read-list');
    if(storedReadListStr){
        const storedList = JSON.parse(storedReadListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedReadList = getStoredReadList();
    if(storedReadList.includes(id)){
        toast("This book is already added in the read book List");
    }
    else{
        storedReadList.push(id);
        const storedListStr = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedListStr);
        //ideally we use toast in the components
        toast('This book is added to your read list');
    }
}

export {addToStoredReadList, getStoredReadList}