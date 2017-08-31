export class Element
{
	$id: string;
	Name:string;
	Count:number
}
export class Score
{
    busid: number;
    ins_date: string;
    ins_grade: string;
    score: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    lat: number;
    lng: number;
    ins_Score: number;
    ID: number
}
export class ZipScore
{
    $id: string;
	Zip: number;
	Avg_Score: number;
	country_code: string;
	Zipcode: string;
	place_name: string;
	State: string;
	State_code: string;
	City: string;
	admin_code2: string;
	admin_name3: string;
	admin_code3: string;
	lat: number;
	lng: number;
	accuracy: string
}
export class CityScore
{
    $id: string;
	State: string;
	City: string;
	Avg_Score: number
}