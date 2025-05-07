export class PaginationDto {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;

  constructor(page: number, limit: number, totalItems: number, totalPages: number) {
    this.page = page;
    this.limit = limit;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }
}
