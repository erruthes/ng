import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(filesList: FileList) {
    console.log(filesList);

    const fileNames = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < filesList.length; i++) {
      fileNames.push(filesList[i].name);
    }

    const label = document.getElementById('customFileLabel');
    label.innerHTML = fileNames.join(', ');
  }
}
