export default (initialvalue, options) => {
  const { perPage, currentPage, totalItems } = options;

  return {
    ...initialvalue,
    pageSize: perPage,
    current: currentPage,
    total: totalItems || initialvalue.total
  };
};
