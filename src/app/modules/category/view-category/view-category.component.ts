import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent {
  displayedColumns: string[] = ["categoryName",];
  dataSource!: MatTableDataSource<any>;
  matTable = true;
  loadProgress = false;
  errorMessage: string = '';
  isMobile = true;

  constructor(
    private service: CategoryService,
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.loadProgress = true;
    this.service.getCategory().subscribe(
      (success) => {
        try {
          if (success.success) {
            this.loadData(success.data);
          } else {
            this.matTable = false;
            this.errorMessage = success.message.toUpperCase();
          }
        } catch (e) {
          this.matTable = false;
          this.errorMessage = "INVALID RESPONSE";
        }
        this.loadProgress = false;
      },
      (error) => {
        this.loadProgress = false;
        // this.snackbar.openErrorSnackBar(
        //   error.status + ": HTTP ERROR IN GET ADMIN",
        // );
      },
    );
  }

  onDelete(id: any): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.service.deleteCategory(id).subscribe((success) => {
        if (success.status) {
          this.onRefresh();
        }
      });
    }
    window.location.reload();
  }

  loadData(data: any): void {
    try {
      if (data && data.length) {
        for (let i = 0; i < data.length; i++) {
          data[i].title_text = "N/A";
          if (data[i].title && data[i].title.length) {
            data[i].title_text = data[i].title;
          }
        }
        this.matTable = true;
        this.dataSource = new MatTableDataSource<any>(data);
      } else {
        this.matTable = false;
        this.dataSource = new MatTableDataSource<any>([]);
        this.errorMessage = "NO DATA AVAILABLE";
      }
    } catch (e) {
      this.matTable = false;
      this.errorMessage = "DATA LOAD ERROR";
    }
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRefresh(): void {
    this.getCategory();
  }

  // onDelete(id: any): void {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     this.service.deleteAdmins(id).subscribe((success) => {
  //       if (success.status) {
  //         this.onRefresh();
  //       }
  //     });
  //   }
  // }

}
