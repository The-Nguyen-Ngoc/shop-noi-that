export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(number * 100);
  return newNumber;
};

export const getUniqueValues = () => {};
