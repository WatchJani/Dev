import Styled from "./NewPost.module.css"
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "../../utils/axiosBackend"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Spinner from "../../components/Spiner/Spiner";

const NewPost = () => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState();

    const [data, setData] = useState({
        banner: null,
        title: null,
        post: null
    })

    console.log(data)

    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData()
                    loader.file.then((file) => {
                        body.append("upload", file)
                        axios.post("/team/upload", body)
                            .then((data) => {
                                console.log(data.data.data)
                                resolve({ default: data.data.data })
                            })
                    })
                })
            }
        }
    }

    function MyUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
            return uploadAdapter(loader)
        };
    }


    const newValue = (e) => {
        if (e.target.name === 'banner')
            setData({ ...data, [e.target.name]: e.target.files[0] });
        else setData({ ...data, [e.target.name]: e.target.value });
    };

    const Submit = (e) => {
        e.preventDefault();
        // if (!data) return setError('Please enter data!');
        setLoading(true);
        const formData = new FormData();

        formData.append("title", data.title)
        formData.append("post", data.post)
        formData.append("banner", data.banner)

        axios.post("post/62f284cf89f2fbbd667ac2f6", formData)
            .then(() => {
                navigate("/", { replace: true })
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    };

    if (loading) return <Spinner />;


    return (
        <form onSubmit={Submit}>
            <div className={Styled.Container}>
                <label className={Styled.UploadFile} htmlFor="banner">Add a cover image</label>
                <input style={{ display: "none" }} type="file" name="banner" id="banner" onChange={newValue} />

                <input type="text" name="title" placeholder="New post title hear..." className={Styled.Title} onChange={newValue} />

                <div className={Styled.Editor}>
                    <CKEditor
                        config={{ extraPlugins: [MyUploadAdapterPlugin], }}
                        editor={ClassicEditor}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const post = editor.getData();
                            setData({ ...data, post: post })
                            // console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            // console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            // console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
            <div className={Styled.Center}>
                <button className={Styled.Publish}>Publish</button>
            </div>

        </form>
    )
}

export default NewPost