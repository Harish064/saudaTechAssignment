import React,{ useState } from 'react';
import {Table} from 'react-bootstrap';
import * as XLSX from 'xlsx';
function Taks2() {
    const [xlData, setXlData] = useState([]);
    const [fileSelected, setFileSelected] = useState(false)
    const readExcel = (file)=>{
        const promise = new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)
            fileReader.onload=(e)=>{
                const bufferArray = e.target.result;
                const workBook = XLSX.read(bufferArray,{type:'buffer'});
                const workSheetName = workBook.SheetNames[0];
                const workSheet = workBook.Sheets[workSheetName];
                const data = XLSX.utils.sheet_to_json(workSheet);
                resolve(data);
            };
            fileReader.onerror =(err=>{
                reject(err)
            })
        });
        promise.then((d)=>{
            setXlData(d)
        })
        setFileSelected(true)
    };
    return (
        <div>
           {fileSelected ?(
               <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Buyer</th>
                    <th>Seller</th>
                    <th>Broker</th>
                    <th>Variety</th>
                    <th>Station</th>
                    <th>Delivery By</th>                    
                    <th>Quantity</th>                    
                    <th>Quantity(Units)</th>
                    <th>Confirmation Id</th>
                    <th>Original Price</th>
                    <th>Accepted Price</th>
                    <th>Price(Unit)</th>                    
                    <th>Created At</th>
                    <th>Confirmed At</th>
                    <th>Staple</th>
                    <th>Strength</th>
                    <th>Trash</th>
                    <th>Moisture</th>                    
                    <th>Mic Minimum</th>                    
                    <th>Mic Maximum</th>                    
                    <th>Remarks</th>
                    <th>Dhara</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        xlData.map((d,index)=>{
                            const { Type, Status, Buyer, Seller, Broker,Quantity,Strength, Variety,Dhara,Moisture,Staple,Remarks,Station,Trash} = d;
                            return (
                            <tr key={index}>
                            <td>{Type}</td>
                            <td>{Status}</td>
                            <td>{Buyer}</td>
                            <td>{Seller}</td>
                            <td>{Broker}</td>
                            <td>{Variety}</td>
                            <td>{Station}</td>
                            <td>{d['Delivery By']}</td>
                            <td>{Quantity}</td>
                            <td>{d['Quantity Unit']}</td>
                            <td>{d[" Confirmation ID"]}</td>
                            <td>{d['Original Price']}</td>
                            <td>{d['Accepted Price']}</td>
                            <td>{d['Price Unit']}</td>
                            <td>{d['Created At']}</td>
                            <td>{d['Confirmed At']}</td>
                            <td>{Staple}</td>
                            <td>{Strength}</td>
                            <td>{Trash}</td>
                            <td>{Moisture}</td>
                            <td>{d['Mic Minimum']}</td>
                            <td>{d['Mic Maximum']}</td>
                            <td>{Remarks}</td>
                            <td>{Dhara}</td>
                            </tr>)
                        })
                    }
                    <tr>
                    
                    </tr>
                </tbody>
             </Table>
           ): (
               <div>
                   <span>Select an EXCEL file to display : -</span>
                   <input type="file" onChange={(e)=>{
                        const file = e.target.files[0]
                        readExcel(file);
                    }}/>
               </div>
           ) }
        </div>
    )
}

export default Taks2
