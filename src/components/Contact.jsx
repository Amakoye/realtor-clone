import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

function Contact({ useRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", useRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [useRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <p className="">
          Contact {landlord?.name} for the {listing?.name.toLowerCase()}
        </p>
        <div className="mt-3 mb-6">
          <textarea
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600
            "
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={onChange}
          />
        </div>
        <a
          href={`mailto:${landlord?.email}?Subject=${listing?.name}&body=${message}`}
        >
          <button
            type="button"
            className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6"
          >
            Send message
          </button>
        </a>
      </div>
    </>
  );
}

export default Contact;
