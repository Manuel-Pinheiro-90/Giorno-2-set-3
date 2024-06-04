import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

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
genere:this.fb.control(null,Validators.required)


})





}
invia(){console.log("stai ricevendo roba",this.form.value)}








valido(fieldName:string){
  const field = this.form.get(fieldName);
  return field?.invalid && field?.touched




}
}
