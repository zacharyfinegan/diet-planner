import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WebScrapeService {

    cheerio = require("cheerio")
    axios = require("axios")
   

    constructor() { }

    async scrape(website: string) {
        const axiosResponse = await this.axios.request({
            method: "GET",
            url: "https://serene-scrubland-32304.herokuapp.com/" + website,
            headers: {
          /*       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36" */
            }
        })
        const $ = this.cheerio.load(axiosResponse.data);
        
        const protein = $("#resultprotein").text()
        const fat = $("#resultfat").text()
        const carb = $("#resultcarb").text()
        const calories = $("b:nth(6)").text()

        let macros: Array<number> = [];

        /* if ((calories.type != number) && (protein.type != number) && (carb.type != number) && fat.type != number) {
            macros.push (0,0,0,0);
        } */
        macros.push(calories, protein, carb, fat)
        return macros;
    }  
}

