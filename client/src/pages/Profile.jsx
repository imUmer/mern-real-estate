import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from "../redux/user/userSlice";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();updateSuccess
   console.log(formData);
   
 
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log(error);
        
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL }) 
      });
      }
    );
  };

  const handleChange = (e) => {    
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());      
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify(formData),
      })
      
      const data = await res.json();
      if(data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      } 

      dispatch(updateUserSuccess(data));  
      setUpdateSuccess(true);
    } catch (error) {  
      dispatch(updateUserFailure(error.message));
    }
  }

  const handleDeleteUser = async () => {
     try {
       dispatch(deleteUserStart());
       const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method:'DELETE',
       });
       const data = await res.json();
       if(data.success === false) {
         dispatch(deleteUserFailure(data.message));
         return;
       }  
       dispatch(deleteUserSuccess(data));

     } catch (error) {
      dispatch(deleteUserFailure(error.message));
     }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-y">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img 
          src={formData.avatar ||   currentUser.avatar}
          onClick={() => fileRef.current.click()}
          alt="user avatar"
          className="rounded-full h-24 w-24 cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center">
          {
          fileUploadError ? 
          <span className="text-red-700">Error Image Upload (image must less then 2mb)</span>
          : filePerc > 0 && filePerc < 100 ? 
          <span className="text-black">{`Uploading ${filePerc}%`}</span>
          : filePerc === 100 ? 
          <span className="text-green-700">Image upload successfully!!</span>
          : ""
          }

        </p>
        <input
          autoComplete="username"
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          autoComplete="email"
          type="email "
          placeholder="email"
          defaultValue={currentUser.email}
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          autoComplete="current-password"
          type="password"
          placeholder="password"
          defaultValue={currentUser.password}
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      <p className="text-red-700 mt-5">{error ? error : ''}</p>
      <p className="text-green-700 mt-5">{updateSuccess ? 'User Updated Successfully!!' : ''}</p>
    </div>
  );
}
