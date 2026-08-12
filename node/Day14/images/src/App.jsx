import { useState } from "react";

import axios from "axios";

const App = () => {

    const [name, setName] = useState("");

    const [image, setImage] = useState(null);

    const [type, setType] = useState("local");

    const handleUpload = async () => {

        try {

            const formData = new FormData();

            formData.append("name", name);

            formData.append("image", image);

            const url =

                type === "local"

                    ? `${import.meta.env.VITE_API_URL}/local`

                    : `${import.meta.env.VITE_API_URL}/cloudinary`;

            const response = await axios.post(

                url,

                formData

            );

            console.log(response.data);

            alert("Upload Success");

        } catch (error) {

            console.log(error);

            alert("Upload Failed");

        }

    };

    return (

        <div>

            <h1>Image Upload</h1>

            <input

                type="text"

                placeholder="Image Name"

                value={name}

                onChange={(e) =>

                    setName(e.target.value)

                }

            />

            <br />

            <br />

            <input

                type="file"

                onChange={(e) =>

                    setImage(e.target.files[0])

                }

            />

            <br />

            <br />

            <select

                value={type}

                onChange={(e) =>

                    setType(e.target.value)

                }

            >

                <option value="local">

                    Normal Upload

                </option>

                <option value="cloudinary">

                    Cloudinary Upload

                </option>

            </select>

            <br />

            <br />

            <button onClick={handleUpload}>

                Upload Image

            </button>

        </div>

    );

};

export default App;