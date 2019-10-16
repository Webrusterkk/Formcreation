import { Component } from '@angular/core';
import { MY_FORM_MODEL } from './mymodel';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formapp';
  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
