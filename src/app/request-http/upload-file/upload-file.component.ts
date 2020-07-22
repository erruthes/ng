import { UploadFileService } from './upload-file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(filesList: FileList) {
    console.log(filesList);

    this.files = new Set();
    const fileNames = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < filesList.length; i++) {
      fileNames.push(filesList[i].name);
      this.files.add(filesList[i]);
    }

    const label = document.getElementById('customFileLabel');
    label.innerHTML = fileNames.join(', ');
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.uploadFileService.upload(this.files, 'http://localhost:8000/upload')
        .subscribe(response => console.log('Upload Concluído'));
    }
  }
}
