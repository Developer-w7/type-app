import { useRef, useState, useEffect, FC, useId } from "react";
import TextField from "../../components/common/atom/text-input";
import TextAreaField from "../../components/common/atom/text-area-input";
import { axiosPrivate } from "../../api/axios";

export default function PersonalSpotProfile() {
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

  // Set form data with Faker or Hradcoded values for demonstration
  // This can be replaced with actual data fetching logic
  // const faker = require("faker");
  // setFormData({
  //   name: faker.name.findName(),
  //   phoneNumber: faker.phone.phoneNumber(),
  //   email: faker.internet.email(),
  //   aboutYou: faker.lorem.paragraph(),
  //   education: faker.lorem.sentence(),
  //   address: faker.address.streetAddress(),
  //   skills: faker.lorem.words(5),
  //   experience: faker.lorem.sentence(),
  // });
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
    <div>
      <p>Profile</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
          // Handle form submission logic here
          // For example, you can send the form data to an API or update the state
          // console.log("Form submitted with data:", formData);
          console.log("Form submitted");
        }}
        onReset={(e) => {
          e.preventDefault();
          resetHandler(e);
          // Handle form reset logic here
          // For example, you can clear the form data or reset the state
          // console.log("Form reset with data:", formData);
          // Reset the form fields to their initial values
          e.currentTarget.reset();
          // Optionally, you can also reset any state variables if needed
          console.log("Form reset");
        }}
      >
        {/* <TextField
        defaultValue=""
        label="Password"
        type="password"
        onChange={(v) => console.log(v)}
        // onBlur={(e) => console.log("Blur event:", e.target.value)}
        // onFocus={(e) => console.log("Focus event:", e.target.value)}
        placeholder="Enter your password"
        required
        autoFocus
        autoComplete="current-password"
        maxLength={20}
        minLength={8}
        pattern=".{8,20}"
        readOnly={false}
        rows={1}
        cols={30}
        className="text-input"
        style={{ border: "1px solid #ccc", padding: "8px" }}
        id="profile-password-input"
        name="profilePassword"
        onKeyDown={(e) => console.log("Key down:", e.key)}
        onKeyUp={(e) => console.log("Key up:", e.key)}
        onKeyPress={(e) => console.log("Key press:", e.key)}
        onClick={(e) => console.log("Input clicked:", e)}
        onMouseDown={(e) => console.log("Mouse down:", e)}
        onMouseUp={(e) => console.log("Mouse up:", e)}
        onMouseOver={(e) => console.log("Mouse over:", e)}
      /> */}
        <TextField
          defaultValue=""
          value={formData.name}
          label="Name"
          type="text"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={1}
          cols={30}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="name"
        />
        <TextField
          defaultValue=""
          value={formData.phoneNumber}
          label="Phone Number"
          type="number"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={4}
          cols={50}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="phoneNumber"
        />
        <TextField
          defaultValue=""
          value={formData.email}
          label="Email"
          type="email"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={4}
          cols={50}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="email"
        />
        <TextAreaField
          defaultValue=""
          value={formData.aboutYou}
          label="About You"
          onChange={(event) => onChangeHandler(event)}
          // placeholder="Tell us about yourself"
          required={false}
          autoFocus={false}
          maxLength={200}
          minLength={10}
          readOnly={false}
          rows={4}
          cols={30}
          className="text-area-input"
          style={{ border: "1px solid #ccc", padding: "8px", width: "100%" }}
          id="profile-bio-input"
          name="aboutYou"
        />
        <TextField
          defaultValue=""
          value={formData.education}
          label="Education"
          type="text"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={1}
          cols={30}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="education"
        />
        <TextField
          defaultValue=""
          value={formData.address}
          label="Address"
          type="text"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={1}
          cols={30}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="address"
        />
        <TextField
          defaultValue=""
          value={formData.skills}
          label="Skills"
          type="text"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={1}
          cols={30}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="skills"
        />
        <TextField
          defaultValue=""
          value={formData.experience}
          label="Experience"
          type="text"
          onChange={(event) => onChangeHandler(event)}
          // onBlur={(e) => console.log("Blur event:", e.target.value)}
          // onFocus={(e) => console.log("Focus event:", e.target.value)}
          // placeholder="Enter your username"
          // required
          autoFocus={false}
          autoComplete="username"
          maxLength={20}
          minLength={3}
          readOnly={false}
          rows={1}
          cols={30}
          className="text-input"
          style={{ border: "1px solid #ccc", padding: "8px" }}
          id="profile-username-input"
          name="experience"
        />
        {/* Add more fields as necessary */}
        <button type="submit" className="submit-button">
          Save Profile
        </button>
        <button type="reset" className="reset-button">
          Reset Profile
        </button>
        {/* Add more buttons or actions as necessary */}
      </form>
    </div>
  );
}
