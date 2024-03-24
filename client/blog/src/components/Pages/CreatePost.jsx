import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const modules={
    toolbar: [
        [{ header: [1, 2, false] }],
        [{ font: [] }], // fonts
        [{ size: ["12px", "14px", "16px", "18px", "20px"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link","image"],
        ["clean"]
    ]

}
 function CreatePost() {
const [title,setTitle]=useState('')
const [summary,setSummary]=useState('')
const[content,setContent]=useState('')
const [files,setFiles]=useState(null)
    async function createNewPost(e){
   e.preventDefault();
   const data= new FormData()
   data.set('title',title);
   data.set('summary',summary);
   data.set('content',content);
   if(files){
   data.set('file',files[0]);
   }
   console.log(data)
    await fetch('http://127.0.0.1:5173/post',{
        method:'POST',
        body:data,
     })
   } 
  return (
  <form onSubmit={createNewPost}>
  <input type="text" placeholder='title' value ={title} onChange={(e)=>{setTitle(e.target.value)}}/>
  <input type="summary" placeholder='summary' value ={summary}
  onChange={e=>setSummary(e.target.value)}/>
  <input type="file" 
  onChange={e=>setFiles(e.target.files)}/>
  <ReactQuill value={content} modules={modules} 
  onChange={newValue=>setContent(newValue)} />
  <button style={{marginTop:'5px'}}>Create Post</button>
  </form>
  )
}

export default CreatePost