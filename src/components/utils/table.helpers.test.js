import { checkAllRows, checkEachRow, roundTwoDecimals } from './table.helpers';
import { mockClientData } from '../dummyData/testData';

describe("checkAllRows", () => {
  test('toggles the checked state of all rows on clicking the checkbox in the header', () => {
    const checkAllRowsEvent = {
      target: {
        checked: true
      }
    };

    checkAllRows(checkAllRowsEvent, mockClientData);
    mockClientData.forEach(row => {
      expect(row.isChecked).toBeTruthy();
    });

    const deselectEvent = {
      target: {
        checked: false
      }
    };

    checkAllRows(deselectEvent, mockClientData);
    mockClientData.forEach(row => {
      expect(row.isChecked).toBeFalsy();
    });
  });
});

describe("checkEachRow", () => {
  test('toggles the checked state of each row on click', () => {
    const selectEvent = {
      target: {
        value: '1',
        checked: true
      }
    };

    const checkedState = mockClientData[0].isChecked;
    checkEachRow(selectEvent, mockClientData);
    expect(mockClientData[0].isChecked).toEqual(!checkedState);

    const deselectEvent = {
      target: {
        value: '1',
        checked: false
      }
    };

    checkEachRow(deselectEvent, mockClientData);
    expect(mockClientData[0].isChecked).toEqual(checkedState);
  });

  test('clicking a checkbox on the first row does not toggle the checked state of other checkboxes', () => {
    const selectEvent = {
      target: {
        value: '1',
        checked: true
      }
    };

    const checkedState = mockClientData[1].isChecked;
    checkEachRow(selectEvent, mockClientData);
    expect(mockClientData[1].isChecked).toEqual(checkedState);
  })
});

describe("roundTwoDecimals", () => {
  test('should add two decimal places to an integer', () => {
    let positiveInt = roundTwoDecimals(100);
    let negativeInt = roundTwoDecimals(-100);
    expect(positiveInt).toBe('100.00');
    expect(negativeInt).toBe('-100.00');
  });

  test('should not throw an error when the input is 0', () => {
    expect(0).toBe(0.00);
  });

  test('should round a number with more than two decimal points to two decimal places', () => {
    let roundDown = roundTwoDecimals(1.234);
    let roundUp = roundTwoDecimals(1.236);
    expect(roundDown).toBe('1.23');
    expect(roundUp).toBe('1.24');
  });

  test('should convert a string with numbers to the Number type', () => {
    let stringPositiveInt = roundTwoDecimals('100');
    let stringNegativeInt = roundTwoDecimals('-100');
    let stringRealNum = roundTwoDecimals('100.126');

    expect(stringPositiveInt).toBe('100.00');
    expect(stringNegativeInt).toBe('-100.00');
    expect(stringRealNum).toBe('100.13');
  })

  test('should return undefined when the input is a string that contains non-numeric value', () => {
    let nonNumeric = roundTwoDecimals('100abc');
    expect(nonNumeric).toBeFalsy();
  })
});