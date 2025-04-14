const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedList = JSON.parse(storedWishListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'this id is already exists');
    }
    else{
        storedWishList.push(id);
        const setToLS = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', setToLS);
    }
}

export {addToStoredWishList}