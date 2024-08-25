async function Datas() {
    try {
        let datas = await fetch('http://localhost:4000/json');


        let parsed_datas= await datas.json();
        console.log("datas :",parsed_datas);

        let data = document.getElementById('datacontainer');


        let rows = '';
            for (let i = 0; i < parsed_datas.length; i++) {
                rows = rows + `
                <div class="border p-2">
                    <div><img src="${parsed_datas[i].image}" style="width: 200px; height:200px;"></div>
                    <div class="pt-2 fw-bold">${parsed_datas[i].title.slice(0,25)+"...  "}</div>
                    <div class="p-2">${parsed_datas[i].description.slice(0,95)+"...  "}</div>
                    <div>$${parsed_datas[i].price}</div>
                </div>
                
                
                
                `;
            }
        
        data.innerHTML = rows;
        console.log("datacontainer:", data);
    
        
        

    }catch(error){
        console.log("error",error)

    }
}
Datas();