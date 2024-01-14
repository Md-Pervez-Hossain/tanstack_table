import { useState } from 'react';

const CustomImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[500px] h-[200px] relative'>
        <label htmlFor='photoUpload' className='cursor-pointer'>
          {image ? (
            <>
              <div className='flex flex-col items-center justify-center border-4 border-dashed border-[#999] rounded-lg w-[500px] h-[200px]'>
                <div className='relative rounded-full w-36 h-36 overflow-hidden'>
                  <img src={image} alt='placeholder' className='w-full h-full object-cover' />
                </div>
                <button
                  onClick={() => setImage(null)}
                  className='absolute  bg-white p-2 rounded-md opacity-75'
                >
                  Remove
                </button>
              </div>
            </>
          ) : (
            <div className='border-4 border-dashed border-[#999] rounded-lg w-[500px] h-[200px] flex items-center justify-center'>
              <span className='text-gray-500 font-[500]'>Upload  photo</span>
            </div>
          )}
          <input
            onChange={handleImage}
            id='photoUpload'
            type='file'
            name='profile_img'
            accept='image/*'
            className='hidden'

          />
        </label>
      </div>
    </div>
  );
};

export default CustomImageUploader;
