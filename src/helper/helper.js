import * as XLSX from 'xlsx';
import barchartDatasetPath from '../dataset/barchart_dataset.csv';
import linechartDatasetPath from '../dataset/linechart_dataset.csv';
import MulbarchartDatasetPath from '../dataset/mulbarchart_dataset.csv';
import PiechartDatasetPath from '../dataset/piechart_dataset.csv';
import WafelchartDatasetPath from '../dataset/wafelchart_dataset.csv';
class Helper {
    static async fetchCSVFile(filePath) {
        const response = await fetch(filePath);
        const csvData = (await response.text()).replace(/\r/g, '');
        const lines = csvData.split('\n');
        const dataList = lines.map((line) => line.split(','));
        return dataList;
      };
      
    static async getTask1Data(){
        let data = await this.fetchCSVFile(barchartDatasetPath);
        data.splice(0,1);
        let dataResult = [];
        for (let index = 1; index < 4; index++) {       
            let dataTemp = data.map((line) => { return {country: line[0], value: parseFloat(line[index])} })
            .sort((a, b) => b.value - a.value);
            dataResult.push(dataTemp);
        }
        return dataResult;
    }
    static async getTask2Data(){
        let data = await this.fetchCSVFile(linechartDatasetPath);
        const countries = data.splice(0,1)[0];
        let dataResult = [];
        for (let i = 0; i < data.length; i++) {
            const line = data[i];
            for (let j = 2; j < line.length; j++) {
                dataResult.push({month: `${line[0]},${line[1]}`, amount: line[j], country: countries[j]});
            }
        }
        return dataResult;
    }

    static async getTask3Data(){
        let data = await this.fetchCSVFile(MulbarchartDatasetPath);
        const ranges = data.splice(0,1)[0];
        let dataResult = [];
        for (let i = 0; i < data.length; i++) {
            const country = data[i];
            let dataCountry = [];
            for (let j = 1; j < country.length; j++) {
                const record = country[j];
                dataCountry.push({
                    key: ranges[j],
                    value: record
                });
            }
            dataResult.push({
                country: country[0],
                dataBarchart: dataCountry
            });
        }
        return dataResult;
    }
    static async getTask4Data(){
        let data = await this.fetchCSVFile(PiechartDatasetPath);
        const vac = data.slice(0,1)[0];
        const num = data.slice(1,2)[0];
        let dataResult = [];
        let otherItem = {label: "other" , value: 0};
        
        let total = num.slice(2).map((d) => parseInt(d)).reduce((sum,item) => sum + item , 0);
        for (let i = 2; i < vac.length; i++) {
            let intNum = parseInt(num[i]);
            if(intNum*100/total < 2)
                otherItem.value += intNum;
            else
                dataResult.push({label: vac[i] , value: intNum });
        }
        dataResult.push(otherItem);
        return dataResult;
    }
    static async getTask5Data(){
        let data = await this.fetchCSVFile(WafelchartDatasetPath);
        const vacs = data.splice(0,1)[0];
        let dataResult = [];
        for (let i = 0; i < data.length; i++) {
            let country = data[i][0];
            let countryData = [];
            for (let j = 2; j < data[i].length; j++) {
                let number = data[i][j];
                countryData.push({ label: vacs[j], value: parseInt(number) });
            }
            dataResult.push({
                data: countryData,
                title: country
            });
        }
        return dataResult;
    }
}
export default Helper;