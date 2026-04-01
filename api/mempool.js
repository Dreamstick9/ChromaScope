const api = 'https://mempool.space/api';


async function fetchDiffInfo(){
    try{
        let data = await fetch(`${api}/v1/blocks`);
        let pop = await data.json();
        return pop;
    }catch(error){
        console.log(error);
        return [];
    }
}


async function search(){
    try{
        let r = await fetchDiffInfo();
        let input = document.getElementById("search").value.toLowerCase();
        let f;
        if(input === ""){
            f = r;
        } else {
            f = r.filter((i)=>{
                return i.extras?.pool?.name?.toLowerCase().includes(input);
            });
        }

        let c = document.getElementById("result");
        c.innerHTML = "";
        if(f.length === 0){
            c.innerHTML = "<p>No results found</p>";
            return;
        }

        f.forEach((i)=>{

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${i.height}</td>
            <td>${i.extras?.pool?.name || "Unknown"}</td>
            <td>${i.timestamp * 1000}</td>
            <td>${i.tx_count}</td>
            <td>${i.extras?.reward}</td>
            <td>${i.extras?.totalFees}</td>
        `;

        c.appendChild(row);
    });

    }catch(error){
        console.log(error);
    }
}