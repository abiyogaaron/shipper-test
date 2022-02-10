import {
  reformatDate,
  filterData,
} from '../utils';

describe('utils reformatDate to dd/mm/yyyy', () => {
  test('test case: "1973-10-30T16:57:20.422Z"', () => {
    const inputDate = '1973-10-30T16:57:20.422Z';
    expect(reformatDate(inputDate)).toBe('30/10/1973');
  });

  test('test case: ""', () => {
    const inputDate = '';
    expect(reformatDate(inputDate)).toBe(inputDate);
  });
});

describe('Utils filterData', () => {
  test('Test Case: value: "", data: {}, originData: {},props: []', () => {
    const data = {};
    const value = '';
    const originData = {};
    const props = [];
    expect(filterData(value, data, originData, props)).toMatchObject([]);
  });

  test('Test Case: value: "data", data: {}, originData: {},props: []', () => {
    const data = {};
    const value = 'data';
    const originData = {};
    const props = [];
    expect(filterData(value, data, originData, props)).toMatchObject([]);
  });

  test('Test Case: Props is Empty []', () => {
    const data = [
      {
        name: {
          first: 'John',
          last: 'doe',
        },
        email: 'john.doe@gmail.com',
      },
      {
        name: {
          first: 'foo',
          last: 'bar',
        },
        email: 'foo.bar@gmail.com',
      },
    ];
    const value = 'o';
    const originData = [...data];
    const props = [];

    expect(filterData(value, data, originData, props)).toMatchObject([]);
  });

  test('Test Case: Props is ["name", "first"]', () => {
    const data = [
      {
        name: {
          first: 'John',
          last: 'doe',
        },
        email: 'john.doe@gmail.com',
      },
      {
        name: {
          first: 'foo',
          last: 'bar',
        },
        email: 'foo.bar@gmail.com',
      },
    ];
    const value = 'jo';
    const originData = [...data];
    const props = ['name', 'first'];

    expect(filterData(value, data, originData, props)).toMatchObject([
      {
        name: {
          first: 'John',
          last: 'doe',
        },
        email: 'john.doe@gmail.com',
      },
    ]);
  });
});
