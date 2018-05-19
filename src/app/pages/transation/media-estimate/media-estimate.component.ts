import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-media-estimate',
  styleUrls: ['./media-estimate.component.scss'],
  templateUrl: './media-estimate.component.html',
})

export class MediaEstimatecomponent implements OnDestroy{
  
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
      Sno: {
        title: 'S.No',
        type: 'number',
      },
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
      Size: {
        title: 'Size',
        type: 'number',
      },
      Date: {
        title: 'Date',
        type: 'string',
      },
      Height: {
        title: 'Height',
        type: 'number',
      },
      Width: {
        title: 'Width',
        type: 'number',
      },
      Rate: {
        title: 'Rate',
        type: 'number',
      },
      Amount: {
        title: 'Amount',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  starRate = 2;
  heartRate = 4;
  themeName = 'default';
  buttonSettings: Array<any>;
  themeSubscription: any;
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
}