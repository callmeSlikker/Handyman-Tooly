import React, { useState } from "react";
import { register } from "./services/userService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      // Call register API with the user's data
      const userData = { name, email, phone, password, confirmPassword };
      await register(userData); // API call to register
      navigate("/login"); // Navigate to login page

    } catch (err) {
      setError("เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  };

  return (
    <div>
      <img
        src="logoHandy.png"
        alt="Logo"
        style={{
          width: 250,
          height: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 0,
            }}
          >
            ชื่อผู้ใช้งาน
          </p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
          />
        </div>

        {/* ช่องกรอกหมายเลขโทรศัพท์ */}
        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 16,
            }}
          >
            หมายเลขโทรศัพท์
          </p>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
          />
        </div>

        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 16,
            }}
          >
            อีเมล์ผู้ใช้งาน
          </p>
          <label htmlFor="email"></label>
          <input
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 16,
            }}
          >
            รหัสผ่าน
          </p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
          />
        </div>

        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 16,
            }}
          >
            ยืนยันรหัสผ่าน
          </p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
          />
        </div>

        {/* แสดงข้อความผิดพลาด */}
        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontFamily: "Prompt",
              fontSize: 14,
              fontWeight: 400,
              marginTop: 10,
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            display: 'block',
            margin: '0 auto',
            marginTop: 30,
            color: '#1E90FF',
            backgroundColor: '#D9D9D9',
            fontFamily: "Prompt",
            fontSize: 16,
            fontWeight: 600,
            width: 130,
            paddingBlock: 5,
            border: "2px solid #D9D9D9",
            borderRadius: 10,
            marginBottom: 50,
          }}
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
};

export default Register;
