import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reattivo',
  templateUrl: './form-reattivo.component.html',
  styleUrl: './form-reattivo.component.scss'
})
export class FormReattivoComponent {

form!:FormGroup

constructor(private fb:FormBuilder){}

ngOnInit(){
  this.form = this.fb.group({
nome:this.fb.control(null,[Validators.required]),
cognome:this.fb.control(null,[Validators.required]),
password:this.fb.control(null,Validators.required),
confirmPassword:this.fb.control(null, Validators.required,),
genere:this.fb.control(null,Validators.required),
img:this.fb.control(null,Validators.required),
user:this.fb.control(null,Validators.required),
}, { validators: this.matchpass() });



}


matchpass(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return (password && confirmPassword && password.value === confirmPassword.value) ? null : { invalidMatch: true };
  };
}






invia(){console.log("stai ricevendo roba",this.form.value)}

valido(fieldName:string){
  const field = this.form.get(fieldName);
  return field?.invalid && field?.touched
}













}
