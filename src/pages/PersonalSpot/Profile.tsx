import { useRef, useState, useEffect, FC } from "react";
import TextField from "../../components/common/atom/text-input";

export default function PersonalSpotProfile() {
  useEffect(() => {}, []);

  return (
    <div>
      <p>Profile</p>
      <TextField
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
        // onKeyDown={(e) => console.log("Key down:", e.key)}
        // onKeyUp={(e) => console.log("Key up:", e.key)}
        // onKeyPress={(e) => console.log("Key press:", e.key)}
        // onClick={(e) => console.log("Input clicked:", e)}
        // onMouseDown={(e) => console.log("Mouse down:", e)}
        // onMouseUp={(e) => console.log("Mouse up:", e)}
        // onMouseOver={(e) => console.log("Mouse over:", e)}
      />
      <TextField
        defaultValue=""
        label="Username"
        type="text"
        onChange={(v) => console.log(v)}
        // onBlur={(e) => console.log("Blur event:", e.target.value)}
        // onFocus={(e) => console.log("Focus event:", e.target.value)}
        placeholder="Enter your username"
        required
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
        name="profileUsername"
      />
    </div>
  );
}
