import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import axios from "axios"
import { yellow } from "@material-ui/core/colors";
import { right } from "glamor";

const API = process.env.REACT_APP_API_KEY

function CompareImage() {

    const [image, setImage] = useState('')

    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleApi = () => {
        //call the api
        const url = 'http://localhost:5000/api/image'
        const formData = new FormData()
        formData.append('image', image)
        axios.post(url, formData).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    // let url = `${API}bill`

    // useEffect(() => {
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(resp => setData(resp))
    // }, [])

    // console.log(data)




    return (
        <>
            <form className="data1">
                <center><h1 className='headingh1'>COMPARE IMAGE</h1></center>
                <div>

                    <label className="imageL" >Upload to predict : <br /><br />
                        <input
                            type="file"
                            onChange={handleChange}
                            multiple
                            // value={image}

                            className="imgaeText" />

                    </label>

                </div>


                <button className="btn mt-4 paperB" type='submit' onClick={handleApi}>Upload & Predict</button>

                <div className="paperRow" style={{ marginTop: '100px', float: 'right', width: 450, height: '420px' }}>
                    {/* <img width={440} src={image === '' ? '' : URL.createObjectURL(image)} /> */}
                </div>
                <div className="paperRow" style={{ marginTop: '100px', float: 'left', width: 450, height: '420px' }}>
                    <img width={440} src={image === '' ? '' : URL.createObjectURL(image)} />
                </div>
            </form >

        </>
    );
}

export default CompareImage;