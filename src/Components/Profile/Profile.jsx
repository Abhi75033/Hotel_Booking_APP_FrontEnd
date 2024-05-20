import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ProfileImage from '../../assets/ProfileImage.jpg';
import Avatar from 'react-avatar-edit';
import './profile.css';
import axios from "axios";

export default function Profile() {
    const [visible, setVisible] = useState(false);
    const [imgCrop, setImgCrop] = useState(null);
    const [storeImg, setStoreImg] = useState([]);

    const onCrop = (view) => {
        setImgCrop(view);
    }

    const onClose = () => {
        setImgCrop(null);
    }

    const saveImage = () => {
        if (imgCrop) {
            setStoreImg([imgCrop]); // Since only one image is cropped, replace the previous image
            setVisible(false);
        }
    }

    const finalProfileImage = storeImg.length ? storeImg[0] : ProfileImage;

    const dataURLtoBlob = (dataurl) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    const handler = async () => {
        if (!imgCrop) {
            alert("Please crop the image before uploading.");
            return;
        }

        try {
            const blob = dataURLtoBlob(imgCrop);
            const formData = new FormData();
            formData.append('avatar', blob, 'profile.png');

            const resp = await axios.post('http://localhost:3000/api/v1/users/image/uplod', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(resp);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="profile_img text-center p-4 pb-5 bg-danger">
            <div className="div">
                <img
                    className="z-0 border border-2 border-success"
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                    src={finalProfileImage}
                    onClick={() => setVisible(true)}
                    alt="Profile"
                />

                <Dialog className="bg-light border border-3 border-info w-auto h-auto" visible={visible} header={() => (
                    <p className="text-2x1 text-center mt-2 font-semibold textColor">
                        Update Profile
                    </p>
                )} onHide={() => setVisible(false)}>
                    <div className="confirmation-content flex flex-column align-items-center mt-5 w-12">
                        <div className="flex justify-content-around w-12 mt-4">
                            <Avatar height={400} width={400} onClose={onClose} onCrop={onCrop} />
                            <Button onClick={saveImage} className="d-block m-auto btn btn-info" label="Save" icon="pi pi-check" />
                        </div>
                    </div>
                </Dialog>
            </div>
            <Button onClick={handler} className="mt-2 btn btn-primary">Upload Image</Button>
        </div>
    );
}
