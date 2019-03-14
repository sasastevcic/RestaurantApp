import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'dr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems;
  @Input() pageSize;
  @Input() params;
  @Output() pageChange = new EventEmitter();

  currentPage = 1;
  pageCount: number;
  pages: number[];

  constructor() { }

  ngOnChanges() {
    this.pageCount = Math.ceil(this.totalItems / this.pageSize)
    this.pages = new Array(this.pageCount);
    this.currentPage = 1;
  }

  changePage(page) {
    this.currentPage = page;
    this.pageChange.emit({"page": this.currentPage});
  }

}
