export const paginationTransform = (paginationObj) => {
    const {perPage, totalItems, currentPage} = paginationObj;
    return {current: currentPage, total: totalItems, pageSize: perPage}
};