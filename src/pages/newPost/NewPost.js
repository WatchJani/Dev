import Styled from "./NewPost.module.css"
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "../../utils/axiosBackend"
import { useState } from 'react';

const NewPost = () => {

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
        // setLoading(true);
        const formData = new FormData();

        console.log(data)

        formData.append("title", data.title)
        formData.append("post", data.post)
        formData.append("banner", data.banner)

        axios.post("post/62f284cf89f2fbbd667ac2f6", formData).then(() => {
            console.log("proslo")
        })
    };


    return (
        <form onSubmit={Submit}>
            <label htmlFor="banner">Banner</label>
            <input type="file" name="banner" id="banner" onChange={newValue} />

            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={newValue} />

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
            <button>Pošalji</button>
        </form>
    )
}

export default NewPost