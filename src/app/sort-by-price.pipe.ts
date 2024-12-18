import { Pipe, PipeTransform } from "@angular/core";
import { Figurines } from "./home/home.component";
@Pipe({
  name: "sortByPrice",
  standalone: true,
})
export class SortByPricePipe implements PipeTransform {
  transform(value: Figurines[], order: "asc" | "desc" = "asc"): Figurines[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
}
