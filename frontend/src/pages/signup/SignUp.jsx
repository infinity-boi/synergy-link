import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import SignupIll from "../../assets/signup.jpg";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    personalityType: "",
    position: "",
  });

  const { loading, signup } = useSignup();

  const personalityTypes = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
    "All",
  ];

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  
  return (
    <div className="py-10 px-16 min-w-screen min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-3xl shadow-xl w-full overflow-hidden min-w-96 mx-auto">
        <div className="md:flex w-full p-6">
          <div className="hidden md:block w-2/5 bg-white px-10">
            <img src={SignupIll} alt="Signup Illustration" />
            <p className="text-xs text-slate-200">
              <a href="https://www.freepik.com/free-vector/sign-up-concept-illustration_20824341.htm#fromView=keyword&page=1&position=0&uuid=9a15603c-84b0-4675-ada5-4e1a2ea80f7a">
                Image by storyset on Freepik
              </a>
            </p>
          </div>
          <div className="w-full md:w-3/5 py-2 px-5 md:px-10">
            <h1 className="text-3xl font-bold text-center text-gray-300 mb-1">
              Sign Up{" "}
              <span className="text-blue-500 hover:text-green-700">
                {" "}
                Synergy Link{" "}
              </span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="flex -mx-3">
                <div className="w-1/2 px-3">
                  <label className="label p-1">
                    <span className="text-base label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Gourav Singh"
                    className="w-full input input-bordered  h-10"
                    value={inputs.fullName}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="w-1/2 px-3">
                  <label className="label p-1 ">
                    <span className="text-base label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="gouravsingh"
                    className="w-full input input-bordered h-10"
                    value={inputs.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </div>
              </div>
              <div class="flex -mx-3">
                <div className="w-1/2 px-3">
                  <label className="label p-1">
                    <span className="text-base label-text">Personality</span>
                  </label>
                  <select
                    value={inputs.personalityType}
                    onChange={(e) =>
                      setInputs({ ...inputs, personalityType: e.target.value })
                    }
                    className="w-full border rounded-md px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
                  >
                    <option value="">Select Personality Type</option>
                    {personalityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-1/2 px-3">
                  <label className="label p-1">
                    <span className="text-base label-text">Position</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Science Student"
                    className="w-full input input-bordered h-10"
                    value={inputs.position}
                    onChange={(e) =>
                      setInputs({ ...inputs, position: e.target.value })
                    }
                  />
                </div>
              </div>
              <div class="flex -mx-3">
                <div className="w-1/2 px-3">
                  <label className="label">
                    <span className="text-base label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full input input-bordered h-10"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                </div>

                <div className="w-1/2 px-3">
                  <label className="label">
                    <span className="text-base label-text">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full input input-bordered h-10"
                    value={inputs.confirmPassword}
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex my-4 -mx-3 justify-center">
                <GenderCheckbox
                  onCheckboxChange={handleCheckboxChange}
                  selectedGender={inputs.gender}
                />
              </div>
              <Link
                to={"/login"}
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
                href="#"
              >
                Already have an account? login
              </Link>

              <div>
                <button
                  className="btn btn-block bg-blue-600 hover:bg-green-700 btn-sm mt-2 border border-slate-700"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
