import { useContext } from 'react';
import { ExpenceTracker } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './Constants/Categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenceTracker);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const series = filteredCategories.map((c) => c.amount);
  const label = filteredCategories.map((c) => c.type);

  return {total, series, label };
};

export default useTransactions;