import { HttpClient } from '@angular/common/http';
import { take, delay, tap } from 'rxjs/operators';

export class CrudService<T> {

  constructor(protected httpClient: HttpClient, private API_URL) {
  }

  list() {
    return this.httpClient.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
        );
  }

  private create(record: T) {
    return this.httpClient.post(this.API_URL, record).pipe(take(1));
  }

  loadById(id: number) {
    return this.httpClient.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private update(record: T) {
    return this.httpClient.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    console.log(record);
    if (record['id']) {
      return this.update(record);
    } else {
      return this.create(record);
    }
  }

  remove(id) {
    return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
