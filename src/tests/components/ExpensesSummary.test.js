import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={231321331}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={10}/>);
  expect(wrapper).toMatchSnapshot();
});
