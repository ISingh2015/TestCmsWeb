import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KeyValuesService} from '@app/app_services/key-values.service';
import {KeyValue} from '@app/app_models/keyValue';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-keyvalue-edit',
  templateUrl: './key-value-edit.component.html',
  styleUrls: ['./key-value-edit.component.css']
})
export class KeyValueEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  ckeConfig: any;
  keyValues: KeyValue = new KeyValue();

  constructor(private keyValueService: KeyValuesService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getKeyValueDetails(this.route.snapshot.params['id']);
    this.ckeConfig = {
      forcePasteAsPlainText: true,
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
        {name: 'forms', groups: ['forms']},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
        {name: 'links', groups: ['links']},
        {name: 'insert', groups: ['insert']},
        '/',
        {name: 'styles', groups: ['styles']},
        {name: 'colors', groups: ['colors']},
        {name: 'tools', groups: ['tools']},
        {name: 'others', groups: ['others']},
        {name: 'about', groups: ['about']}
      ],
      extraPlugins: 'divarea',
      removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getKeyValueDetails(id: number) {
    this.subscription= this.keyValueService.getKeyValueById(id).subscribe(data => {
        this.keyValues = data;
      },
      error => {
        console.log(error);
      });

  }

  saveKeyValueDetails() {
    this.subscription= this.keyValueService.updateKeyValue(this.keyValues)
      .subscribe(data => {
          this.router.navigate(['/kv-list']);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.saveKeyValueDetails();
  }
}
