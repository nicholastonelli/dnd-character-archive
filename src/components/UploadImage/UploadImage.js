import React, { useState } from "react"

const UploadImage = ({ character, formState, setFormState }) => {

  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  const [previewSource, setPreviewSource] = useState("")
  const [fileInputState, setFileInputState] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!previewSource) return;
    await uploadImage(previewSource);
  };

  const uploadImage = async (event) => {
    const files = event
    const data = new FormData()
    data.append("file", files)
    data.append("upload_preset", "mnn9w31h")

    const response = await fetch(
      `${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    )
    const resJson = await response.json()
    console.log(resJson.secure_url)
    setUploadedImageUrl(resJson.secure_url)
    setFormState(uploadedImageUrl)
    console.log(uploadedImageUrl)
  }


  return (
    <div>
    <h2>Upload</h2>
    <form onSubmit={handleSubmitFile} className="form">
      <input
        type="file"
        name="image"
        onChange={handleFileInputChange}
        value={fileInputState}
        className="form-input"
      />
      <button className="shareButton"  type="submit">
        Submit
      </button>
    </form>
    {previewSource && (
      <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
    )}
  </div>
  )
}

export default UploadImage
