const PhotoState = {
  photoList: [],
  searchValue: '',
};
const PhotoReducer = (state = PhotoState, action) => {
  console.log(action.payload, 'payload amount');
  let PhotoData = state;
  switch (action.type) {
    case 'GET_PHOTOS_SUCCESS': {
      PhotoData = {
        ...PhotoData,
        photoList: action.payload,
      };
      return PhotoData;
    }
    // to search the photos by category
    case 'SEARCH_BY_CATEGORY': {
      const lowercasedValue = action.payload.toLowerCase();
      const filteredData = PhotoData.photoList.filter(
        (el) => el.category.toLowerCase().includes(lowercasedValue),
      );
      PhotoData = {
        ...PhotoData,
        photoList: filteredData,
      };
      return PhotoData;
    }
    case 'SORT_BY_MOST_LIKED': {
      const sortedList = PhotoData.photoList.sort((a, b) => ((a.likes > b.likes) ? -1 : 1));
      PhotoData = {
        ...PhotoData,
        photoList: sortedList,
      };
      return PhotoData;
    }
    case 'SORT_BY_MOST_COMMENTED': {
      const sortedList = PhotoData.photoList.sort(
        (a, b) => ((a.comments.length > b.comments.length) ? -1 : 1),
      );
      PhotoData = {
        ...PhotoData,
        photoList: sortedList,
      };
      return PhotoData;
    }
    case 'POST_LIKE': {
      const newData = PhotoData.photoList.map((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        if (action.payload.likeState === false) {
          return {
            ...item,
            likes: item.likes + 1,
          };
        }

        if (action.payload.likeState === true) {
          return {
            ...item,
            likes: item.likes - 1,
          };
        }
        return true;
      });

      return { ...PhotoData, photoList: newData };
    }
    case 'DELETE_COMMENT': {
      const newData = PhotoData.photoList.map((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        const updatedData = item.comments.filter((element, index) => index
         !== action.payload.index);
        return {
          ...item,
          // ...action.item,
          comments: updatedData,
        };
      });

      return { ...PhotoData, photoList: newData };
    }
    case 'POST_COMMNENT': {
      const newData = PhotoData.photoList.map((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          // ...action.item,
          comments: [...item.comments, action.payload.comments],
        };
      });

      return { ...PhotoData, photoList: newData };
    }
    default:
      return PhotoData;
  }
};

export { PhotoReducer as default };
