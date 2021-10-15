export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(number * 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let arr = data.map((item, i) => item[type]);
  if ((type = 'colors')) {
    arr = arr.flat();
  }
  return ['all', ...new Set(arr)];
};
