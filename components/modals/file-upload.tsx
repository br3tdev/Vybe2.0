import { RefreshCcw, X } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface FileUploadProps {
  name: string;
  imageUrl: string;
  onImageChange: (file: File | null) => void;
}

// const FileUpload: React.FC<FileUploadProps> = ({
//   name,
//   imageUrl,
//   onImageChange,
// }) => {
//   const [image, setImage] = useState<File | null>(null);
//   const imagePickerRef = useRef<HTMLInputElement | null>(null);

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  imageUrl,
  onImageChange,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const imagePickerRef = useRef<HTMLInputElement | null>(null);

  if (image) {
    return (
      <div className="relative">
        <Image
          alt="uploaded image"
          width={200}
          height={200}
          className="w-full rounded-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
          src={URL.createObjectURL(image)}
        />
        <button
          onClick={() => setImage(null)}
          className="absolute bg-rose-500 text-white p-1 rounded-full top-0 right-0 shadow-md"
          type="button"
        >
          <RefreshCcw className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          imagePickerRef.current?.click();
        }}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
        Upload Image
      </button>

      <input
        type="imageUrl"
        hidden
        value="imageUrl"
        ref={imagePickerRef}
        onChange={(e) => {
          if (!e.target.files![0].type.startsWith("image/" || "pdf/")) return;
          setImage(e.target.files![0]);
        }}
      />
    </>
  );
};

export default FileUpload;

// file-upload.tsx
// import { X } from "lucide-react";
// import Image from "next/image";
// import React, { useRef, useState } from "react";

// interface FileUploadProps {
//   name: string;
//   imageUrl: string;
//   onImageChange: (file: File | null) => void;
// }

// const FileUpload: React.FC<FileUploadProps> = ({
//   name,
//   imageUrl,
//   onImageChange,
// }) => {
//   const [image, setImage] = useState<File | null>(null);
//   const imagePickerRef = useRef<HTMLInputElement | null>(null);

//   if (image || imageUrl) {
//     return (
//       <div className="relative">
//         {imageUrl ? (
//           <Image
//             alt="uploaded image"
//             width={200}
//             height={200}
//             className="w-full rounded-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
//             src={imageUrl}
//           />
//         ) : (
//           <Image
//             alt="uploaded image"
//             width={200}
//             height={200}
//             className="w-full rounded-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
//             src={URL.createObjectURL(image!)}
//           />
//         )}
//         <button
//           onClick={() => {
//             onImageChange(null);
//             setImage(null);
//           }}
//           className="absolute bg-rose-500 text-white p-1 rounded-full top-0 right-0 shadow-md"
//           type="button"
//         >
//           <X className="h-4 w-4" />
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <button
//         onClick={() => {
//           imagePickerRef.current?.click();
//         }}
//         className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
//           />
//         </svg>
//         Upload Image
//       </button>

//       <input
//         type="file"
//         hidden
//         ref={imagePickerRef}
//         onChange={(e) => {
//           if (!e.target.files![0].type.startsWith("image/" || "pdf/")) return;
//           setImage(e.target.files![0]);
//           onImageChange(e.target.files![0]);
//         }}
//       />
//     </>
//   );
// };

// export default FileUpload;
