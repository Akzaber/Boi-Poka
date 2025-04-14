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
        console.log(id, 'This id is already exists');
    }
    else{
        storedReadList.push(id);
        const storedListStr = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export {addToStoredReadList}