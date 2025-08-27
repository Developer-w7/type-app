import { useRef, useState, useEffect, FC, useId } from "react";
import { axiosPrivate } from "../../../api/axios";
import FileUploadField from "../../../components/common/atom/select-upload";
import "./style.css";
export default function PersonalSpotResumeManager() {
  useEffect(() => {}, []);
  const unique: string = useId();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    aboutYou: "",
    education: "",
    address: "",
    skills: "",
    experience: "",
  });

  useEffect(() => {
    // Fetch user profile data from API or local storage
    // const fetchProfileData = async () => {
    //   try {
    //     const response = await axiosPrivate.get("/user/profile");
    //     setFormData(response.data);
    //   } catch (error) {
    //     console.error("Error fetching profile data:", error);
    //   }
    // };
    // fetchProfileData();
  }, []);

  useEffect(() => {
    setFormData({
      name: "John Doe",
      phoneNumber: "1234567890",
      email: "john@t.com",
      aboutYou: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      education: "Bachelor of Science in Computer Science",
      address: "123 Main St, Anytown, USA",
      skills: "JavaScript, React, Node.js",
      experience: "5 years of experience in web development",
    });
  }, []);
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change event:", event.target.value);
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event.target);
    try {
      const response = await axiosPrivate.post(
        "http://127.0.0.1:5000/add_profile",

        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err: any) {
      console.log(err);
    }

    console.log("Form submitted");
  };
  const resetHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form reset");
  };
  return (
    <div className="resume-upload-wrapper">
      <p>Resume Uploader</p>
      <FileUploadField />
    </div>
  );
}
