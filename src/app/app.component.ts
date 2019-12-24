import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from './services/country.service';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CountryAPI } from './models/country-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  items: any;
  countries = new MatTableDataSource<CountryAPI>();
  columns = ["country", "subregion", "population", "timezone", "capital"];
  length;
  pageSize = 10;
  pageEvent: PageEvent;

  constructor(private cs: CountryService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.cs.getCountries().subscribe(res => {
      this.items = res;
      this.countries.data = this.items;
      this.countries.paginator = this.paginator;
      this.length = this.items.length;
    });
  }

  applyFilter(filterValue: string) {
    this.countries.filter = filterValue.trim().toLowerCase();
    this.countries.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

  showTooltip(country) {
    let myTooltip = "Languages: ";
    let i = 0;
    
    for (const language of country.languages) {
      myTooltip += language.name;

      if (i != country.languages.length - 1) {
        myTooltip += ", ";
      }
      i++;
    }

    i = 0;
    myTooltip += "\nCurrencies: ";

    for (const currency of country.currencies) {
      myTooltip += currency.name + " (" + currency.code + ")";

      if (i != country.currencies.length - 1) {
        myTooltip += ", ";
      }
      i++;
    }

    return myTooltip;
  }
}
