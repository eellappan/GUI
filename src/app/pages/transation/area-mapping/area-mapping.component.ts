import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-area-mapping',
  styleUrls: ['./area-mapping.component.scss'],
  templateUrl: './area-mapping.component.html',
})


export class AreaMappingcomponent  implements OnDestroy{
  starRate = 2;
  heartRate = 4;
  themeName = 'default';
  type = 'week';
  types = ['week', 'month', 'year'];
  buttonSettings: Array<any>;
  countryValue : string;
  countryName : string;
  themeSubscription: any;

    
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // Sno: {
      //   title: 'S.No',
      //   type: 'number',
      // },
      Publication: {
        title: 'Publication',
        type: 'string',
      },
      Category: {
        title: 'Category',
        type: 'string',
      },
      Edition: {
        title: 'Edition',
        type: 'string',
      },
      Nature: {
        title: 'Nature',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService, private themeService: NbThemeService) {
    const data = this.service.getData();
    this.source.load(data);
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }
  init(colors: any) {
    this.buttonSettings = [{
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'New',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: '  Save ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: '  View ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: ' Modify',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'Refresh',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'Cancel ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      }
    ]}
   
    
    onSelect(args){
      if(args.target.selectedIndex != 0)
      {
          this.countryValue = args.target.value; 
          this.countryName = args.target.options[args.target.selectedIndex].text; 
      }
    }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onMultipleSelectRow(event): void {
    console.log(event);
  }
  
}