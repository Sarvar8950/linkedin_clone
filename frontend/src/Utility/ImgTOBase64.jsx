import React,{useState} from 'react'

 const ImgTOBase64 = ({setImgData}) => {
    const [baseImage, setBaseImg]=useState('')
    const uploadImage= async(e)=>{
        console.log(e.target.files[0]);
        const file=e.target.files[0]
        const base64= await convertBase64(file)
        console.log('********************************', base64);
        if(setImgData!==undefined){
            setImgData(base64)

        }
        setBaseImg(base64)
    }
    const convertBase64 =(file)=>{
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload=(()=>{
                resolve(fileReader.result)
            });
            fileReader.onerror=((er)=>{
                reject(er)
            })
        })
    }
  return (
    <div>
        {/* <h>ImgTOBase64</h> */}
{baseImage.length<2 ?<input type='file' onChange={(e)=>uploadImage(e)} /> : "File Uploaded"}
        <br/>
      
    </div>
  )
}
export {ImgTOBase64}