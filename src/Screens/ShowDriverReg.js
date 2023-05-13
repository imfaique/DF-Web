import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import axios from "axios"

const API = process.env.REACT_APP_API_KEY

const ShowDriverReg = () => {

    console.log(API)
    const [data, setData] = useState([]);

    const columns = [
        { field: "name", headerName: "Name", width: 150, },
        { field: "cnicNo", headerName: "CNIC", width: 150 },
        { field: "contactNo", headerName: "Contact No", width: 150 },
        { field: "address", headerName: "Address", width: 150 },
        { field: "username", headerName: "User Name", width: 150 },
        { field: "email", headerName: "Email", width: 150 },

    ];

    let url = `${API}driver`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])

    console.log(data)

    const rows = data.map((row) => ({
        id: row._id,
        name: row.name,
        cnicNo: row.cnicNo,
        contactNo: row.contactNo,
        address: row.address,
        username: row.username,
        email: row.email,

    }))



    return (
        <>
            {/* <div>
                <h1 style={{
                    marginLeft: ' 500px',
                    height: '60',

                }}>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div> */}
            <form className="data">
                <center><h1 className='stroke-text'>Driver Details</h1></center>
                <div style={{ height: 630, width: 1200 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}

                    />
                </div>
            </form>
        </>
    );
}

export default ShowDriverReg;