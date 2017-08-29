import { Input } from '@angular/core'
export class AreaChartConfig { 
    settings: { fill: string, interpolation: string };
    dataset: Array<{ x: string, y: number }>;
   }