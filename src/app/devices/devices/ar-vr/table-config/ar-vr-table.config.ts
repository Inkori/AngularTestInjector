import { TableParams } from 'src/app/models/table-params';


export const AR_VR_TABLE_CONFIG: TableParams = {
  columnSettings: [
    {
      cellName: '',
      sortParameter: 'deviceSerialnumber',
      key: 'deviceSerialnumber',
      format: 'pillStatus'
    },
    {
      cellName: '',
      sortParameter: 'deviceName',
      key: 'deviceName'
    },
    {
      cellName: '',
      sortParameter: 'deviceManufacturer',
      key: 'deviceManufacturer'
    },
  ],
  sortQueryParams: {
    sortByProperty: 'deviceName',
    sortByDirection: true
  },
  customClass: 'fix-head-table'
};
