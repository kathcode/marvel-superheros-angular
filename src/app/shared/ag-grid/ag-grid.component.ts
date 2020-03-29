import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  @Input() rowData: any;
  @Input() columnDefs: any;
  @Input() rowModelType?: string;
  @Input() rowBuffer?: number;
  @Input() paginationPageSize;
  @Input() maxBlocksInCache;
  @Input() cacheBlockSize;
  @Output() getNewRows: EventEmitter<any> = new EventEmitter();

  gridApi;
  gridColumnApi;
  dataSource;
  getRowNodeId;

  constructor() {
    this.getRowNodeId = function(item) {
      return item.a;
    };
  }

  ngOnInit(): void {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    if (this.rowModelType === 'infinite') {
      const agGridThis = this;
      this.dataSource = {
        rowCount: null,
        getRows: function(params) {
          agGridThis.getNewRows.emit([params.startRow, params.endRow]);
          agGridThis.rowData.subscribe(data => {
            var rowsThisPage = data.slice(params.startRow, params.endRow);
            params.successCallback(rowsThisPage);
          });
        },
      };

      params.api.setDatasource(this.dataSource);
    }
  }
}
