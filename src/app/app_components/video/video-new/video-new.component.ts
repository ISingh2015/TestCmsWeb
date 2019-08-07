import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-video-new',
  templateUrl: './video-new.component.html',
  styleUrls: ['./video-new.component.css']
})
export class VideoNewComponent implements OnInit {

  @ViewChild('videoInput') videoInput: ElementRef;
  uploader: FileUploader;
  isDropOver: boolean;

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: 'demo-video/create', autoUpload: true, headers: headers});
    this.uploader.onCompleteAll = () => alert('Video File uploaded');
  }

  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }

  fileClicked() {
    this.videoInput.nativeElement.click();
  }
}
