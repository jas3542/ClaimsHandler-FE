import { Component, OnInit } from '@angular/core';
import { LossTypeService } from '../../services/lossType.service'
import { LossType } from '../../models/LossType'

@Component({
  selector: 'app-lossType',
  templateUrl: './lossType.component.html',
  styleUrls: ['./lossType.component.css']
})
export class LossTypeComponent implements OnInit {

  lossType : LossType[] = [];
  constructor(private lossTypeService: LossTypeService) { 
    this.lossTypeService.getClaims().subscribe(data => {
      this.lossType = data;
    });
  }

  ngOnInit(): void {
    
  }

}
