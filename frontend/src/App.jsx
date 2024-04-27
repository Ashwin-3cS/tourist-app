import React from "react";
import { useForm } from "react-hook-form";
import {app} from './firebase.js'


function App() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    const storageRef =  app.storage().ref();
    const fileRef = storageRef.child( data.image[0].name);
    fileRef.put(data.image[0]).then(()=>{
      console.log("Uploaded a File")
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          name="picture"
          {...register('picture', { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
